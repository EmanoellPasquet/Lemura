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
          <span className="btnCategoria"><Button>
            <Link to="/cadastro/categoria">Nova Categoria </Link>
          </Button>
          </span>
        </div>
      </div>
    </PageDefault>
  );
}

export default CadastroVideo;
