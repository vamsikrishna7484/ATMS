import React,{useState} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { checkLogIn } from '../Redux/user/UserActions';
function LogIn({setLoggedIn}) {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const dispatch=useDispatch();
  const submitForm=(e)=>{
    e.preventDefault();

    axios.get('https://localhost:44373/Home/LogIn')
    .then((response) => response.data)
    .then((data) => {
       console.log("response is");
       console.log(data);
      // Handle the data received from the JSON file
      if(data.userName==email && data.password==password){
            setLoggedIn(true);
            dispatch(checkLogIn(true))
      }
      else{
            setLoggedIn(false);
            dispatch(checkLogIn(false))
      }
    })
    .catch((error) => {
      // Handle any errors
      setLoggedIn(false);
      console.log('Error:', error);
    })
    //alert(password);

    setEmail('');
    setPassword('');
  }
  return (
    <div className="col-md-4 m-auto p-5">
        <form>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email"/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
        </div>
        <button type="submit" onClick={(e)=>submitForm(e)} className="btn btn-primary mt-2">Submit</button>
        </form>
        
    </div>
  )
}

export default LogIn