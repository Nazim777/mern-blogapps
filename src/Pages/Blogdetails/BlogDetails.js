import React,{useState,useEffect} from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import './BlogDetails.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


  

const BlogDetails = () => {
  const navigate= useNavigate()
  const {id} =useParams()
  //console.log(id)
   
    const [blog,setblog] =useState([])
    useEffect(()=>{
   
         axios.get(`https://newblogs1.herokuapp.com/blog/get/${id}`).then((res)=>{
          //console.log(res)
          setblog(res.data)
        }).catch((error)=>{
          console.log(error)
        })
      
       
   

    },[])
   // console.log(blog.postedBy.name)
   const [user,setuser] =useState(false)
   useEffect(() => {
    const timer = setTimeout(() => {
     setuser(true)
    }, 2000);
    return () => clearTimeout(timer);
  }, [])
  return (
   
      

      <div className=" container mt-5 home">

    
{/* <Card sx={{ maxWidth: 700,marginTop:'20px' }}>
<CardHeader
  avatar={
    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
      R
    </Avatar>
  }
  action={
    <IconButton aria-label="settings">
      <MoreVertIcon />
    </IconButton>
  }
  title={blog.title}
  subheader="September 14, 2016"
/>
<CardMedia
sx={{height:'55%'}}
  component="img"
  height="194"
  image={blog.image}
  alt="Paella dish"
/>
<CardContent>
  <Typography variant="body2" color="text.secondary">
  {blog.description}
  </Typography>
</CardContent>
<CardActions disableSpacing>
  <IconButton aria-label="add to favorites">
    <FavoriteIcon />
  </IconButton>
  <IconButton aria-label="share">
    <ShareIcon />
  </IconButton>
  <Button variant='contained' onClick={()=>navigate('/')} sx={{marginLeft:'70%'}}>Home</Button>
</CardActions>


</Card> */}
<div className="row home2">
  <div className="col-sm-8">
  <div className='mt-5'>
  <h4>{blog.title}</h4>
 <div className='mt-2 '>
 <img src={blog.image} alt="" className='image'  />
 {
   user?<h6 style={{fontWeight:'bold'}}>postedBy : {blog.postedBy.name}</h6>:''
 }
 
 
 </div>
  <p>{blog.description}</p>
</div>
  </div>
  <div className="col-sm-2 category">
   <div className='blog'>
   <h2>Blog Categories</h2>
   <div>
   <Stack direction="row" spacing={1} sx={{marginTop:'20px',marginBottom:'10px'}}>
      <Chip label="Education" variant="outlined" />
      <Chip label="Sports" variant="outlined" />
      <Chip label="Business" variant="outlined" />
      <Chip label="life Style" variant="outlined" />
      
     
    </Stack>
    <Stack direction="row" spacing={1}>
      <Chip label="Food" variant="outlined" />
      <Chip label="Nature" variant="outlined" />
      <Chip label="Internationals" variant="outlined" />
      
      
      
    </Stack>
   </div>
   </div>
  </div>
</div>



</div>

      
   
  )
}

export default BlogDetails
