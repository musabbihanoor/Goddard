import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login2 = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='login2'>
      <form>
        <div className='item'>
          <p>Email</p>
          <div className='sub-item'>
            <input
              type='text'
              placeholder='Enter Email'
              value={email}
              name='email'
              onChange={(e) => onChange(e)}
            ></input>
            <i class='far fa-envelope'></i>
          </div>
        </div>
        <div className='item'>
          <p>Password</p>
          <div className='sub-item'>
            <input
              type='password'
              placeholder='Enter Password '
              value={password}
              name='password'
              onChange={(e) => onChange(e)}
            ></input>
            <i class='fas fa-lock'></i>
          </div>
        </div>
        <Link to='/mainscreen2'>
          <input type='submit' className='btn' value='Sign in'></input>
        </Link>
      </form>
    </div>
  );
};

export default Login2;
