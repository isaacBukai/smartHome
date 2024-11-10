import React, { useContext } from 'react';
import AllData from '../contextApi';
import SmallRooms from './SmallRooms';
import './style.css';


export default function Rooms({setCurrentPath}) {
  let { rooms } = useContext(AllData);
  return (
    <div className='roomsDiv'>
      {rooms.map((val, i) => {
        return <SmallRooms setCurrentPath={setCurrentPath} type={val.type} name={val.name} color={val.color} path={val.path} index={i} />
      })}
    </div>
  )
}
