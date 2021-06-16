import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.js";
import "./App.css";
// ROUTER
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./navigation/RouterConfig";

import M from "materialize-css";

const sideNav = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, null);
  });
};

function App() {
  sideNav();
  return (
    <div className="App">
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </div>
  );
}

export default App;
