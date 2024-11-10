import React, { useContext, useState } from 'react'
import AllData from '../contextApi';
import './style.css';

export default function Element(props) {
  let { rooms, currentIndex } = useContext(AllData)
  const[color,setColer]=useState(props.color)
  const onOff = () => {
    rooms[currentIndex].elements[props.index].turn()
    setColer(rooms[currentIndex].elements[props.index].color)
  }
  return (
    <div onClick={onOff}>
      <p style={{
        color: color,
        fontSize:'34px',
        fontWeight:'bold',
        margin: '13px',
        cursor:'pointer'
      }}>{props.type}</p>
    </div>
  )
}
