/*
        App> Home Purchase Program Tool Help
        Login
        Register
*/

import App from "../App"
import Home from "../pages/Home"
import Purchase from "../pages/Purchase"
import Program from "../pages/Program"
import Tool from "../pages/Tool"
import Help from "../pages/Help"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Stastic from "../pages/Stastic"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

const BaseRouter = () => (
    <Router>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/' element={<Home />}></Route>
                <Route path='/purchase/dynamic' element={<Purchase />}></Route>
                <Route path='/purchase/stastic' element={<Stastic/>}></Route>
                <Route path='/program/dynamic' element={<Program />}></Route>
                <Route path='/tool' element={<Tool />}></Route>
                <Route path='/help' element={<Help />}></Route>
            </Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
        </Routes>
    </Router>
)

export default BaseRouter