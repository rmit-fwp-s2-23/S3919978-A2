import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Movies from './pages/Movies';
import { useState } from 'react';
import ModalPanel from './components/ModalPanel';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import ComingMovies from './pages/ComingMovies';
import MovieDetails from './pages/MovieDetails';
import Profile from './pages/Profile';
import Tickets from './pages/Tickets';
// import { usersData } from './data/usersData';

function App() {
  const [navActive, setNavActive] = useState(""); // State to toggle nav bar in mobile
  const [modal, setModal] = useState("");
  const [selectedCinemas, setSelectedCinemas] = useState([])
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const [ticket, setTicket] = useState({});

  // init users
  // localStorage.removeItem('users')
  // if(!localStorage.getItem('users')){
  //   localStorage.setItem('users', JSON.stringify(usersData));
  // }
  
  
  return (
    <Router>
        <div className="App">
        <span className='gradient'></span>
        

        <div className='d-flex'>
          <Nav navActive={navActive} setNavActive={setNavActive}/>
          <ModalPanel modal={modal} setModal={setModal} selectedCinemas={selectedCinemas} setSelectedCinemas={setSelectedCinemas} setUser={setUser} ticket={ticket}/>
          
          <main>
            <Header setNavActive={setNavActive} setModal={setModal} user={user} setUser={setUser}/>

            <Routes>
              <Route path='/' element={<Navigate to="movies" />}></Route>
              <Route path='movies' element={<Movies />}></Route>
              <Route path='movies/coming-soon' element={<ComingMovies />}></Route>
              <Route path='movies/:movieTitle' element={<MovieDetails setModal={setModal} selectedCinemas={selectedCinemas} setTicket={setTicket} />}></Route>
              <Route path='profile' element={ <Profile user={user} setUser={setUser}/> } />
              <Route path='profile/tickets' element={ <Tickets/> } />
            </Routes>
          </main>

        </div>

        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
