import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Graph from "./graph";
import { AppContext } from "../context & Reducers/appContext";
import "./mainscreen.css";

// import React, { Component } from 'react';
// import {ForceGraph2D} from 'react-force-graph';
// import { ForceGraph3D } from "react-force-graph";
// import { myData } from "../data";
import "./graph.css";

const MainScreen = () => {
  let initData = {
    id: "-",
    details: "-",
    description: "No description",
  };

  // let { nodeData } = useContext(AppContext);

  let [dtlstate, setdtlstate] = useState(initData);

  function shwoDetail(node) {
    console.log(node);
    setdtlstate({
      id: node.id,
      //   details: node.detail,
      //   description: node.description,
    });
  }

  return (
    <div className='container-fluid'>
      <div className='top-bar'>
        <img
          src={process.env.PUBLIC_URL + "/assets/logo-img.png"}
          alt='logo'
          className='logo-img'
        ></img>
        <h3 className='title-h3 mx-auto'>
          Welcome to Goddard Rsearch Assistant
        </h3>
        <NavLink to='/'> Back</NavLink> <br />
      </div>
      <div className='tool-ribbon'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-3'>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-sm'>
                    <label className='rib-btn'>
                      <i className='fas fa-file-plus fa-3x'></i>
                      <input
                        type='file'
                        style={{ display: "none" }}
                        required
                      ></input>
                      <p className='btn-label'>Add</p>
                    </label>
                  </div>
                  <div className='col-sm'>
                    <button className='rib-btn'>
                      <i className='fas fa-file-minus fa-3x'></i>
                      <p className='btn-label'>Remove</p>
                    </button>
                  </div>
                  <div className='col-sm'>
                    <button className='rib-btn'>
                      <i className='fas fa-file-times fa-3x'></i>
                      <p className='btn-label'>Clear</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-9'>
              <div className='search-bar'>
                <div className='container'>
                  <div className='search-box'>
                    <input
                      type='text'
                      className='search-input'
                      placeholder='Search..'
                    ></input>

                    <button className='search-button'>
                      <i className='fas fa-search'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='graph-section'>
        <div className='left-panel'>
          <h5>Paper Detais</h5>
          {/* <p>
              {nodeData ? JSON.stringify(nodeData[0].data.data.id) : "No Data"}
            </p> */}
          <p> ID : {dtlstate.id}</p> <br />
          <p> Details : {dtlstate.details}</p> <br />
          <p> Description : {dtlstate.description}</p> <br />{" "}
        </div>
        <div className='center-panel'>
          <Graph dtlUpdate={shwoDetail} />
        </div>
        <div className='right-panel'>
          <p>Right Panel</p>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
