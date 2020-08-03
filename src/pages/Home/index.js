import React, { useEffect, useState } from "react";
import BannerMain from "../../componentes/BannerMain";
import Carousel from "../../componentes/Carousel";
import categoriasRepository from "../../repositories/categorias";
import PageDefault from "../../componentes/PageDefault/";

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository
      .getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos);
      })
      .catch((e) => {});
  }, []);

  //https://devflixpasquet.herokuapp.com/categorias?_embed=videos
  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && <div>Loading . . .</div>}

      {dadosIniciais.length >= 1 && (
        <>
          <BannerMain
            videoTitle={dadosIniciais[0].videos[0].titulo}
            url={dadosIniciais[0].videos[0].url}
            videoDescription={"First video"}
          />

          <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
        </>
      )}
      {/* {<BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"First video"}
      />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[1]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[2]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[3]} /> */}
    </PageDefault>
  );
}

export default Home;
