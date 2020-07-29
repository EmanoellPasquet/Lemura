import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import {  BrowserRouter, Switch, Route} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
    <Switch>
        <Route path="/" component={App} exact/>
        



    </Switch>
    
    </BrowserRouter>,
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
  document.getElementById("root")
);
