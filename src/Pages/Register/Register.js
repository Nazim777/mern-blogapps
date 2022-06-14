import React,{useEffect, useState} from 'react'
import './Register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
const navigate = useNavigate()
  const [user,setuser] =useState({
    name:'',
    email:'',
    password:''
})

const handleSubmit=(e)=>{
    e.preventDefault()
}
const handleChange=(e)=>{
    setuser((prestate)=>({
        ...prestate,
        [e.target.name]:e.target.value
    }))
}
// console.log(user)
const handleClick=async()=>{
  if(user.name&&user.email&&user.password){
    await axios.post(`https://newblogs1.herokuapp.com/user/register`,user).then((res)=>{
      //console.log(res)
     //window.alert(res.data.message)
      if(res.data.message==='registered successfully'){
       navigate('/login')
       window.alert(res.data.message)
     //

      }else{
        window.alert(res.data.message)
      
      }
    })

  }
   
}

useEffect(()=>{

},[])


  return (
    <div>
       
       <div className="container mt-5">

<div className='box'>
<form action="" className='form' onSubmit={handleSubmit}>
 <h1>Register</h1>
 <input type="text" name='name' value={user.name} onChange={handleChange} className='mb-4 input' placeholder='enter your name...' />
     <input type="email" name='email' value={user.email} onChange={handleChange} className='mb-4 input' placeholder='enter your email...' />
     <input type="password" name='password' value={user.password} onChange={handleChange} className='mb-4 input' placeholder='enter your password...' />



     <button type='submit' className='btn btn-primary' style={{padding:'5px'}} onClick={handleClick}>Submit</button>
     



 </form>
</div>


  </div>
      
    </div>
  )
}

export default Register

