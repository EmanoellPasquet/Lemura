import React, { useState, useEffect } from "react"; //UseState para fazer com que a SPA funcione na alteração de elementos
import { Link,useHistory } from "react-router-dom";
import PageDefault from "../../../componentes/PageDefault";
import FormField from "../../../componentes/FormField";
import { Button, DeleteButton } from "../../../componentes/Button";
import useForm from "../../../hooks/useForms";
import { FaFolder, FaPlus, FaArrowLeft } from "react-icons/fa";
import categoriasRepository from "../../../repositories/categorias";
import config from "../../../config/index";
import LoadSecond from "../../../componentes/Load/LoadSecondary";
import Uniqid from "uniqid";
import FormStyle from "../video/styles";
import { Title } from "../../../componentes/Carousel/styles";
import TableStyle from "./styles";

function CadastroCategoria() {
  const valoresIniciais = {
    //objeto de categoria com valores iniciais
    nome: "",
    descricao: "",
    cor: "",
  };

  const { handlerChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);
  const history = useHistory();

  function submitCategory(event) {
    event.preventDefault();
    categoriasRepository
      .setNewCategoria(values)
      .then(() => {
        setCategorias([...categorias, values]);
        clearForm();
        // history.push('/');
      })
      .catch((error) => {
        window.console.warn("Tratar o erro e mostrar", error);
      });
  }

  const handleDelete = (event) => {
    const id = event.target.getAttribute("id");
    const URL_VALUE = window.location.hostname.includes("localhost")
      ? "http://localhost:3001/categorias"
      : "https://devflixpasquet.herokuapp.com/categorias";
    fetch(`${URL_VALUE}/${id}`, {
      method: "DELETE",
      
    })
      .then((response) => response.json())
      .then((respostaDoServer) => {
        setCategorias((prev) => prev.filter((cat) => cat.id !== Number(id)));
        
        return  (
          history.push('/cadastro/categoria')
        )
       
      });
  };

  useEffect(() => {
    window
      .fetch(`${config.URL_BACKEND}/categorias`)
      .then(async (respostaDoServer) => {
        const result = await respostaDoServer.json();
        setCategorias([...result]);
      });
  }, []);

  return (
    <PageDefault>
      <Title>
        Cadastrar nova categoria
        <FaFolder
          style={{
            verticalAlign: "bottom",
            marginLeft: "20px",
            transform: "scale(110%)",
          }}
        />
      </Title>
      <FormStyle>
        <form onSubmit={submitCategory}>
          <FormField
            label="Nome da Categoria"
            type="text"
            name="titulo"
            value={values.titulo}
            onChange={handlerChange}
            as="input"
          />

          <FormField
            label="Sub-título"
            name="subtitulo"
            type="text"
            value={values.subtitulo}
            onChange={handlerChange}
            as="input"
          />

          {/* <FormField
            label={`Cor ${values.cor}`}
            type="color"
            value={values.cor}
            onChange={handlerChange}
          /> */}

          <div>
            <Button type="submit" className="btnpagcadastro">
              Cadastrar <FaPlus />
            </Button>
          </div>
          <div className="btnpagcadastro">
            <Link to="/">
              <Button>
                Voltar <FaArrowLeft style={{ verticalAlign: "bottom" }} />
              </Button>
            </Link>
          </div>
        </form>
      </FormStyle>
      {categorias.length === 0 && <LoadSecond />}

      <TableStyle>
        <thead>
          <tr>
            <th className="titulo">Título</th>
            <th className="subtitulo">Sub-título</th>
            <th className="cor"></th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((item) => (
            <tr key={Uniqid()}>
              <td style={{ borderLeftColor: item.cor }}>{item.titulo}</td>
              <td style={{ borderLeftColor: item.cor }}>{item.subtitulo}</td>
              <td>
                <DeleteButton as=""
                  id={item.id}
                  onClick={(event) =>handleDelete(event)} 
                  type="button">
                
                  Excluir
                </DeleteButton>
              </td>
            </tr>
          ))}
        </tbody>
      </TableStyle>
    </PageDefault>
  );
}

export default CadastroCategoria;
