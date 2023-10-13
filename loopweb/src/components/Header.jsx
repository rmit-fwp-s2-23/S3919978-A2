import React from 'react'
import { FaUser } from 'react-icons/fa'
import SearchBox from './SearchBox'
import User from './User'

function Header({setNavActive, setModal, user, setUser}) {

  return (
    <header>
        <div className="row">
          <div className="col d-xl-none d-flex">
            <div className="burger d-inline-flex flex-column justify-content-center" onClick={() => setNavActive('active')}>
              <span className='burger-bar'></span>
              <span className='burger-bar'></span>
              <span className='burger-bar'></span>
            </div>
          </div>
          <div className="col d-xl-none d-flex justify-content-center ">
            <div className="logo">
                  <a href="/">Loop Cinemas</a>
              </div>
          </div>

          <div className="col col-lg-10 col-xxl-11 d-none d-xl-block">
            <SearchBox/>
          </div>
          
          <div className="col">
            {
              user && Object.keys(user).length !== 0
              
              ? 
                <User user={user} setUser={setUser}/>
              :
              <button className='login' type='button' onClick={() => setModal("login")}>
                <div className="d-flex align-items-center justify-content-end justify-content-xl-around">
                  <FaUser />
                  <span className='d-none d-xl-block'>Log In</span>
                </div>
              </button>
            }
            
          </div>
        </div> 
    </header>
  )
}

export default Header