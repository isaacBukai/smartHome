import React, { useContext } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import AllData from '../contextApi';


export default function SmallRooms(props) {
  let {rooms,setCurrentIndex}= useContext(AllData)
  const nav= useNavigate()
  const hoverColor = props.color || 'black'; 
  const open=()=>{
    props.setCurrentPath(props.path)
    setCurrentIndex(props.index)
    nav(props.path)
  }

  return (
    <div onClick={open} className='bubble' style={{ '--hover-color': hoverColor }}>
      <h1>{props.name}</h1>
    </div>
  );
}

