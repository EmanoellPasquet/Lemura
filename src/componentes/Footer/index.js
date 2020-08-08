import React from "react";
import { FooterBase } from "./styles";
import Logo from "../../assets/img/Logo.png";
import { Link } from "react-router-dom";
import linkedin from "../../assets/img/linkedin.svg";
import github from "../../assets/img/github.svg";
import BackToTop from "react-back-to-top";

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
        <a
          href=" https://www.linkedin.com/in/emmanoell-pasquet-35b791174"
          target="blank1"
        >
          <img className="linkedin" src={linkedin} alt="linkedin icon" />
        </a>
      </div>
      <BackToTop
        mainStyle={{
          width: "100%",
          height: "100%",
          background: "#5d5d5d",
          borderRadius:"50%",
          border:"1px solid #62D2F9",
         

        }}
        percentStyle={{
          width: "100%",
          height: "100%",
        }}
        animate="rotate"
        offsetTop={20}
        step={50}
        percent={true}
        visiblePercent={80}
      />
    </FooterBase>
  );
}

export default Footer;
