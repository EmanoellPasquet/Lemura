import React, { useState, useEffect } from "react"; //UseState para fazer com que a SPA funcione na alteração de elementos
import { Link } from "react-router-dom";
import PageDefault from "../../../componentes/PageDefault";
import FormField from "../../../componentes/FormField";
import Button from "../../../componentes/Button";
import useForm from "../../../hooks/useForms";

function CadastroCategoria() {
  const valoresIniciais = {
    //objeto de categoria com valores iniciais
    nome: "",
    descricao: "",
    cor: "",
  };

  const { handlerChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes("localhost")
      ? "http://localhost:3001/categorias"
      : "https://devflixpasquet.herokuapp.com/categorias";
    fetch(URL).then(async (respostaDoServer) => {
      const resposta = await respostaDoServer.json();
      setCategorias([...resposta]);
    });
  });

  //chaves na declaração para "abrir" o valor do conteúdo
  //[nomeDaCategoria] nome referenciado para dar à categoria
  //setNomeDaCategoria utilizado para mudar o nome da categoria
  //Filmes dentro do useState é o valor inicial

  return (
    <PageDefault>
      <h1>Cadastrar nova categoria: {values.nome}</h1>
      <form
        onSubmit={function submitHandler(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias, //3 pontos para para que tudo que já foi escrito seja guardado ao invés de jogar dora.
            values,
          ]);
          clearForm(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handlerChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          value={values.descricao}
          onChange={handlerChange}
        />

        <FormField
          label="Cor"
          value={values.cor}
          type="color"
          onChange={handlerChange}
        />

        <Button>Cadastrar</Button>
      </form>
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>{categoria.titulo}</li>
        ))}
      </ul>

      <Button>
        <Link to="/"> Voltar</Link>
      </Button>
    </PageDefault>
  );
}

export default CadastroCategoria;
