import React from "react";
import Logo from "../../assets/img/Logo.png";
import {Link} from 'react-router-dom';
import "./Menu.css";
import Button from "../Button";
//import ButtonLink from './componentes/ButtonLink';

function Menu() {
  return (
    <header>
      <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={Logo} alt="devflix logo" />
        </Link>
        <Button as={Link} className="ButtonLin" to="/test404">
          Teste 404
        </Button>
        <Button as={Link} className="ButtonLink" to="/cadastro/video">
          Novo vídeo
        </Button>
      </nav>
    </header>
  );
}

export default Menu;
