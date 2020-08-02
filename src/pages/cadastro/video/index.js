import React from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../componentes/PageDefault";
import "./cadastro.css";
import Button from "../../../componentes/Button";

function CadastroVideo() {
  return (
    <PageDefault>
      <div className="outerContainer">
        <div className="containerCadastro">
        <span className="btnVideo">
          <Button> Novo Vídeo</Button>
          </span>
          <Link to="/cadastro/categoria"><span className="btnCategoria"><Button>
            Nova Categoria 
          </Button></span></Link>
          
        </div>
      </div>
    </PageDefault>
  );
}

export default CadastroVideo;
