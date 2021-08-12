import React, { Fragment, useState, useEffect, useLocation } from "react";
import Login2 from "./Login2";
import Register from "./Register";
import "./Auth.css";

const Auth = () => {
  var background = process.env.PUBLIC_URL + "/background.png";

  useEffect(() => {
    document.body.style.backgroundImage = `url(${background})`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  });

  const [register, setRegister] = useState(true);

  return (
    <Fragment>
      <div className='auth'>
        <img src={process.env.PUBLIC_URL + "/logo.png"}></img>

        <h3>{!register ? "Sign up to Register" : "Sign into your account"}</h3>
        {register ? <Login2 /> : <Register />}

        <div className='option'>
          <h5>
            {!register ? "Already have an account?" : "Don't have an account?"}
          </h5>
          <button onClick={() => setRegister(!register)}>
            {!register ? "Login" : "Register"}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Auth;
