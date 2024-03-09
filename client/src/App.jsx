import logo from './logo.svg';
import './App.css';
import {useQuery} from 'react-query'
import { BASE_URL } from './constants';
import axios from 'axios'
import Login from './Components/Login';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import LandingPage from './Components/Navbar';
import Navbar from './Components/Navbar';


function App() {
  const navigate = useNavigate()
  const {data} = useQuery(['check-login'] , () => {
    const {token} = JSON.parse(localStorage.getItem("user"))
    if(token){
      navigate('/dashboard')
    }else{
      navigate('/')
    }
  })
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/dashboard' element={<>Hello</>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
