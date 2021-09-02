import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../UserApi";
const Login2 = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className='login2'>
      <form onSubmit={(e) => onSubmit(e)}>
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
            <i className='far fa-envelope'></i>
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
            <i className='fas fa-lock'></i>
          </div>
        </div>

        <input type='submit' className='btn' value='Sign in'></input>
      </form>
    </div>
  );
};

export default Login2;
