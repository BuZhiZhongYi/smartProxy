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

export default function BaseRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/listlist' element={<Listlist />}></Route>
          <Route path='/listtable' element={<Listtable />}></Route>
          <Route path='/edit/*' element={<Edit />}></Route>
          {/* <Route path='/edit/:id' element={<Edit />}></Route> */}
          {/* <Route path='/means' element={<Means />}></Route> */}
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
