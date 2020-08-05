import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PageDefault from "../../../componentes/PageDefault";
//import "./cadastro.css";
import Button from "../../../componentes/Button";
import { FaArrowAltCircleUp } from "react-icons/fa";
import FormField from "../../../componentes/FormField";
import useForm from "../../../hooks/useForms";
import videosRepository from "../../../repositories/videos";
import categoriasRepository from "../../../repositories/categorias";

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handlerChange, values } = useForm({
    titulo: "",
    url: "",
    categoria: "",
  });

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
  }, []);
  console.log(categoryTitles);

  return (
    <PageDefault>
      <div className="outerContainer">
        <div className="containerCadastro">
          <h1>Cadastro de vídeo</h1>
          <form
            onSubmit={(event) => {
              event.preventDefault();

              const categoriaSelecionada = categorias.find((categoria) => {
                return categoria.titulo === values.categoria;
              });

              videosRepository
                .create({
                  titulo: values.titulo,
                  url: values.url,
                  categoriaId: categoriaSelecionada.id,
                })
                .then(() => {
                  console.log("Success!");
                  history.push("/");
                });
            }}
          >
            <FormField
              label="Título do vídeo"
              name="titulo"
              value={values.titulo}
              onChange={handlerChange}
            />

            <FormField
              label="Link do vídeo"
              name="url"
              value={values.url}
              onChange={handlerChange}
            />

            <FormField
              label="Categoria do vídeo"
              name="categoria"
              value={values.categoria}
              onChange={handlerChange}
              suggestions={categoryTitles}
            />

            <span className="btnVideo">
              <Button>
                {" "}
                UPLOAD <FaArrowAltCircleUp />
              </Button>
            </span>
          </form>
          <Link to="/cadastro/categoria">
            <span className="btnCategoria">
              <Button>Nova Categoria</Button>
            </span>
          </Link>
        </div>
      </div>
    </PageDefault>
  );
}

export default CadastroVideo;
