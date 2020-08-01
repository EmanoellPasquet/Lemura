
import React, { useState } from "react"; //UseState para fazer com que a SPA funcione na alteração de elementos
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
    cor: "#000",
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
        value={values.cor} 
        type='color'
        onChange={handlerChange} 
        />

        <Button>Cadastrar</Button>
      </form>
      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={`${categoria}${indice}`}>{categoria.nome}</li>;
        })}
      </ul>

      <Button><Link to="/"> Voltar</Link></Button>
    </PageDefault>
  );
}

export default CadastroCategoria;
