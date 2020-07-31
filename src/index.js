import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/Home";
import CadastroVideo from "./pages/cadastro/video";
import {  BrowserRouter, Switch, Route} from "react-router-dom";
import CadastroCategoria from "./pages/cadastro/categoria";
import Pagina404 from "./componentes/error404";




ReactDOM.render(
    <BrowserRouter>
    <Switch>
        <Route path="/" component={App} exact/>
        <Route path="/cadastro/video" component={CadastroVideo} exact/>
        <Route path="/cadastro/categoria" component={CadastroCategoria} exact/>
        <Route component={Pagina404} />
    </Switch>
    </BrowserRouter>,
  document.getElementById("root")
);
