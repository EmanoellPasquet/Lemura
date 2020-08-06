import React, { useState, useEffect } from "react"; //UseState para fazer com que a SPA funcione na alteração de elementos
import { Link } from "react-router-dom";
import PageDefault from "../../../componentes/PageDefault";
import FormField from "../../../componentes/FormField";
import Button from "../../../componentes/Button";
import useForm from "../../../hooks/useForms";
import { FaArrowCircleLeft, FaPlusCircle } from "react-icons/fa";
import categoriasRepository from "../../../repositories/categorias";
import config from '../../../config/index'
import Load from "../../../componentes/Load";
import Uniqid from 'uniqid';

function CadastroCategoria() {
  const valoresIniciais = {
    //objeto de categoria com valores iniciais
    nome: "",
    descricao: "",
    cor: "",
  };

  const { handlerChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  function submitCategory(event) {
    event.preventDefault();
    categoriasRepository
      .setNewCategory(values)
      .then(() => {
        setCategorias([...categorias, values]);
        clearForm();
      })
      .catch((error) => {
        window.console.warn("Tratar o erro e mostrar", error);
      });
  }
  useEffect(() => {
    window
      .fetch(`${config.URL_BACKEND}/categorias`)
      .then(async (respostaDoServer) => {
        const result = await respostaDoServer.json();
        setCategorias([...result]);
      });
  }, []);

  // useEffect(() => {
  //   const URL = window.location.hostname.includes("localhost")
  //     ? "http://localhost:3001/categorias"
  //     : "https://devflixpasquet.herokuapp.com/categorias";
  //   fetch(URL).then(async (respostaDoServer) => {
  //     const resposta = await respostaDoServer.json();
  //     setCategorias([...resposta]);
  //   });
  // },[]);

  //chaves na declaração para "abrir" o valor do conteúdo
  //[nomeDaCategoria] nome referenciado para dar à categoria
  //setNomeDaCategoria utilizado para mudar o nome da categoria
  //Filmes dentro do useState é o valor inicial

  return (
    <PageDefault>
      <h1>Cadastrar nova categoria</h1>
      <form onSubmit={submitCategory}
        /*onSubmit={function submitHandler(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias(
            [
              ...categorias, //3 pontos para para que tudo que já foi escrito seja guardado ao invés de jogar dora.
              values,
            ],
            []
          );
          clearForm(valoresIniciais);
        }}*/
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handlerChange} as="input"
        />

        <FormField
          label="Sub-título"
          type="text"
          value={values.subtitulo}
          onChange={handlerChange}
          as="input"
        />

        <FormField
          label="Cor da categoria"
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

        <Button  type="submit">
          Cadastrar <FaPlusCircle />
        </Button>
      </form>
      {categorias.length >= 0 && (<Load />)}

<table>
  <tbody>
    {
      categorias.map((item) => (
        <tr key={Uniqid()}>
          <td style={{ borderBottomColor: item.cor }}>
            {item.titulo}
          </td>
          <td style={{ borderBottomColor: item.cor }}>
            {item.subtitulo}
          </td>
          <td style={{ borderBottomColor: item.cor }}>
            <span style={{ backgroundColor: item.cor }}>{item.cor}</span>
          </td>
        </tr>
      ))
    }
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
