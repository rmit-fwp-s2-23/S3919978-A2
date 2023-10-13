import React from 'react'
import { Link } from 'react-router-dom'

function Movie({movie}) {
  return (
    <li>
        <div className='d-flex'>
        <a className='movie-poster' href="/">
            <img src={ movie.poster } alt="abc" />
        </a>
        <div className='movie-details'>
            <h3 className='movie-title'>
                <Link to={`/movies/${movie.friendly_url}`}>{ movie.title }</Link>
            </h3>
            <div className='mb-2'>
            <span className="movie-duration">{ movie.length }</span>
            <span className="movie-pine">|</span>
            <span className="movie-release-date">{ movie.release_date }</span>
            </div>
            <p className='movie-description d-none d-md-block'>{ movie.description }</p>
        </div>
        </div>
    </li>
  )
}

export default Movie