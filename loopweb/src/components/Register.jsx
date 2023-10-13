import axios from 'axios';
import React, { useState } from 'react'

function Register({setModal, setResponseMessage}) {
  const [data, setData] = useState({})
  const [error, setError] = useState('')

  const validateEmail = email => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const validatePassword = password => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    return passwordRegex.test(password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData(prevState => ({
        ...prevState,
        [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!data.firstname) {
      setError("Empty first name!");
      return;
    }

    if (!data.lastname) {
      setError("Empty last name name!");
      return;
    }

    if (!data.email) {
      setError("Empty email!");
      return;
    }else{
      if (!validateEmail(data.email)) {
        setError("Invalid email format!");
        return;
      }
    }

    if (!data.password) {
      setError("Empty password!");
      return;
    }else{
      if (!validatePassword(data.password)) {
        setError("Password should be at least 8 characters long and contain a number, uppercase, lowercase, and a special character!");
        return;
      }
    }

    
    if (!data.comfirmedPassword) {
      setError("Empty comfirm password!");
      return;
    }else{
      if (data.password !== data.comfirmedPassword) {
        setError("Passwords do not match!");
        return;
      }
    }

    axios({
      method: "post",
      url: "http://localhost:5000/api/users/",
      data: {
        "firstname": data.firstname,
        "lastname": data.lastname,
        "email": data.email,
        "password": data.password,
        "confirm_password": data.comfirmedPassword
       }
    }).then(function (response) {
      if(response.data.errors){
        setError(response.data.errors.email);
      }else{
        setResponseMessage(response.data.message); // set successfully message to login panel
        setError("");
        setModal('login') // take user to log in panel
      }
    })
    
  }


  return (
    <div className='register'>
        <h1>Looping Cinemas</h1>
        <h4 className='mt-5'>Become A Member</h4>
        <span className={`error ${error ? 'active' : ''} `}>{error}</span>
        <input type="text" name='firstname' placeholder='First name' onChange={handleChange}/>
        <input type="text" name='lastname' placeholder='Last name' onChange={handleChange}/>
        <input type="text" name='email' placeholder='Email address' onChange={handleChange}/>
        <input type="password" name='password' placeholder='Password' onChange={handleChange}/>
        <input type="password" name='comfirmedPassword' placeholder='Confirm password' onChange={handleChange}/>
        <button className='register' onClick={handleSubmit}>REGISTER</button>
    </div>
  )
}

export default Register