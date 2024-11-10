import React from 'react'
import {Link} from 'react-router-dom'
import './style.css';

export default function Btn() {
  return (
    <div style={{
        position:'absolute',
        bottom: '50px',
        width: '100%'
    }}>
        <Link to='/add-Room' ><button className='plus-button' >+</button></Link>
    </div>
  )
}
