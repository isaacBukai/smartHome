import React, { useState,useContext } from 'react';
import {Link} from 'react-router-dom';
import AllData from '../contextApi';
import './style.css';

export default function AddRoom() {
    let {newRoom}=useContext(AllData);
    let {rooms}=useContext(AllData);
    const [typeInput, setTypeInput] = useState('')
    const [nameInput, setNameInput] = useState('')
    const [colorInput, setColorInput] = useState('')
    const valid=()=>{
        if(!typeInput){
            alert('sorry you have to put type of room')
        }
        else if(nameInput.length>5){
            alert('sorry room name must be less them 5 characters')
        }
        else if(nameInput.length<1){
            alert('sorry room name must be adlist 1 characters')
        }
        else if(rooms.length>4)(
            alert('sorry you cant have more then 5 rooms..until you pay for the pro version')
        )
        else{
            newRoom(typeInput,nameInput,colorInput)
        }  

    }
    const length=()=>{
        if(nameInput.length>5){
            alert('sorry room name must be less them 5 characters')
            return
        }
    }
    return (
        <div>
            <br />
            <select onChange={(e) => setTypeInput(e.target.value)} className="selectRooom" id="selectRooom">
                <option>-choose type of room-</option>
                <option value="bedroom">bedroom</option>
                <option value="bathroom">bathroom</option>
                <option value="kitchen">kitchen</option>
            </select>
            <br />
            <h4 className='room-name'>Enter here the room name:</h4>
            <input className='input-name' onChange={(e) => setNameInput(e.target.value)} type="text" placeholder='up to 5 characters' />
            {length()}
            <br />
            <h4 className='room-color'>Enter room color <input className='color-input' onChange={(e) => setColorInput(e.target.value)} type="color"  /></h4>
            
            <br /><br />
            <Link to='/'><button className='add-button' onClick={valid} type="button">create</button></Link>
        </div>
    )
}
