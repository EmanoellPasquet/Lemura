import React from "react";
import { FooterBase } from "./styles";
import Logo from "../../assets/img/Logo.png";
import { Link } from "react-router-dom";
import linkedin from "../../assets/img/linkedin.png";
import github from "../../assets/img/github.png";

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <img className="Logo" src={Logo} alt="devflix logo" />
      </Link>
      <div>
        <a href="https://github.com/EmanoellPasquet/" target="blank">
          <img className="github" src={github} alt="github icon" />
        </a>
        <a href=" https://www.linkedin.com/in/emmanoell-pasquet-35b791174"  target="blank1">
          <img className="linkedin" src={linkedin} alt="linkedin icon" />
        </a>
      </div>
    </FooterBase>
  );
}

export default Footer;
