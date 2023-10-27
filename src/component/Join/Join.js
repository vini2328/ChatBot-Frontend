import React, { useState } from 'react'
import "./Join.css"
import purple from "../images/purple.jpg"
import {Link} from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

let user;


const Join = () =>{
  const navigate = useNavigate();

  const [loginData,setLoginData]=useState({
    email:'',
    password:''
})

const redir=()=>{
  navigate('/sendresetlink')
}

const redir1=()=>{
  navigate('/register')
}


    
const sendUser=async ()=>{


    let data = await axios.post('https://chatbot-backend-huh3.onrender.com/api/user/login',{
    "email":loginData.email,
    "password":loginData.password

    })
  
  console.log(data.data.status)
  if(data.data.status==='Success'){
    user = data.data.name
    navigate('/chat')
  }else{
    alert("Invalid User Credentials")
  }
}


  return (
    <div className='JoinPage'>
        <div className='JoinContainer'>
          <img className='imgsize' src={purple} alt="logo" />
          <h1>Sign In</h1>
          <input value={loginData.email} onChange={(e)=>setLoginData({...loginData, email:e.target.value})} placeholder="Enter Email ID" type='text' id="joinInput"/>
          <input value={loginData.password} onChange={(e)=>setLoginData({...loginData, password:e.target.value})} placeholder="Enter Password" type='text' id="joinInput"/>

          <Link><button  onClick={sendUser} className='joinbtn'>Login In</button></Link>
          <p className='cursor' onClick={redir}>Forgot your Password?</p>
            <p className='cursor' onClick={redir1}>Click here to signup</p>
            <p className='text'>User Login :testuser2@gmail.com and password:qwertyuiop</p>



        </div>
    </div>
  )
}

export default Join
export {user}

