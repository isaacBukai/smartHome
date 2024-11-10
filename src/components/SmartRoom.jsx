import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AllData from '../contextApi';
import AddElement from './AddElement';
import Element from './Element';
import './style.css';

export default function SmartRoom({ value }) {
  let { rooms, currentIndex } = useContext(AllData);
  const [addFlag, setAddFlag] = useState(false)
  const addElement = () => {
    if (addFlag)
      return <AddElement setAddFlag={setAddFlag} />
  }

  return (
    <div>
      <div>
        <div className='div-data'>
          <h2 className='data-room'>room name: {rooms[currentIndex].name}</h2>
          <h2 className='data-room'>room type: {rooms[currentIndex].type}</h2>
        </div>
        <button className='add-element' onClick={() => { setAddFlag(!addFlag) }}>add element</button><br />
        {addElement()}
      </div>
      <div>
        {rooms[currentIndex].elements.map((val, i) => {
          return <Element type={val.type} color={val.color} index={i} value={val} />
        })}
      </div>
    </div>
  )
} 