import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Tickets() {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    axios({
      method: "post",
      url: "http://localhost:5000/api/tickets/",
      data: {
        userEmail: JSON.parse(localStorage.getItem("user")).email,
      }
    }).then((response) => {
      setTickets(response.data)
    })
  }, [])

  return (
    <div className="my-tickets">
      <h1 className='mb-4'>My Tickets</h1>
      <ul className='d-flex'>
        {
          tickets.map((ticket) => (
            <li>
              <div className='a-ticket'>
                <div className='a-ticket-title'><h5>{ticket.schedule.movie.title}</h5></div>
                <div className='a-ticket-body'>
                  <ul>
                    <li>Cinema: {ticket.schedule.cinema.name}</li>
                    <li>Date: {ticket.schedule.date}</li>
                    <li>Session: {ticket.schedule.time}</li>
                    <li>Tickets: {ticket.amount}</li>
                  </ul>
                </div>
              </div>
            </li>
          ))
        }
        
      </ul>
    </div>
  )
}

export default Tickets