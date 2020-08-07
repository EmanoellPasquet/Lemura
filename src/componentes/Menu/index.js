import React from "react";
import Logo from "../../assets/img/Logo.png";
import {Link} from 'react-router-dom';
import "./Menu.css";
import Button from "../Button";
import { FaArrowCircleUp } from "react-icons/fa";


function Menu() {
  return (
    <header>
      <div className="border-top">
      <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={Logo} alt="devflix logo" />
        </Link>
        <Button as={Link} className="ButtonLink" to="/cadastro/video">
          UPLOAD <FaArrowCircleUp style={{verticalAlign: 'bottom'}}/>
        </Button>
      </nav>
      </div>
    </header>
  );
}

export default Menu;

