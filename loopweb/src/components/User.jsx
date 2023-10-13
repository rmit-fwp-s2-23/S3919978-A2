import React from 'react'
import { FaUser } from 'react-icons/fa'
import { Link, useNavigate} from 'react-router-dom'

function User({user, setUser}) {
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem('user');
        setUser({})
        navigate('/');
    }


  return (
    <button className='login user' type='button'>
        <div className="d-flex align-items-center justify-content-end justify-content-xl-around">
            <FaUser />
            <span className='d-none d-xl-block username'>{user.first_name}</span>
        </div>

        <div className='user-menu'>
            <ul>
                <li>
                    <span>
                        <Link to="/profile">Profile</Link>
                    </span>
                </li>
                <li>
                    <span>
                        <Link to="/profile/tickets">Tickets</Link>
                    </span>
                </li>
                <li>
                    <span onClick={handleLogOut}>Log out</span>
                </li>
            </ul>
        </div>
    </button>
  )
}

export default User