import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { DataProvider } from './contextApi';
import Title from './components/Title';
import Btn from './components/Btn';
import AddRoom from './components/AddRoom';
import Rooms from './components/Rooms';
import SmartRoom from './components/SmartRoom';


function App() {
  const [currentPath, setCurrentPath] = useState('')

  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <Title />
          <Routes>
            <Route path='/' element={<> <Rooms setCurrentPath={setCurrentPath} />  <Btn /></>} />
            <Route path='/add-Room' element={<AddRoom />} />
            <Route path={currentPath} element={<SmartRoom currentPath={currentPath} />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
