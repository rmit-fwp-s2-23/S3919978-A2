import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import Cinemas from './Cinemas'
import Reservation from './Reservation';

function ModalPanel({modal, setModal, selectedCinemas, setSelectedCinemas, setUser, ticket}) {

  const [responseMessage, setResponseMessage] = useState(''); // set successful message when user register an account
  return (
    <div className={`custom-modal ${modal ? 'active' : ''}`}>
        <div className='modal-background' onClick={() => setModal('')}></div>
        <div className={`modal-panel ${modal ? 'active' : ''} d-flex align-items-end flex-column`}>
            <div className="cross d-inline-block" onClick={() => setModal('')}>
              <span className='cross-bar cross-bar-left'></span>
              <span className='cross-bar cross-bar-right'></span>
            </div>

          {modal === 'login' &&
            <Login setModal={setModal} setUser={setUser} responseMessage={responseMessage}/>
          }
          
          {modal === 'register' &&
            <Register  setModal={setModal} setResponseMessage={setResponseMessage}/>
          }

          {modal === 'cinemas' &&
            <Cinemas selectedCinemas={selectedCinemas} setSelectedCinemas={setSelectedCinemas}/>
          }

          {modal === 'reservation' &&
            <Reservation ticket={ticket} setModal={setModal}/>
          }
            
        </div>
    </div>
  )
}

export default ModalPanel