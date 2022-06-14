import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// const getallblogs= createAsyncThunk('/get/blogs',async()=>{
//     const {data} = axios.get(`http://localhost:5000/blog/get`)
//     return data
// })
export const postBlogs= createAsyncThunk('/post/blog',async({id,blogs})=>{
    const {data} = await axios.post(`https://newblogs1.herokuapp.com/blog/post/${id}`,blogs)
   // console.log(data)
    return data
})


// export const getAlluser = createAsyncThunk('/user/alluser',async()=>{
//     const {data} = await axios.get(`http://localhost:5000/user/alluser`)
//     return data
// })
export const deleteBlog=createAsyncThunk('/blog/deletebyid',async(id,navigate)=>{
   
    await axios.delete(`https://newblogs1.herokuapp.com/blog/delete/${id}`).then((res)=>{
      //  console.log(res)
        window.alert(res.data)
        navigate('/')
        return res 
    })
})
export const updateBlog=createAsyncThunk('/blog/update',async({id,description,title})=>{
    console.log(id,description,title)
    const {data} = await axios.put(`https://newblogs1.herokuapp.com/blog/update/${id}`,{description,title})
    console.log(data)
    return data
})

const blogSlice= createSlice({
    name:'blog',
    initialState:{
        Blogs:[],
        loading:false,
        error:null
        
        
    },
    reducers:{
       
        

    },
    extraReducers:{
        [postBlogs.pending]:(state,action)=>{
            state.loading= true
        },
        [postBlogs.fulfilled]:(state,action)=>{
            state.Blogs= [action.payload]
          
        },
        [postBlogs.rejected]:(state,action)=>{
            state.error=action.payload
        },
        [deleteBlog.pending]:(state,action)=>{
            state.loading= true
        },
        [deleteBlog.fulfilled]:(state,action)=>{
            state.Blogs= [action.payload]
          
        },
        [deleteBlog.rejected]:(state,action)=>{
            state.error=action.payload
        },
        [updateBlog.pending]:(state,action)=>{
            state.loading= true
        },
        [updateBlog.fulfilled]:(state,action)=>{
            state.Blogs= [action.payload]
          
        },
        [updateBlog.rejected]:(state,action)=>{
            state.error=action.payload
        }
    }
    
})

export default blogSlice.reducer