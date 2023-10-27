import React, { useState } from 'react'
import "./Join.css"
import purple from "../images/purple.jpg"
import {Link} from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Register() {
    const [loginData,setLoginData]=useState({name:'',email:'',password:'',confirm_password:'',tc:true})
    const navigate = useNavigate();

    const redir=()=>{
      navigate('/')
    }


    const sendUser=async()=>{
        let data = await axios.post('http://localhost:4500/api/user/register',{
            "name":loginData.name,
            "email":loginData.email,
            "password":loginData.password,
            "password_confirmation":loginData.confirm_password,
            "tc":true
            })
            console.log(data.data.status)
            if(data.data.status==='Success'){
                alert('Registered Successfuly')
                navigate('/')
            }

    }
  return (
    <div>
         <div className='JoinPage'>
        <div className='JoinContainer'>
        <img className='imgsize' src={purple} alt="logo" />
          <h1>ChatBot</h1>
          <input value={loginData.name} onChange={(e)=>setLoginData({...loginData, name:e.target.value})} placeholder="Enter Your Name" type='text' id="joinInput"/>
          <input value={loginData.email} onChange={(e)=>setLoginData({...loginData, email:e.target.value})} placeholder="Enter Email ID" type='text' id="joinInput"/>
          <input value={loginData.password} onChange={(e)=>setLoginData({...loginData, password:e.target.value})} placeholder="Enter Password" type='text' id="joinInput"/>
          <input value={loginData.confirm_password} onChange={(e)=>setLoginData({...loginData, confirm_password:e.target.value})} placeholder="Confirm Password" type='text' id="joinInput"/>

          <Link><button  onClick={sendUser} className='joinbtn'>Register</button></Link>
          <p className='cursor' onClick={redir}>Already have an account? Sign in</p>


        </div>
    </div>
    </div>
  )
}

export default Register