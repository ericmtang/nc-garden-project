import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home"
import Blog from "./components/Blog"
import Store from "./components/Store"
import Classifieds from "./components/Classifieds"
import "./App.css";

function App() {
  return (
    <div>
    <BrowserRouter>
      <NavigationBar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/">
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
        </Switch>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
