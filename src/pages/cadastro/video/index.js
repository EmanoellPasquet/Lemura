import React from 'react';
import {Link} from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';


function CadastroVideo() {
   return(
      <PageDefault>
         <h1>Cadastrar novo vídeo</h1> 
         <Link to="/cadastro/categoria">
            <h1>Cadastrar nova categoria</h1>
         </Link>
      </PageDefault>
   )
   
}

export default CadastroVideo;