import React, { Component, useEffect, useState } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Menu from "./Components/menu";
import Graph from "./Components/graph";
import Login from "./Components/Login";
import MainScreen from "./Components/mainscreen";
import Auth from "./Components/Auth";
import Mainscreen2 from "./Components/Mainscreen2";
import Welcome from "./Components/Welcome";
// import { ForceGraph2D, ForceGraph3D, ForceGraphVR, ForceGraphAR } from 'react-force-graph';
import { AppContextProvider } from "./context & Reducers/appContext";
import "./App.css";
import { loadUser, setAuthToken } from "./UserApi";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetchUser();
  });

  const fetchUser = async () => {
    const data = await loadUser();
    setUser(data);
  };

  return (
    <div className='App'>
      <AppContextProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path='/' component={() => <Welcome />} />
            <Route exact path='/graph' component={() => <Graph />} />
            <Route exact path='/login' component={() => <Login />} />
            <Route exact path='/mainscreen' component={() => <MainScreen />} />
            <Route
              exact
              path='/mainscreen2'
              component={() => <Mainscreen2 />}
            />
            <Route exact path='/auth' component={() => <Auth />} />
          </Switch>
        </BrowserRouter>
      </AppContextProvider>
    </div>
  );
};

export default App;
