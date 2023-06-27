import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';
import Fab from '@mui/material/Fab';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';


function LogInPage() {
    const navigate = useNavigate();
    const [isSignUp,setSignUp]=useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
  const handleSignIn=()=>{
    navigate('/Home');
  }
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
    const signUpPage=<Card sx={{ width:400,height:'90%',marginRight:10,backgroundColor:'#f0f0f0',padding:'20px 10px'}}>
                        <Fab size="small" color="secondary" aria-label="add">
                            <ArrowBackIosIcon onClick={()=>setSignUp(false)} sx={{fontSize:20}}/>
                            </Fab>
                        <CardContent>
                            
                            <Typography variant="h4" component="div">
                            <b>A</b>ttendance <b>M</b>anagement <b>S</b>ystem
                            </Typography>
                            <hr/>

                            <TextField sx={{width:'100%',color:'red',marginTop:0}} id="standard-basic" label="Email" variant="standard" />
                            
                            <TextField sx={{width:'100%'}} id="standard-basic" label="password" variant="standard" />
                            <TextField sx={{width:'100%'}} id="standard-basic" label="confirm password" variant="standard" />

                            <div style={{display:'flex',}}>
                            <Fab variant="extended" sx={{padding:3,marginTop:2,flex:1}} size='small' htmlFor="image">
                                <UploadFileIcon  htmlFor="image"  sx={{ marginBottom:0 }} />
                                <label htmlFor='image' style={{textDecoration:'none'}}>{selectedFile?'Uploaded Image':'Upload Image'}</label>
                            </Fab>
                            <input id='image' name="image" type="file" onChange={handleFileChange} />
                            {selectedFile && <p style={{marginTop:15,marginLeft:10,flex:2}}>Selected file: {selectedFile.name}</p>}
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button sx={{'&:hover': {
                    backgroundColor: 'darkred',}}} variant="contained" color='secondary' style={{width:'30%',float:'right'}}>Sign Up
                        </Button>
                        
                        </CardActions>
                        <Typography varient="h1" style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:10}}>or sign up with</Typography>
                        <div style={{marginTop:10,alignItems:'center',justifyContent:'center',display:'flex',gap:15}}>
                            <GoogleIcon sx={{transition: 'all 0.3s ease','&:hover':{backgroundColor:'darkgray',borderRadius:50,padding:1}}} fontSize='large' color='primary' style={{cursor:'pointer'}}/>
                            <FacebookIcon sx={{transition: 'all 0.3s ease','&:hover':{backgroundColor:'darkgray',borderRadius:50,padding:1}}} fontSize='large' color='primary' style={{cursor:'pointer'}}/>
                            <GitHubIcon sx={{transition: 'all 0.3s ease','&:hover':{backgroundColor:'darkgray',borderRadius:50,padding:1}}} fontSize='large' color='primary'  style={{cursor:'pointer'}}/>
                        </div>
                        </Card>

    const signInPage=<Card sx={{ width:400,height:'90%',marginRight:10,backgroundColor:'#f0f0f0',padding:'20px 10px'}}>
                    <CardContent>
                        
                        <Typography variant="h4" component="div">
                        <b>A</b>ttendance <b>M</b>anagement <b>S</b>ystem
                        </Typography>
                        <hr/>

                        <TextField sx={{width:'100%',color:'red',marginTop:5}} id="standard-basic" label="Username or Email" variant="standard" />
                        <TextField sx={{width:'100%'}} id="standard-basic" label="password" variant="standard" />
                        
                    </CardContent>
                    <CardActions>
                        <Button sx={{'&:hover': {
                    backgroundColor: 'darkblue',}}} variant="contained" style={{width:'30%'}} onClick={handleSignIn}>Sign In</Button>
                        <Button onClick={()=>setSignUp(true)} sx={{'&:hover': {
                    backgroundColor: 'darkred',}}} variant="contained" color='secondary' style={{width:'30%'}}>Sign Up
                    </Button>
                        <Button  size="small">Forgot Password?</Button>
                    </CardActions>
                    <Typography varient="h1" style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:20}}>or sign up with</Typography>
                    <div style={{marginTop:20,alignItems:'center',justifyContent:'center',display:'flex',gap:15}}>
                        <GoogleIcon sx={{transition: 'all 0.3s ease','&:hover':{backgroundColor:'darkgray',borderRadius:50,padding:1}}} fontSize='large' color='primary' style={{cursor:'pointer'}}/>
                        <FacebookIcon sx={{transition: 'all 0.3s ease','&:hover':{backgroundColor:'darkgray',borderRadius:50,padding:1}}} fontSize='large' color='primary' style={{cursor:'pointer'}}/>
                        <GitHubIcon sx={{transition: 'all 0.3s ease','&:hover':{backgroundColor:'darkgray',borderRadius:50,padding:1}}} fontSize='large' color='primary'  style={{cursor:'pointer'}}/>
                    </div>
                    </Card>
  return (
    <div className="container">
      {isSignUp?signUpPage:signInPage}
    </div>
  )
}

export default LogInPage