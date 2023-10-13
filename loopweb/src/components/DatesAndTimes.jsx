import React, { useEffect, useState } from 'react'
// import { movieScheduleData } from '../data/movieScheduleData'
import axios from 'axios';

function DatesAndTimes({selectedMovie, selectedCinemas, setModal, setTicket}) {
    const [dates, setDates] = useState([]);
    const [times, setTimes] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");

    useEffect(() => {
        if(Object.keys(selectedMovie).length !== 0){
            axios({
                method: 'post',
                url: 'http://localhost:5000/api/schedules/dates',
                data: {
                    movieId: selectedMovie.id,
                }
              }).then(function (response) {
                setDates(response.data)
              });
        }
        
    }, [selectedCinemas, selectedMovie])

    const handleDateClick = (date) => {
        setSelectedDate(date)
        axios({
            method: 'post',
            url: 'http://localhost:5000/api/schedules/times',
            data: {
                movieId: selectedMovie.id,
                cinemaId: 1,
                date: date
            }
        }).then(function (response) {
            setTimes(response.data)
        });
    }

    const handleTimeClick = (scheduleId, time, date, cinema) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if(!user){
            setModal('login')
            return
        }

        const ticket = {
            movie: selectedMovie,
            time: time,
            date: date,
            cinema: cinema,
            scheduleId: scheduleId
        };
        setTicket(ticket)
        setModal('reservation')
    }

    return(
        <div>
            <ul className="dates mt-3">
                {
                dates.map((date) => (
                        <li key={date.date}>
                            <button className={ selectedDate === date.date ? 'active' : ''} onClick={() => handleDateClick(date.date)}>{date.date}</button>                            
                        </li>
                    ))
                }
            </ul>

            <div className='mt-5 mb-5'>
                {
                    selectedDate && // show schedules when a day selected
                    selectedCinemas.map(cinema => {
                        return (
                            <div key={cinema.id}>
                                <h5>{cinema.name}</h5>
                                <ul className="times mt-3">
                                    {
                                        times.map((time) => {
                                            if(time.cinemaId === cinema.id){
                                                return (
                                                    <li key={time.id}>
                                                        <div className='session' onClick={() => handleTimeClick(time.id, time.time, time.date, cinema.name)}>
                                                            <span className='session-time'>{time.time}</span>
                                                            <span className='session-type'>Standard</span>
                                                            {time.slot !== 0 ?
                                                            <span className='session-slot'>{time.slot} <br /> slots</span>
                                                            :
                                                            <span className='session-slot sold-out'>Sold Out!</span>
                                                            }
                                                        </div>
                                                    </li>
                                                )
                                            }
                                            return null
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })

                }
            </div>
        </div>
    )
}

export default DatesAndTimes