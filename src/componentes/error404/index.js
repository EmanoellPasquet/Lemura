import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import notFound from "../../assets/img/notFound.gif";
import { FaArrowCircleLeft } from "react-icons/fa";
import "./error.css";

function Pagina404() {
  return (
    <div className="containerError">
      <h2>Oooops... Alguma coisa de errada não está certa!</h2>
      <p>A página que você tentou acessar está indisponível ou não existe.</p>
      <img src={notFound} alt="" className="gif" />
      <p>
        Tente{" "}
        <Button as={Link} className="ButtonError" to="/">
          <FaArrowCircleLeft /> Voltar
        </Button>{" "}
        para a nossa página inicial.
      </p>
    </div>
  );
}

export default Pagina404;
