import React from 'react'
import { FaFilm, FaRegClock, FaCamera, FaCalendarAlt, FaStar } from 'react-icons/fa';
import SearchBox from './SearchBox';
import { NavLink } from 'react-router-dom';

function Nav({navActive, setNavActive}) {
  return (
    <div>
        <nav className={`d-xl-block ${navActive}`}>
            <div className="logo d-none d-xl-block">
                <a href="/">Loop Cinemas</a>
            </div>

            <div className="cross d-xl-none d-inline-block" onClick={() => setNavActive('')}>
              <span className='cross-bar cross-bar-left'></span>
              <span className='cross-bar cross-bar-right'></span>
            </div>

            <div className='d-xl-none mt-4 mb-5'>
                <SearchBox/>
            </div>
            
            <ul className='primary-nav'>
                <li>
                    <NavLink to='/movies'>
                        <FaFilm />
                        <span>Movies</span>
                    </NavLink>
                </li>
                <li>
                    <a href="/">
                        <FaRegClock />
                        <span>Sesstion Time</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <FaCamera />
                        <span>Cinemas</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <FaCalendarAlt />
                        <span>Event & Festival</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <FaStar />
                        <span>Reward Points</span>
                    </a>
                </li>
            </ul>

            <ul className='secondary-nav'>
                <li>
                    <a href="/">
                        <span>Offers & Promotions</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span>Experiences</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span>Food & Drink</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span>Gift Shop</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span>Functions & Parties</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
    
  )
}

export default Nav