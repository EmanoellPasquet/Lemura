import React from "react";
import dadosIniciais from "../../data/dados_iniciais.json"
import Menu from "../../componentes/Menu";
import BannerMain from "../../componentes/BannerMain";
import Footer from "../../componentes/Footer";
import Carousel from "../../componentes/Carousel";

function App() {
  return (
    <div>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"First video"}
      />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[1]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[2]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[3]} />

      <Footer/>
    </div>
  );
}

export default App;
