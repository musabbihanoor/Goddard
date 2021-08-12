import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });

  const { name, email, contact, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className='register'>
      <form>
        <div className='item'>
          <p>Name</p>
          <div className='sub-item'>
            <input
              type='text'
              placeholder='Enter name'
              value={name}
              name='name'
              onChange={(e) => onChange(e)}
            ></input>
            <i class='fas fa-user'></i>
          </div>
        </div>
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
          <p>Contact</p>
          <div className='sub-item'>
            <input
              type='text'
              placeholder='Enter phone'
              value={contact}
              name='contact'
              onChange={(e) => onChange(e)}
            ></input>
            <i class='fas fa-phone'></i>
          </div>
        </div>
        <div className='item'>
          <p>Password</p>
          <div className='sub-item'>
            <input
              type='password'
              placeholder='Enter Password'
              value={password}
              name='password'
              onChange={(e) => onChange(e)}
            ></input>
            <i class='fas fa-lock'></i>
          </div>
        </div>
        <Link to='/mainscreen2'>
          <input type='submit' className='btn' value='Sign up'></input>
        </Link>
      </form>
    </div>
  );
};

export default Register;
