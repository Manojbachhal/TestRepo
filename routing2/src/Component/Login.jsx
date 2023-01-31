import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { validate } from '../Context/Authcontect';
function Login() {
    const[user,setuser]=useState({
        email:'',
        password:''
    })
    let navigate=useNavigate();

    const {login,handle}=useContext(validate);

    const getData=(e)=>{
        let name=e.target.name;
        let value =e.target.value;
        setuser({...user,[name]:value})
    }
    const Apicall =async (event)=>{
        event.preventDefault();
        // setSubmit(true);
    try {
        // console.log('dsfd')
        let res = await fetch("https://reqres.in/api/login", {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "Content-Type": "application/json" }
        })
        let data = await res.json();
        console.log(data.token);
        handle();
        
        navigate('/dashboard')
        // auth.loading=false;
        
    } catch (error) {
        console.log(error);
        
    }
  
}

  return (
    <form action="" onSubmit={Apicall}>
        <div>
            <input type="text" name='email' placeholder='Enter Email' onChange={getData} />
        </div>
        <div>
            <input type="text" name='password' placeholder='Enter Password' onChange={getData} />
       
        </div>
        <div>
            <input type="submit" value="Submit" />
        </div>
    </form>
  )
}

export default Login