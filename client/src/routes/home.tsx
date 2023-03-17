import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { ImagePixelated, ElementPixelated } from "react-pixelate"
import { Link } from 'react-router-dom';
import src from './person.png';
export default function Home() {
    return (
        <div className="home" >
            <div className='pic'>
                <ImagePixelated src={src} width={200} height={300} pixelSize={10} fillTransparencyColor={'white'} />
            </div>
            <div className='greet'>
                <h1>Guess What?!</h1>
                <p>Welcome to Guess What, a simple game in where you need to guess what the pixelated picture is. Press the button to begin the game.</p>
                <button><Link to="/GuessWhat/start?" id='buttonlink'>Start A Game</Link></button>
            </div>
        </div>

    )
}