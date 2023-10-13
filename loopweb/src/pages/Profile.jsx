import axios from 'axios'
import React, { useState } from 'react'

function Profile({setUser}) {
    const user = JSON.parse(localStorage.getItem('user')) // Get user from local storage

    const [errors, setErrors] = useState("")
    const [success, setSuccess] = useState("")
    const [data, setData] = useState({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email
    })

    const handleChange = (e) =>{
        const { name, value } = e.target;

        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = () =>{
        // if(data.firstname && data.lastname && data.email){
        //     const allUsers = JSON.parse(localStorage.getItem('users'));
        //     const updatedUsers = allUsers.map(userItem => {
        //         if (userItem.email === loggedInUser.email) {
        //             return {
        //                 ...data,
        //                 password: userItem.password, 
        //                 joinedDate: userItem.joinedDate
        //             }
        //         } else {
        //             return userItem;
        //         }
        //     });

        //     localStorage.setItem('users', JSON.stringify(updatedUsers));
        //     localStorage.setItem('user', JSON.stringify(data))
        //     setUser(data)
        //     setSuccess("Update successfully!")
        // }else{
        //     setErrors("You cannot leave empty fields. PLease try again!")
        // }

        axios({
            method: "post",
            url: "http://localhost:5000/api/users/update",
            data: {
                "firstname": data.first_name,
                "lastname": data.last_name,
                "email": user.email,
            }
        }).then((response) => {
            if(response.data.errors){
                if(response.data.errors.firstname){
                  setErrors(response.data.errors.firstname);
                  return
                }
                if(response.data.errors.lastname){
                  setErrors(response.data.errors.lastname);
                  return
                }
            }
            const user = response.data;
            setUser(user)
            localStorage.setItem('user', JSON.stringify(user))
            setSuccess("Updated successfully!")
        })  
    }

  return (
    <div className='profile'>
        <h1>My Profile</h1>
        
        <div className="row mt-4">
            <div className="col-12 col-xl-5">
                <span className={`error ${errors ? 'active' : ''} `}>{errors}</span>
                <span className={`success ${success ? 'active' : ''} `}>{success}</span>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <input type="text" placeholder='First name' name='first_name' value={data.first_name} onChange={handleChange}/>
                    </div>
                    <div className="col-12 col-md-6">
                        <input type="text" placeholder='Last name' name='last_name' value={data.last_name} onChange={handleChange}/>
                    </div>
                    <div className="col-12">
                        <input type="text" placeholder='Email address' name='email' value={data.email} onChange={handleChange}/>
                    </div>
                    <div className="col-12">
                        <span className='joined-date'>Joined: {user.createdAt.slice(0, 10)}</span>
                    </div>

                    <div className="col-12">
                        <button className='save' onClick={handleSubmit}>Save My Details</button>
                    </div>
                </div>

            </div>
            <div className="col-12 col-xl-7">

            </div>
        </div>
    </div>
  )
}

export default Profile