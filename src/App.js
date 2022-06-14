import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from '../src/Pages/Home/Home'
import BlogDetails from './Pages/Blogdetails/BlogDetails';
import AddBlogs from './Pages/AddBlogs/AddBlogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import Footer from './Pages/Footer/Footer';
function App() {
  return (
    <>
   <BrowserRouter>
    <div className="App">
      
      <Header/>
      <Routes>
      <Route path='/blogdetails/:id' element={  <BlogDetails/>}/>
        <Route path='/' element={<Home/>} />  
        <Route path='/login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
        <Route path='/addblogs/:id' element={<AddBlogs/>}/>
        <Route path='/dashboard/:id' element={<Dashboard/>}/>
      </Routes>
    </div>
   
    </BrowserRouter>
   
    </>
  );
}

export default App;
