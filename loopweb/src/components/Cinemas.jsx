import React, { useEffect, useState } from 'react'
// import { cinemasData } from '../data/cinemasData'
import axios from 'axios';

function Cinemas({selectedCinemas, setSelectedCinemas}) {
//   const cinemas = cinemasData

    const [cinemas, setCinemas] = useState([])

    useEffect(() => {

        axios({
            method: 'get',
            url: 'http://localhost:5000/api/cinemas/',
          })
          .then(function (response) {
            setCinemas(response.data)
          });

    }, [])

    const handleOnChange = (e) => {
        const checkedCinema = cinemas.find((cinema) => String(cinema.id) === e.target.name);
      
        setSelectedCinemas((prevCinemas) => {
          // Check if the checked cinema is in the state
          if (prevCinemas.some((cinema) => cinema.id === checkedCinema.id)) {
            return prevCinemas.filter((cinema) => cinema.id !== checkedCinema.id); // If it's in, remove it from the state
          } else {
            return [...prevCinemas, checkedCinema]; // If it's not, add it to the state
          }
        });
      };
      

  return (
    <div className='cinemas'>
        <h4>Select cinemas</h4>
        <ul className="states">
            <li><button className='active'>VIC</button></li>
            <li><button>NSW</button></li>
            <li><button>QLD</button></li>
            <li><button>SA</button></li>
        </ul>

        <ul className='cinema-list mt-4 d-flex justify-content-between flex-wrap'>
            {
                cinemas.map((cinema) => (
                    <li key={cinema.id} className='mt-2'>
                        <div className='checkbox-group'>
                            <input 
                                type="checkbox" 
                                name={cinema.id} 
                                id={cinema.id} 
                                onChange={handleOnChange} 
                                checked={selectedCinemas.some(selectedCinema => selectedCinema.id === cinema.id)} // set checked if the cinema is chosen
                            />
                            <label htmlFor={cinema.id}>{cinema.name}</label>
                        </div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Cinemas