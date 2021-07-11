import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Aboutscreen from "./screens/Aboutscreen";
import Cartscreen from "./screens/Cartscreen";
import Homescreen from "./screens/Homescreen";
import Itemscreen from "./screens/Itemscreen";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about" component={Aboutscreen}></Route>
        <Route path="/item/:id" component={Itemscreen}></Route>
        <Route path="/cart/:id?" component={Cartscreen}></Route>
        <Route exact path="/" component={Homescreen}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
