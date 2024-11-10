import { createContext, useState } from "react";
const AllData = createContext();

let room
export const DataProvider = ({ children }) => {
    const [rooms, setRoom] = useState([])
    const[currentIndex,setCurrentIndex]=useState('')

    const newRoom = (type, name, color) => {
        room=new Room(type,name,color);
        setRoom([...rooms,room])
       
    }
    return (
        <AllData.Provider value={{ Room, Element, rooms, setRoom, newRoom,currentIndex,setCurrentIndex }}>
            {children}
        </AllData.Provider>
    )
}
export default AllData;

class Room {
    constructor(type, name, color) {
        this.type = type;
        this.name = name;
        this.color = color;
        this.path = `/room-${name}`
    }
    stereo = false
    elements = []
    addElement(element) {
        if(this.elements.length>4){
            alert('error you cant put in one room more then 5 elements')
            return
        }
        if (element == 'stereo') {
            if(this.stereo == true){
                alert('you can have just one stereo in one room')
                return
            }
           else{
             this.stereo = true 
           }
        }
        if(element=='boiler'&&this.type!="bathroom"){
            alert('sorry you the boiler is just for the bathroom')
            return
        }
        element = new Element(element)
        this.elements=[...this.elements,element]
    }

}
class Element {
    constructor(type) {
        this.type = type
    }
    power = false;
    color = 'red';
    turn() {
        if (!this.power) {
            this.power = true;
            this.color = 'green';
        }
        else {
            this.power = false;
            this.color = 'red';
        }
    }
}