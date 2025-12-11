import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Room.css'

export const Home = ({rooms}) => {
    const navigate = useNavigate();
    function addRoomPage () {
        navigate('/AddRoom');
    }

    function goToRoomPage (name, index) {
         navigate(`/Room/${name}`, { state: { index } });
    }
  return (
    <div>
        <h1>Smart House</h1>
        {/* show existing rooms */}
        <div className='flex'>
        {rooms.length > 0 && 
        rooms.map((element, index) => (
            <div className='room' key={index} style={{ backgroundColor: element.color }}
            onClick={() => goToRoomPage(element.name, index)}
>
                       
                <p>{element.name}</p>
                 </div>
        ))}
        </div>
        <br />
        <button onClick={addRoomPage}>+</button>
    </div>
  )
}
