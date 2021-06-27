import React, { Component } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Menu from "./Components/menu";
import Graph from "./Components/graph";
import Login from "./Components/Login";
import MainScreen from "./Components/mainscreen";
// import { ForceGraph2D, ForceGraph3D, ForceGraphVR, ForceGraphAR } from 'react-force-graph';
import { AppContextProvider } from "./context & Reducers/appContext";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <AppContextProvider>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path="/" component={() => <Menu />} />
              <Route exact path="/graph" component={() => <Graph />} />
              <Route exact path="/login" component={() => <Login />} />
              <Route
                exact
                path="/mainscreen"
                component={() => <MainScreen />}
              />
            </Switch>
          </BrowserRouter>
        </AppContextProvider>
      </div>
    );
  }
}

export default App;
