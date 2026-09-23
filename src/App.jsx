import React from 'react'
import Login from './Login'
import { Route,Routes } from 'react-router-dom'
import DashBoard from './DashBoard'
import Signup from './SignUp'



const App = () => {
  return (
    <div>

      
     <Routes>
<Route path='/' element={<Login/>}/>
<Route path='/dashboard' element={<DashBoard/>}/>
  <Route path="/signup" element={<Signup />} />

     </Routes>
    </div>
  )
}

export default App
