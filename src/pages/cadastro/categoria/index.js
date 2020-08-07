import React, { useState, useEffect } from "react"; //UseState para fazer com que a SPA funcione na alteração de elementos
import { Link, /*useHistory*/ } from "react-router-dom";
import PageDefault from "../../../componentes/PageDefault";
import FormField from "../../../componentes/FormField";
import Button from "../../../componentes/Button";
import useForm from "../../../hooks/useForms";
import { FaArrowCircleLeft, FaPlusCircle } from "react-icons/fa";
import categoriasRepository from "../../../repositories/categorias";
import config from "../../../config/index";
import Load from "../../../componentes/Load";
import Uniqid from "uniqid";

function CadastroCategoria() {
  const valoresIniciais = {
    //objeto de categoria com valores iniciais
    nome: "",
    descricao: "",
    cor: "",
  };

  const { handlerChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);
  //const history = useHistory();

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

  // const handleDelete = (event) => {
  //   const id = event.target.getAttribute("id");

  //   const URL_VALUE = window.location.hostname.includes("localhost")
  //     ? "http://localhost:3001/categorias"
  //     : "https://rangoflix.herokuapp.com/categorias";

  //   fetch(`${URL_VALUE}/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((response) => response.json())
  //     .then((responseServer) => {
  //       setCategorias((prev) => prev.filter((cat) => cat.id !== Number(id)));
  //     });
  // };

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
      <h1>Cadastrar nova categoria</h1>
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

        <FormField
          type="color"
          value={values.cor}
          onChange={handlerChange}
          as="input"
        />

        <Link to="/">
          <Button>
            <FaArrowCircleLeft /> Voltar
          </Button>
        </Link>

        <Button type="submit">
          Cadastrar <FaPlusCircle />
        </Button>
      </form>
      {categorias.length === 0 && <Load />}

      <table>
        <tbody>
          {categorias.map((item) => (
            <tr key={Uniqid()}>
              <td style={{ borderBottomColor: item.cor }}>
                {item.titulo}
                {/* <Button
                  id={categorias.id}
                  onClick={(event) => handleDelete(event)}
                  type="button"
                >
                  Excluir
                </Button> */}
              </td>
              <td style={{ borderBottomColor: item.cor }}>{item.subtitulo}</td>
              <td style={{ borderBottomColor: item.cor }}>
                <span style={{ backgroundColor: item.cor }}>{item.cor}</span>
              </td>
            </tr>
          ))}
        </tbody>
        <thead>
          <tr>
            <th>Título:</th>
            <th>Sub-título:</th>
            <th>Cor:</th>
          </tr>
        </thead>
      </table>
    </PageDefault>
  );
}

export default CadastroCategoria;
