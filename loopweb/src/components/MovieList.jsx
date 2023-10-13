import React from 'react'
import Movie from './Movie'

function MovieList({movies}) {
  return (
    <div className="movie-list">
      <ul>
        {
           movies.map(movie =>(
            <Movie movie={movie} key={movie.friendly_url}/>
           ))
        }
      </ul>
    </div>
  )
}

export default MovieList