import React, { useContext, useState } from 'react'
import AllData from '../contextApi'
import './style.css';


export default function AddElement({setAddFlag}) {
    let { rooms, currentIndex} = useContext(AllData)
    const [element,Selement]=useState('')
    const addToRoom=()=>{
        rooms[currentIndex].addElement(element)
        setAddFlag(false)
    }
    return (
        <div> 
            <select onChange={e=>{Selement(e.target.value)}} className="select-element" >
                <option value="">-choose element-</option>
                <option value="AirConditioning">AirConditioning</option>
                <option value="boiler">boiler</option>
                <option value="stereo">stereo</option>
                <option value="lamp">lamp</option>
            </select><br /><br />
            <button className='finel-add' onClick={addToRoom}>add</button>
        </div>
    )
}
