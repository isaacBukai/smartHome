import React from 'react'
import {useNavigate} from 'react-router-dom';
import './style.css';

export default function Title() {
  const nav= useNavigate()
  return (
    <div className='titleDiv'>
        <h1 className='title' onClick={()=>{nav('/')}}>Smart Home</h1>
    </div>
  )
}
