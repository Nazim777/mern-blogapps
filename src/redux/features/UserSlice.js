import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const login = createAsyncThunk('/user/login',async({user,navigate})=>{
    

    
          // console.log(user)
      const {data} = await axios.post(`https://newblogs1.herokuapp.com/user/login`,user)
      // console.log(data)
      window.alert('login successfully')
      navigate('/')
      return data    
    
})

export const getBlogbyusersid=createAsyncThunk('/user/blogbyuserid',async(id)=>{
    const {data} = await axios.get(`https://newblogs1.herokuapp.com/user/getuserbyid/${id}`)
    return data
})

const userSlice = createSlice({
    name:'user',
    initialState:{
        userblogs:[],
        singleusers:{},
        isLoggedin:false,
        loginFailed:false,
        error:null,
        loading:false,
        edit:false ,
        body:'',
        title:''
    },
    reducers:{
        setlogout:(state,action)=>{
            state.isLoggedin=action.payload.isLoggedin


        },
        setEdit:(state,action)=>{
            state.edit= action.payload.edit 
            state.body= action.payload.body 
            state.title= action.payload.title 

        }

    },
    extraReducers:{
        [login.pending]:(state,action)=>{
            state.loading= true
        },
        [login.fulfilled]:(state,action)=>{
            state.singleusers= action.payload
            state.isLoggedin=true 
            state.loading=false
            state.loginFailed=false
            //console.log(state.singleusers)
        },
        [login.rejected]:(state,action)=>{
            state.error= action.payload
            state.loginFailed= true
        },
        [getBlogbyusersid.pending]:(state,action)=>{
            state.loading= true
        },
        [getBlogbyusersid.fulfilled]:(state,action)=>{
            state.userblogs= action.payload
          //  state.isLoggedin=true 
            state.loading=false
            //console.log(state.singleusers)
        },
        [getBlogbyusersid.rejected]:(state,action)=>{
            state.error= action.payload
        }
    }
})
export const {setlogout,setEdit}= userSlice.actions
export default userSlice.reducer