import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

function SearchBox() {
    const [query, setQuery] = useState("")
    const [resultActive, setresultActive] = useState("")

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    useEffect(() => {
        if(query !== ""){
            setresultActive('active')
        }else{
            setresultActive('')
        }
    }, [query])

    return (
        <div className='search-group'>
            <div className="input-group">
                <span className="input-group-text"><FaSearch/></span>
                <input type="text" className="form-control search-box" placeholder='Search movies and more...' value={query} onChange={handleChange}/>
                <span className="input-group-text"><button className='clear-search' onClick={() => setQuery('')}>Clear</button></span>
            </div>

            <div className={`search-result ${resultActive}`}>
                <ul>
                    <li>
                        <a href="/">
                            <img src="https://hoyts-website.imgix.net/mx/posters/au/a-haunting-in-venice-1983933d.jpg?w=240&h=355&fit=crop&auto=compress,format" alt="film" />
                        </a>
                        <div className='result-details'>
                            <a href="/" className='search-title'>A Haunting in Venice</a>
                            <span className='search-description'>In post-World War II Venice, Poirot, now retired and living in his own exile, reluctantly attends a seance, when one of the guests is murdered.</span>
                        </div>
                    </li>
                    <li>
                        <a href="/">
                            <img src="https://hoyts-website.imgix.net/mx/posters/au/asteroid-city-8e02ffe2.jpg?w=240&h=355&fit=crop&auto=compress,format" alt="film" />
                        </a>
                        <div className='result-details'>
                            <a href="/" className='search-title'>Asteroid City</a>
                            <span className='search-description'>The itinerary of a Junior Stargazer/Space Cadet convention is spectacularly disrupted by world-changing events.</span>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
        
    )
}

export default SearchBox