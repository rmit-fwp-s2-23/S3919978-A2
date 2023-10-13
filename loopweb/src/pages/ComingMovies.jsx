import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import MovieList from '../components/MovieList'
import { moviesData } from '../data/moviesData'
import axios from 'axios';


function ComingMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    
    axios({
      method: 'post',
      url: 'http://localhost:5000/api/movies/',
      data: {
        "released": false,
      }
    })
    .then(function (response) {
      setMovies(response.data)
    });

  }, [])

  return (
    <div className='movies'>
        <ul className='movie-tabs d-flex'>
          <li>
            <NavLink to='/movies' end>Now Showing</NavLink>
          </li>
          <li>
            <NavLink to='/movies/coming-soon'>Coming Soon</NavLink>
          </li>
        </ul>
        
        <MovieList movies={movies} />
      
    </div>
  )
}

export default ComingMovies