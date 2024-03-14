import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/login/Login'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Help from './components/help/Help'
import Ragister from './components/ragister/Ragister'
function App() {
  

  return (
<>

<BrowserRouter>
<Navbar />
<Routes>
  <Route path='/' element={<Home />}></Route>
  <Route path='/login' element={<Login />}></Route>
  <Route path='/help' element={<Help />}></Route>
  <Route path='/ragister' element={<Ragister />}></Route>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
