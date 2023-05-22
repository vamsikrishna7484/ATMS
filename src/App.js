// import LogIn from './components/LogIn';
// import NavBar from './components/NavBar';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState,useEffect } from 'react';
import {Provider,useSelector} from 'react-redux'
import store from './Redux/user/store';
import React from 'react'
import { LogInPage,SignUp } from './components';
import { Login } from '@mui/icons-material';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LogInPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App






















// function App() {
//  // const[isGuest,setGuest]=useState(true);
//   const[isAdmin,setAdmin]=useState(false);
//   const[isLoggedIn,setLoggedIn]=useState(false);
//   const isLoggedInn=useSelector(state=>state.IsLoggedIn)
//   const handleLogger=(e)=>{
//       if(e.target.value==='Admin'){
//         setAdmin(true);setLoggedIn(false);
//       }
//       else if(e.target.value==='Guest'){
//         setAdmin(false);setLoggedIn(false);
//       }
//   }
//   useEffect(()=>{
//     console.log(isLoggedIn)
//   },[isLoggedIn])
//   return (

//         <div className="App">
//         <NavBar setLogger={handleLogger} isAdmin={isAdmin} isLoggedIn={isLoggedIn}/>
//           {isLoggedInn?'':<LogIn setLoggedIn={setLoggedIn}/>}
//       </div>

    
//   );
// }



