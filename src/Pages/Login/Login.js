import React,{useEffect, useState} from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { login } from '../../redux/features/UserSlice';
import {useDispatch,useSelector} from 'react-redux'







const Login = () => {
    const dispatch= useDispatch()
    const navigate = useNavigate()
    const [user,setuser] =useState({
        email:'',
        password:''
    })
    
    // const handleSubmit=(e)=>{
    //     e.preventDefault()
    // }
    const handleChange=(e)=>{
        setuser((prestate)=>({
            ...prestate,
            [e.target.name]:e.target.value
        }))
    }
   // console.log(user)
  const  {singleusers,loading,error,loginFailed,isLoggedin}= useSelector((state)=>state.user)
 // console.log(singleusers)
const handleSubmit=(e)=>{
    e.preventDefault()
}

 const handleClick= async()=>{
    
      dispatch(login({user,navigate})) 

   }
  
   useEffect(()=>{


    

   },[])
  
  return (
    <div>

        <div className="container mt-5">

      <div className='box'>
      <form action="" className='form' onSubmit={handleSubmit}>
       <h1>Login</h1>
           <input type="email" name='email' value={user.email} onChange={handleChange} className='mb-4 input' placeholder='enter your email...' />
           <input type="password" name='password' value={user.password} onChange={handleChange} className='mb-4 input' placeholder='enter your password...' />
           <button type='submit' className='btn btn-primary' style={{padding:'5px'}} onClick={handleClick}>Submit</button>
       </form>
       {
           loginFailed&& <>
           <Stack sx={{ width: '100%',marginTop:'70px' }} spacing={2} >
           <Alert variant="filled" severity="error">
        Authentication Failed!
      </Alert>
      
    </Stack>

           </>
       }
       
      </div>


        </div>
      
    </div>
  )
}

export default Login
