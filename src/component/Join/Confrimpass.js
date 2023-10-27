import React, { useState ,useEffect} from 'react'
import "./Join.css"
import purple from "../images/purple.jpg"
import {Link} from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Password } from 'primereact/password';


const Confrimpass = () => {
    const navigate = useNavigate();

    const [passworddata,setPassworddata]=useState({
        password:"",
        password_confirmation:""
    })
    const [url,setURL]=useState('')

    useEffect(()=>{
        setURL(window.location.href)

    
    })

    const handlesubmit= async()=>{
        try {

            let allurl= url.split('confirmpassword')
            let data=allurl[1].split('/')
            console.log(data)

            let id=data[1]
            let token=data[2]

            if(passworddata.password && passworddata.password_confirmation !== "" && passworddata.password === passworddata.password_confirmation){
                let resetPass =await axios.post("https://chatbot-backend-huh3.onrender.com/api/user/reset-password"+`/${id}/${token}`,passworddata)
                console.log(resetPass)
                alert("Password Changed Succesfully")
                setTimeout(() => {
                  navigate('/')
                }, 3000);

            }else{
                alert("password doesnt match")
            }
            

            
        } catch (error) {
            console.log(error)
        }
    }






  return (
    <div className='JoinPage'>
    <div className='JoinContainer'>
    <img className='imgsize' src={purple} alt="logo" />
      <h1>ChatBot</h1>
      <input  type="password" value={passworddata.password} onChange={(e)=>setPassworddata({...passworddata, password:e.target.value})} feedback={false} placeholder="Enter New Password"  id="joinInput"/>
      <input  type="password" value={passworddata.password_confirmation} onChange={(e)=>setPassworddata({...passworddata, password_confirmation:e.target.value})}  feedback={false} placeholder="Enter New Password"  id="joinInput"/>


      <Link><button  onClick={handlesubmit} className='joinbtn'>Continue</button></Link>



    </div>
</div>

  )
}

export default Confrimpass