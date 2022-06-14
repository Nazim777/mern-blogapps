import React,{useState,useEffect} from 'react'
import './Dashboard.css'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { getBlogbyusersid } from '../../redux/features/UserSlice'
import { deleteBlog } from '../../redux/features/BlogSlice'
import { setEdit } from '../../redux/features/UserSlice'
import { updateBlog } from '../../redux/features/BlogSlice'

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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
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



const Dashboard = () => {
  const navigate = useNavigate()
    const [blogs,setblogs] = useState([])
    const {id} =useParams()
    const dispatch= useDispatch()
   const {userblogs}= useSelector((state)=>state.user)
   //console.log(userblogs.blogs)
   
   

    useEffect(()=>{
dispatch(getBlogbyusersid(id))
setblogs(userblogs.blogs)

   
    },[])
  // console.log(blogs)
   
  // const handleEdit= ()=>{
  //   dispatch(setEdit({edit:true,body:blogs[0].description,title:blogs[0].title}))
  // }
  //console.log(blogs)
  const{body,title,edit}=  useSelector((state)=>state.user)
  const [bodyText,setBodyText] =useState('')
  const [titleText,setTitleText] =useState('')
  useEffect(()=>{
    if(body,title){
      setTitleText(title)
      setBodyText(body)

    }
  },[body,title])
  return (
    <div className='container mt-5'>


{blogs?blogs.map((item)=>{
    return(
        <div className='blogbox'>

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
      {
        edit?
        <div className='edit'>
        <input type="text" value={titleText}  onChange={(e)=>setTitleText(e.target.value)} className='mb-2 p-2'/> <br />
        <textarea name="" id="" cols="25" rows="10" value={bodyText} onChange={(e)=>setBodyText(e.target.value)}></textarea>
        <div className='m-2 '>
          <button className='btn btn-primary me-2' onClick={()=>{
            dispatch(updateBlog({id:item._id,description:bodyText,title:titleText}))
            dispatch(setEdit({edit:false,body:'',title:''}))
            
          }}>Save</button>
          <button className='btn btn-secondary' onClick={()=>{dispatch(setEdit({edit:false,body:'',title:''})) }}>Cancel</button>
        </div>
        </div>
        :<>

<div className='iconsbtn'>
         <Button onClick={()=>{
              dispatch(deleteBlog(item._id,navigate))
          }}> <DeleteIcon className='delicon'  />
          </Button>
         
         
          <Button onClick={()=>{
            dispatch(setEdit({edit:true,body:item.description,title:item.title}))
            
          }}><EditIcon/></Button>
       </div>
        </>
      }
      </CardActions>
     
      
    </Card>
    
            
        </div>
    )
}):
<div>
<div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
</div>
}
    
   
      
    </div>
  )
}

export default Dashboard
