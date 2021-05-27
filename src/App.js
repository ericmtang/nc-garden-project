import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Store from "./components/Store/Store";
import StoreDetail from "./components/Store/StoreDetail";
import Classifieds from "./components/Classifieds";
import Recipes from "./components/Recipes";
import PlantDB from "./components/PlantDB";
import background from "./img/bg1.jpg";
import "./App.css";

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <div className="container mt-2" style={{ marginTop: 40 }}>
          <Switch>
            <Route exact path="/" render={(props) => <Home />} />
            <Route path="/blog" render={(props) => <Blog />} />
            <Route path="/store/detail" render={(props) => <StoreDetail />} />
            <Route path="/store" render={(props) => <Store />} />
            <Route path="/classifieds" render={(props) => <Classifieds />} />
            <Route path="/recipes" render={(props) => <Recipes />} />
            <Route path="/plantdb" render={(props) => <PlantDB />} />
            <Route path="/home" render={(props) => <Home />} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
