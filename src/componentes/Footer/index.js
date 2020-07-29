import React from 'react';
import { FooterBase } from './styles';
import Logo from "../../assets/img/Logo.png";
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
          <img className="Logo" src={Logo} alt="devflix logo" />
        </Link>
    </FooterBase>
  );
}

export default Footer;
