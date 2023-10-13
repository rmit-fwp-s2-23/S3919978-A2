import axios from 'axios';
import React, { useState } from 'react'

function Login({setModal, setUser, responseMessage}) {
  const [data, setData] = useState({});

  const [errors, setErrors] = useState("")

  const handleChange = e => {
    const { name, value } = e.target;

    setData(prevState => ({
        ...prevState,
        [name]: value
    }));
  };

  const handleLogin = () => {
    // const users = JSON.parse(localStorage.getItem('users'));
    // var userFound = false

    // for(const user of users){
    //   if(data.email === user.email && data.password === user.password){
    //     localStorage.setItem('user', JSON.stringify({
    //       email: user.email,
    //     }))
    //     setUser({
    //       email: user.email,
    //       firstname: user.firstname,
    //       lastname: user.lastname,
    //     })
    //     userFound = true
    //     break

    //   }
    // }

    // if(userFound){
      
    //   setModal('')
    // }else{
    //   setErrors("Your email or password are not correct. PLease try again!")
    // }

    if (!data.email) {
      setErrors("Empty email!");
      return;
    }

    if (!data.password) {
      setErrors("Empty password!");
      return;
    }

    axios({
      method: "post",
      url: "http://localhost:5000/api/users/login",
      data: {
        "email": data.email,
        "password": data.password,
       }
    }).then(response => {

      if(response.data.errors){
        if(response.data.errors.email){
          setErrors(response.data.errors.email);
          return
        }
        if(response.data.errors.password){
          setErrors(response.data.errors.password);
          return
        }
      }

      const user = response.data;

      localStorage.setItem('user', JSON.stringify(user))
      setUser(user)
      
      setModal('')     
    })
  }

  return (
    <div className='login'>
        <h1>Looping Cinemas</h1>
        <h4 className='mt-5'>Login</h4>
        <span className={`error ${errors ? 'active' : ''} `}>{errors}</span>
        <span className={`success ${responseMessage ? 'active' : ''} `}>{responseMessage}</span>
        <input type="text" placeholder='Email address' name='email' onChange={handleChange}/>
        <input type="password" placeholder='Password' name='password' onChange={handleChange}/>
        <button className='login' onClick={handleLogin}>LOG IN</button>
        <p>Having trouble logging in?<br /><button>Reset Password</button> or <button onClick={() => setModal('register')}>Join Now</button></p>
    </div>
  )
}

export default Login