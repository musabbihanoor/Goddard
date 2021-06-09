import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Graph from './graph';

import './mainscreen.css';


// import React, { Component } from 'react';
// import {ForceGraph2D} from 'react-force-graph';

import { ForceGraph3D } from 'react-force-graph';


import { myData } from '../data'
import './graph.css'

console.log(myData)


export class MainScreen extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className='top-bar'>
                    <img src={process.env.PUBLIC_URL + '/assets/logo-img.png'} alt='logo' className='logo-img' ></img>
                    <h3 class='title-h3 mx-auto'>Welcome to Goddard Rsearch Assistant</h3>
                    <NavLink to='/'> Back</NavLink> <br />


                </div>
                <div class='tool-ribbon'>



                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-3">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-sm">
                                            <label className='rib-btn'>
                                                <i class="fas fa-file-plus fa-3x"></i>
                                                <input type="file" style={{ display: 'none' }} required></input>
                                                <p className='btn-label'>Add</p>
                                            </label>
                                        </div>
                                        <div class="col-sm">
                                            <button className='rib-btn'><i class="fas fa-file-minus fa-3x"></i><p className='btn-label'>Remove</p></button>
                                        </div>
                                        <div class="col-sm">
                                            <button className='rib-btn'><i class="fas fa-file-times fa-3x"></i><p className='btn-label'>Clear</p></button>
                                        </div>
                                    </div>
                                </div>





                            </div>
                            <div class="col-9">
                                <div className='search-bar'>
                                    <div class="container">
                                        <div class="search-box">
                                            <input type="text" class="search-input" placeholder="Search.."></input>

                                            <button class="search-button">
                                                <i class="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>






                </div>



                <div>
                    <div className="row">
                        <div className="col-2">
                            <h5>Paper Detais</h5>
                            <p>paper more Details </p>
                        </div>
                        <div className="col-6">
                            <Graph />
                        </div>
                        <div className="col-2">
                            <h5>Paper Detais</h5>
                            <p>paper more Detaisl </p>

                        </div>
                    </div>
                </div>



            </div>



        )
    }
}

export default MainScreen;
