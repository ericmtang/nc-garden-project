import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Store from "./components/Store";
import Classifieds from "./components/Classifieds";
import Recipes from "./components/Recipes";
import PlantDB from "./components/PlantDB";
import background from "./img/bg1.jpg";
import "./App.css";

function App() {
  return (
    <div style={{ 
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
    }}>
      <HashRouter>
        <NavigationBar />
        <div className="container mt-2" style={{ marginTop: 40 }}>
          <Switch>
            <Route exact path="/" render={(props) => <Home />} />
            <Route path="/Blog" render={(props) => <Blog />} />
            <Route path="/Store" render={(props) => <Store />} />
            <Route path="/Classifieds" render={(props) => <Classifieds />} />
            <Route path="/Recipes" render={(props) => <Recipes />} />
            <Route path="/PlantDB" render={(props) => <PlantDB />} />
            <Route path="/Home" render={(props) => <Home />} />
            {/*
              <Home />
            </Route> 
            <Route path="/Blog">
              <Blog />
            </Route>
            <Route path="/Store">
              <Store />
            </Route>
            <Route path="/Classifieds">
              <Classifieds />
            </Route>
            <Route path="/Recipes">
              <Recipes />
            </Route>
            <Route path="/PlantDB">
              <PlantDB />
            </Route>
            */}
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
