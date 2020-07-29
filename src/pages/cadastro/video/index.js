import React from 'react';
import {Link} from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';


function CadastroVideo() {
   return(
      <PageDefault>
         <h1>Cadastro Vídeo</h1> 
         <Link to="/cadastro/categoria">
            <h2>Cadastrar Categoria</h2>
         </Link>
      </PageDefault>
   )
   
}

export default CadastroVideo;