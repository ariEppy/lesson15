import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DeviceClass } from './DeviceClass';

export const Room = ({ rooms, setRooms }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { index } = location.state || {};
  const room = rooms[index];
  const [bottom, setBottom] = useState(false);
  const [deviceType, setDeviceType] = useState("");
  


  const addDeviceToRoom = () => {
    if (!deviceType) 
      return;
    
    if (deviceType === "stereo") {
    const hasStereo = room.devices.some(d => d.name === "stereo");
    if (hasStereo) {
      alert("ERROR");
      return;
    }
  }

  if (deviceType === "hotWater" && room.type !== "bathroom") {
    alert("ERROR");
    return;
  }

  if (room.devices.length >= 5) {
    alert("ERROR");
    return;
  }

 
    const device = new DeviceClass(deviceType, false);
    const newRooms = [...rooms];
    newRooms[index] = {
      ...newRooms[index],
      devices: [...newRooms[index].devices, device],
    };
    setRooms(newRooms);

    setDeviceType("");
    setBottom(false);
  };

  function changeActivate(i) {
  const newRooms = [...rooms]; 
  const newDevices = [...newRooms[index].devices];

  newDevices[i] = {
    ...newDevices[i],
    active: !newDevices[i].active
  };

  newRooms[index] = {
    ...newRooms[index],
    devices: newDevices
  };

  setRooms(newRooms); 
}


  return (
    <div className='roomPage'>
      <h1>Smart House</h1>
      <div className='flex'>
      <div className='left'>
      <h2>Room Name: {room.name}</h2>
      <h2>Room Type: {room.type}</h2>
      </div>
      <div className='devices'>
        {room.devices.length > 0 && room.devices.map((device, i) => (
          
          <div className={device.active == true ? 'green' : 'red'} key={i} onClick={() => changeActivate(i)}>
            {device.name}
          </div>
        ))}
      </div>
      </div>
       <br />
       
      <button onClick={() => setBottom(true)}>
        Add Device
      </button>
        <br /><br />
      {bottom && (
        <div>
          <select
            value={deviceType}
            onChange={(e) => setDeviceType(e.target.value)}
          >
            <option value="" disabled>
              Choose a Device
            </option>
            <option value="ac">AC</option>
            <option value="hotWater">Hot Water</option>
            <option value="stereo">Stereo</option>
            <option value="light">Light</option>
          </select>
          <br /><br />
          <button onClick={addDeviceToRoom}>
            Add
          </button>
        </div>
      )}
     
    </div>
  );
};
