import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  var background = process.env.PUBLIC_URL + "/background.png";
  useEffect(() => {
    document.body.style.backgroundImage = `url(${background})`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  });
  return (
    <div className='welcome'>
      <h1>
        Welcome to Goddard <br></br> Research Assistant!
      </h1>
      <h2>Start Exploring... </h2>
      <button>
        <Link to='/auth'>
          Continue<i className='fa fa-arrow-right'></i>
        </Link>
      </button>
    </div>
  );
};

export default Welcome;
