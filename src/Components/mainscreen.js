import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './mainscreen.css';



export class MainScreen extends Component {
    render() {
        return (
            <div>
                <div className='top-bar'>
                    <img src={process.env.PUBLIC_URL + '/assets/logo-img.png'} alt='logo' className='logo-img' ></img>
                    <h3 class='title-h3'>Welcome to Goddard Rsearch Assistant</h3>
                    <NavLink to='/'> Back</NavLink> <br />


                </div>
                <div class='tool-ribbon'>
                    

                    <label className='rib-btn'>
                        <i class="fas fa-file-plus fa-3x"></i>
                        <input type="file" style={{ display: 'none' }} required></input>
                        <p className='btn-label'>Add</p>
                    </label>

                    <button className='rib-btn'><i class="fas fa-file-minus fa-3x"></i><p className='btn-label'>Remove</p></button>
                    <button className='rib-btn'><i class="fas fa-file-times fa-3x"></i><p className='btn-label'>Clear</p></button>

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

                    <div className='left-panel'>
                        <h5>Paper Detais</h5>
                        <p>paper more Details </p>
                    </div>

                    <div className='right-panel'>
                        <h5>Paper Detais</h5>
                        <p>paper more Detaisl </p>
                    </div>

                </div>

        )
    }
}

export default MainScreen;
