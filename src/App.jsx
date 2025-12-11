
import './App.css'
import { Home } from './components/Home'
import { AddRoom } from './components/AddRoom'
import { Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import { Room } from './components/Room'

function App() {
  const [rooms, setRooms] = useState([]);

  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home rooms = {rooms}/>}/>
        <Route path='/AddRoom' element = {<AddRoom setRooms = {setRooms}/>}/>
        <Route path='/Room/:name' element={<Room rooms={rooms} setRooms={setRooms}  />} />

      </Routes>
      
    </div>
  )
}

export default App
