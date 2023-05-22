import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { checkAdmin, checkLogIn } from '../Redux/user/UserActions';
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from './Tabs'
function NavBar ({setLoggerr,isAdminn,isLoggedInn}) {
    const isLoggedIn=useSelector(state=>state.IsLoggedIn);
    const isAdmin=useSelector(state=>state.IsAdmin);
    useEffect(()=>{
        console.log(isLoggedIn);
        console.log(isAdmin);
    });
    const dispatch=useDispatch();
    const setLogger=(e)=>{
            if(e.target.value==='Admin'){
                dispatch(checkAdmin(true))
                dispatch(checkLogIn(false))
            }
            else if(e.target.value='Guest'){
                dispatch(checkAdmin(false))
                dispatch(checkLogIn(false))
            }
    }
  return (
    <>
    <div className='m-2'>
        <div className="container-fluid bg-black text-white">
        <div className="form-row d-flex">
            <div className="col-md-8 p-2">
                {isLoggedIn?<Tabs isAdmin={isAdmin}/>:''}
            </div>
            <div className='col-md-1 offset-3 p-2'>
            <select className="form-select  outline-none" onChange={(e)=>setLogger(e)}>
                <option value="Guest">Guest</option>
                <option value="Admin" >Admin</option>
            </select>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default NavBar;