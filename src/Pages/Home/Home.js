import React, {useState, useEffect } from 'react'
import './Home.css'

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

const Home = () => {
  const navigate = useNavigate()
  const [blogs,setblogs] =useState([])
 
useEffect(()=>{
axios.get('https://newblogs1.herokuapp.com/blog/get').then((res)=>{
 // console.log(res.data)
 setblogs(res.data)
}).catch((error)=>{
  console.log(error)
})
},[])
//console.log(blogs)
  return (
    <div className="container mt-5 mb-5 ">
{
  blogs && blogs.map((item)=>{
    return(
<div className="home">

      <Card sx={{ maxWidth:600,marginTop:'20px'}} >
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
        title={item.title}
        subheader="September 14, 2016"
      />
      <CardMedia
      sx={{height:'55%'}}
        component="img"
        height="194"
        image={item.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button variant='contained' sx={{marginLeft:'60%'}} onClick={()=>navigate(`/blogdetails/${item._id}`)} >Read more...</Button>
      </CardActions>
     
      
    </Card>
      

    </div>
    )
  })
}
    
   
  </div>
  )
}

export default Home
