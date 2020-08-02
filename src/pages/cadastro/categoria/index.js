import React, { useState, useEffect } from "react"; //UseState para fazer com que a SPA funcione na alteração de elementos
import { Link } from "react-router-dom";
import PageDefault from "../../../componentes/PageDefault";
import FormField from "../../../componentes/FormField";
import Button from '../../../componentes/Button'


function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    //objeto de categoria com valores iniciais
    nome: "",
    descricao: "",
    cor: "",
  };

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
   // chave: nome, descricao, bla, bli
   setValues({
     ...values,
     [chave]: valor, // nome: 'valor'
   })
 }

 function handlerChange(infosDoEvento) {
   setValue(
     infosDoEvento.target.getAttribute('name'),
     infosDoEvento.target.value
   );
 }

 useEffect(() => {
  if (window.location.href.includes('localhost')) {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }
}, []);
  

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
          setValues(valoresIniciais);
        }}
      >
        <FormField 
        label="Nome da Categoria"
        type='text'
        name='nome'
        value={values.nome} 
        onChange={handlerChange} 
        />

      <FormField 
      label="Descrição"
      type='textarea'
        value={values.descricao} 
        onChange={handlerChange} 
        />

<FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.id}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Button><Link to="/"> Voltar</Link></Button>
    </PageDefault>
  );
}

export default CadastroCategoria;
