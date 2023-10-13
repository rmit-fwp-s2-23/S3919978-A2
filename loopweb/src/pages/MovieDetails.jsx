import React, { useEffect, useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import DatesAndTimes from '../components/DatesAndTimes';
import axios from 'axios';
import Reviews from '../components/Reviews';

function MovieDetails({setModal, selectedCinemas, setTicket}) {
  const {movieTitle} = useParams();
  const [movie, setMovie] = useState({})

  // find movie by title
  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:5000/api/movies/' + movieTitle,
    }).then(function (response) {
      setMovie(response.data)
    });
  }, [movieTitle])


  return (
    <div className='movie'>
      <div className='d-flex'>
        <div className='poster'>
          <img src={movie.poster} alt="a" />
        </div>
        <div className='details d-flex flex-column '>
          <h1 className='title'>{movie.title}</h1>
          <div>
            <span className="duration">{movie.length}</span>
            <span className="pine">|</span>
            <span className="release-date">{movie.release_date}</span>
          </div>
        </div>
      </div>

      <div>
        <p className='description'>{movie.description}</p>
      </div>

      <div className='sessions'>
        <h2 className='sessions-heading'>Times & Tickets</h2>
        <button className='add-cinemas' onClick={() => setModal('cinemas')}>
          
          {/* List selected cinema names, print add cinemas if empty */}
          {selectedCinemas.length === 0 ? 
          
          "Add cinemas " 
          :
          selectedCinemas.map((cinema) => cinema.name).join(', ')
          }
          <FaPlusCircle/>
        </button>


        {/* Only show times when there is a selected cinema */}
        {selectedCinemas.length !== 0 && <DatesAndTimes selectedMovie={movie} selectedCinemas={selectedCinemas} setModal={setModal} setTicket={setTicket}/>} 
        
      </div>

      <Reviews movie={movie} setModal={setModal}/>

    </div>
  )
}

export default MovieDetails
