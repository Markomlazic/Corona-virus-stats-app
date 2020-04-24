import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import AboutCorona from "./components/AboutCorona";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={PageOne} />
          <Route path="/byCountry" exact component={PageTwo} />
          <Route path="/aboutCorona" exact component={AboutCorona} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
