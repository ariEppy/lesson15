import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RoomClass } from './RoomClass'; 

export const AddRoom = ({ setRooms }) => { 
  const navigate = useNavigate();
  const [roomType, setRoomType] = useState("");
  const [roomName, setRoomName] = useState("");
  const [roomColor, setRoomColor] = useState("");

  function createRoom() {
    if (!roomType || roomName.trim().length === 0) {
      alert("ERROR");
      navigate('/');
      return;
    }

    const room = new RoomClass(roomType, roomName, roomColor);
    setRooms(prevRooms => [...prevRooms, room]);
    navigate('/');
  }

  return (
    <div className='add'>
      <h1>Smart House</h1>
      <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
        <option value="" disabled>Choose a Room</option>
        <option value="bedroom">Bedroom</option>
        <option value="bathroom">Bathroom</option>
        <option value="kitchen">Kitchen</option>
      </select>
      <br />
      <input type="text" placeholder='Room Name' maxLength={9} onChange={(e) => setRoomName(e.target.value)} />
      <br />
      <input type="text" placeholder='Room Color' onChange={(e) => setRoomColor(e.target.value)} />
      <br />
      <button onClick={createRoom} className='addRoomButton'>Create</button>
    </div>
  )
}
