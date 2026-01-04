import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import MUICard from './components/MUICard'
import View from './pages/View'
import Form from './components/Form'
import Add from './pages/Add'
import Edit from './pages/Edit'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <a href="/Add">Add</a>
    <br />
    <a href="/View">View</a>
    <ToastContainer />
        <BrowserRouter>
        <Routes>
          <Route path="/Form" element={<Form/>}/>
          <Route path="/Add" element={<Add/>}/>
          <Route path="/View" element={<View/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
        </Routes>
        </BrowserRouter>

    </>
  
  )
}

export default App
