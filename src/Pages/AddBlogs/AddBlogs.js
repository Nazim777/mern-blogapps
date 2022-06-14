import React,{useState,useEffect} from 'react'
import './AddBlogs.css'
import { postBlogs } from '../../redux/features/BlogSlice'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AddBlogs = () => {
    const [blogs,setblogs ] =useState({
        title:'',
        description:'',
        image:''

    })
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    const handleChange=(e)=>{
        setblogs((prevstate)=>({
            ...prevstate,
            [e.target.name]:e.target.value
        }))
    }
   // console.log(blogs)
   const dispatch= useDispatch()
  const {id} = useParams()
  const navigate = useNavigate()
    const handleClick=()=>{
    dispatch(postBlogs({id,blogs}))
    navigate('/')

    }
  return (
    <div className='container mt-5  box'>
        <div><h1 className='p-2'>Add Blogs</h1></div>
        <form action="" className='form form1' onSubmit={handleSubmit}>
        <input type="text" name='title' value={blogs.title} onChange={handleChange} className='title' placeholder='title...' />
        <textarea name="description" id="" value={blogs.description} onChange={handleChange}  cols="30" className='des' rows="10" ></textarea>
        <input type="text" value={blogs.image} onChange={handleChange}  className='img' name='image' />
        <button className='btn btn1' onClick={handleClick}>Submit</button>
        </form>
       
    </div>
  )
}

export default AddBlogs
