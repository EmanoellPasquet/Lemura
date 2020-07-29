import React from 'react';
import {Link} from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';


function CadastroCategoria() {
   return(
      <PageDefault>
         <h1>Cadastro de Categoria</h1> 
         <form>
            <label for="cadastro">Nome da categoria</label>
            <input id="cadastro" type="text"/>
            <button>Cadastrar</button>
         </form>



         <Link to="/">
            Ir para Home
         </Link>
      </PageDefault>
   )
   
}

export default CadastroCategoria;