import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PageDefault from "../../../componentes/PageDefault";
import Button from "../../../componentes/Button";
import {  FaVideo,  FaPlus, FaArrowLeft } from "react-icons/fa";
import FormField from "../../../componentes/FormField";
import useForm from "../../../hooks/useForms";
import videosRepository from "../../../repositories/videos";
import categoriasRepository from "../../../repositories/categorias";
import FormStyle from "./styles";
import { Title } from "../../../componentes/Carousel/styles";

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
      <Title>Cadastro de vídeo <FaVideo style={{verticalAlign: 'bottom', marginLeft:'10px', transform:'scale(110%)'}}/></Title>
      <FormStyle>
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
                // console.log("Success!");
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
      <div>
      <Button type="sumbit" className="btnpagcadastro">
            Cadastrar <FaPlus style={{verticalAlign: 'bottom'}} />
          </Button>
      </div>
      <div className="btnpagcadastro">
        <Link  to ="/">
      <Button >
            Voltar <FaArrowLeft style={{verticalAlign: ''}} />
          </Button>
          </Link>
      </div>
        </form>

  
      </FormStyle>
    </PageDefault>
  );
}

export default CadastroVideo;
