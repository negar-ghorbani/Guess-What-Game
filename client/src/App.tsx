import React, { useState } from 'react';
import './App.css';
import { ImagePixelated, ElementPixelated } from "react-pixelate"
import { Route, Routes, Link } from 'react-router-dom';
import Home from './routes/home'
import Start from './routes/start'
import Game from './routes/game'



const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/GuessWhat/home">Home Page</Link>
        </li>
        <li id='secondli'>
        </li>
        <li>
          <Link to="/GuessWhat/start?">Start a game</Link>
        </li>

      </ul>
    </nav>
  )
}

function App() {
  return (
    <div className='main'>
      <NavBar />
      <Routes>
        <Route path='/GuessWhat/home' element={<Home />}></Route>
        <Route path='/GuessWhat/start?' element={<Start />}></Route>
        <Route path='/GuessWhat/game?' element={<Game />}></Route>

      </Routes>
    </div>
  )
}


export default App;
