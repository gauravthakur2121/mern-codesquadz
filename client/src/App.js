import React from 'react'
import { BrowserRouter , Routes , Route }  from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import Mylandingpage from './dashboard/mylandingpage'
import Myhomepage from './shares/Myhomepage'
import './css/style.css'
const App = () => {
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/dashboard' element={<Mylandingpage/>}>
      <Route path='' element={<Myhomepage/>} />
      
      </Route>

    </Routes>
    
    </BrowserRouter>
  
    </>
  )
}

export default App
