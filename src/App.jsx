import React from 'react'
import Login from './Login'
import { Route,Routes } from 'react-router-dom'
import Dashboard from "./Dashboard";
import Signup from './SignUp'



const App = () => {
  return (
    <div>

      
     <Routes>
<Route path='/' element={<Login/>}/>
<Route path='/dashboard' element={<Dashboard/>}/>
  <Route path="/signup" element={<Signup />} />

     </Routes>
    </div>
  )
}

export default App
