import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom"
import Menu from './Components/menu';
import Graph from './Components/graph'
import Login from './Components/Login'
import MainScreen from './Components/mainscreen'
// import { ForceGraph2D, ForceGraph3D, ForceGraphVR, ForceGraphAR } from 'react-force-graph';


export class App extends Component {
  render() {
    return (
      <div className="App">
        

        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path='/' component={() => <Menu />} />
            <Route exact path='/graph' component={() => <Graph />} />
            <Route exact path='/login' component={() => <Login />} />
            <Route exact path='/mainscreen' component={() => <MainScreen />} />

          </Switch>
        </BrowserRouter>

      </div>
    )
  }
}

export default App;
