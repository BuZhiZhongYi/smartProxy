import { Route, Routes, BrowserRouter } from 'react-router-dom'
/*
  App -> list means edit
  Login
  Register

*/
import Edit from '../pages/Edit'
import Listlist from '../pages/Listlist'
import Listtable from '../pages/Listtable'
import Login from '../pages/Login'
// import Means from '../pages/Means'
import Register from '../pages/Register'
import App from '../App'
import React from 'react'
import App2 from '../App2'


import Home from "../pages/Home"
import Purchase from "../pages/Purchase"
import Program from "../pages/Program"
import Tool from "../pages/Tool"
import Help from "../pages/Help"
import Stastic from "../pages/Stastic"



export default function BaseRouter() {
  return (
    <BrowserRouter>
      <Routes>
        

      <Route path='/' element={<App2 />}>
                <Route path='/' element={<Home />}></Route>
                <Route path='/purchase/dynamic' element={<Purchase />}></Route>
                <Route path='/purchase/stastic' element={<Stastic/>}></Route>
                <Route path='/program/dynamic' element={<Program />}></Route>
                <Route path='/tool' element={<Tool />}></Route>
                <Route path='/help' element={<Help />}></Route>
        </Route>

        <Route path='/' element={<App />}>
          <Route path='/listlist' element={<Listlist />}></Route>
          <Route path='/listtable' element={<Listtable />}></Route>
          <Route path='/edit/*' element={<Edit />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>


      
      
      </Routes>
    </BrowserRouter>
  )
}
