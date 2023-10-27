import React, { useState } from 'react'
import "./Join.css"
import purple from "../images/purple.jpg"
import {Link} from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";




const SendResetEmail = () => {

const [resetmail,setResetmail]=useState({
        email:''
    })





    const handleSubmit =async()=>{
        console.log("hi",resetmail)
        try {

            let resetdata= await axios.post("https://chatbot-backend-huh3.onrender.com/api/user/resetpasswordemail",resetmail)
            console.log(resetdata.data.status)
                          
            if(resetdata.data.status!=='failed'){
                let link =`${resetdata.data.info}`
                let data =window.confirm("Click on OK to reset password \n",link) 
                if(data===true){
                    window.location = link
                }
            }else{
                alert("invalid Email ID")
            }


        } catch (error) {
            console.log('errr',error)

        }

        
    }
    const navigate = useNavigate();






  return (
    <div className='JoinPage'>
    <div className='JoinContainer'>
    <img className='imgsize' src={purple} alt="logo" />
      <h1>ChatBot</h1>
      <input value={resetmail.email} onChange={(e)=>setResetmail({...resetmail, email:e.target.value})} placeholder="Enter Email ID" type='text' id="joinInput"/>

      <Link><button  onClick={handleSubmit} className='joinbtn'>Send Verification Link</button></Link>
      <button  onClick={()=>{navigate('/')}} className='joinbtn'>Cancel</button>



    </div>
</div>

  )
}

export default SendResetEmail