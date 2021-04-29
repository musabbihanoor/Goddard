import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './login.css'



export class Login extends Component {
    render() {
        return (
            <div>
                <div className="container border border-primary">
                    <div className="row">
                        <div className="col-2 blue_border_bottom blue_border_right">
                            <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/logo-img.png'} />
                        </div>
                        <div className="col-10 blue_border_bottom">
                            <h1 className="text-center my-4 main_text">Welcome To Goddard Research Assisstant</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 d-inline-flex blue_border_right">
                            <img className="img-fluid goddard_text" src={process.env.PUBLIC_URL + '/assets/Goddard-text.png'} />
                        </div>
                        <div className="col-10 fields">
                            <div className="row d-flex justify-content-center mx-auto orange_border ">
                                <div className="col-3 orange_border_right">
                                    <label htmlFor="exampleInputEmail1" className="form-label"><h5 className="labels">Email address</h5></label>
                                </div>
                                <div className="col-9">
                                    <input type="email" className="form-control my-1" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center  mx-auto orange_border">
                                <div className="col-3 password_background">
                                    <label htmlFor="exampleInputPassword1" className="form-label"><h5 className="labels">Password</h5></label>
                                </div>
                                <div className="col-9 password_background orange_border_left">
                                    <input type="password" className="form-control password_background my-1" id="exampleInputPassword1" />
                                </div>
                            </div>
                            <div className="row lastbuttons">
                                <div className="col-10">
                                    <button type="button" className="btn btn-light Register_btn"><h4>Register</h4></button>
                                </div>
                                <div className="col-2">
                                    <button type="button" className="btn btn-light"><h4>Sign-In</h4></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default Login
