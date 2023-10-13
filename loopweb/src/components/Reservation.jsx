import axios from 'axios';
import React, { useState } from 'react'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

function Reservation({ticket, setModal}) {
    const [amount, setAmount] = useState(1);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handlePlus = (e) => {
        if(amount < 10){
            setAmount( current => current + 1)
        }
    }

    const handleMinus = () => {
        if(amount > 1){
            setAmount( current => current - 1)
        }
    }

    const handleSubmit = () => {

        axios({
            method: "post",
            url: "http://localhost:5000/api/tickets/create",
            data: {
                amount: amount,
                userEmail: JSON.parse(localStorage.getItem("user")).email,
                scheduleId: ticket.scheduleId
            }
        }).then((response) => {
            if(response.data.error){
                setError(response.data.error)
                return
            }
            navigate('/profile/tickets')
            setModal("")
        })
        
    }

  return (
    <div className='reservation'>
        <h4 className='mt-5'>Tickets Reservation</h4>
        <div className='text-start'>
            <div className="d-flex">
                <div className='reservation-poster'>
                    <img src={ticket.movie.poster} alt={ticket.movie.title} />
                </div>
                <div className='reservation-movie d-flex flex-column'>
                    <h4 className='mb-1'>{ticket.movie.title}</h4>
                    <div><span className="duration">Duration: { ticket.movie.length }</span></div>
                </div>
            </div>
            <div className='mt-4'>
                <h5>{ ticket.cinema }</h5>
                <h6>{ ticket.date }</h6>
            </div>
            <div className='session mt-3' style={{marginRight: 0}}>
                <span className='session-time'>{ticket.time}</span>
                <span className='session-type'>Standard</span>
            </div>

            <div className='ticket d-flex mt-3'>
                <span>Tickets</span>
                <div className='ticket-input-group d-flex'>
                    <FaMinusCircle onClick={() => handleMinus()}/>
                    <input type="text" readOnly value={amount}/>
                    <FaPlusCircle onClick={() => handlePlus()}/>
                </div>
            </div>

            <span className={`error ${error ? 'active mt-3 mb-0' : ''} `}>{error}</span>
            <button class="reserve-button" onClick={() => handleSubmit()}>Reserve Tickets</button>
        </div>
    </div>
  )
}

export default Reservation