import React from "react";
import Logo from "../../assets/img/Logo.png";
import {Link} from 'react-router-dom';
import "./Menu.css";
import Button from "../Button";
import {  FaVideo, FaFolderPlus } from "react-icons/fa";


function Menu() {
  return (
    <header>
      <div className="border-top">
      <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={Logo} alt="devflix logo" />
        </Link>
        <div className="ButtonMenu">
        <Button as={Link} className="ButtonLink" to="/cadastro/categoria">
        <span className="text">Categoria</span><FaFolderPlus className="icon" style={{verticalAlign: 'bottom'}}   />
        </Button>
        <Button as={Link} className="ButtonLink" to="/cadastro/video">
       <span className="text">Video</span>    <FaVideo className="icon" style={{verticalAlign: 'bottom'}}   />
        </Button>
        </div>
      </nav>
      </div>
    </header>
  );
}

export default Menu;

