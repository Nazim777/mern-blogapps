import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {setlogout } from '../../redux/features/UserSlice'
import { useDispatch } from 'react-redux'



const Header = () => {
  const navigate = useNavigate()
  const dispatch= useDispatch()
  const {singleusers,isLoggedin} = useSelector((state)=>state.user)
  //console.log(singleusers.user._id)
  const LogOut= ()=>{
    dispatch(setlogout({isLoggedin:false}))

  }

  return (
    <div>

<nav className="navbar navbar-expand-lg fixed-top mb-10 navbar-dark bg-dark" >
  <div className="container-fluid">
 
    <Link to='/' className='navbar-brand'>BLOG</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to='/' className='nav-link active'>Home</Link>
        </li>
        <li className="nav-item">
          
        {/* {singleusers ?<Link to={`/addblogs/${singleusers.user._id}`} className='nav-link '> Add Blogs</Link>:'you are not login users'} */}
        {/* {singleusers?<Link to={`/addblogs/${singleusers.user._id}`} className='nav-link '> Add Blogs</Link>:'you are not login users'} */}
        {
          isLoggedin&& <Link to={`/addblogs/${singleusers.user._id}`} className='nav-link active '> Add Blogs</Link>
        }

        </li>
        <li className="nav-item">
        {isLoggedin&& <Link to={`/dashboard/${singleusers.user._id}`} className='nav-link active'>Dashboard</Link>}
        </li>
       
      </ul>
      
    </div>
    <div className='button'>
      {isLoggedin?<><button type='submit' className='btn btn-primary me-3' onClick={LogOut} >LogOut</button></>
      :<>
      
      <button type='submit' className='btn btn-primary me-3' onClick={()=>navigate('/login')}>Login</button>
      <button type='submit' className='btn btn-secondary' onClick={()=>navigate('/register')}>Register</button>
      </>
      }
     
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Header
