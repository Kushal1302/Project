import logo from './logo.svg';
import './App.css';
import {useQuery} from 'react-query'
import { BASE_URL } from './constants';
import axios from 'axios'
import Login from './Components/Login';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';


function App() {
  const navigate = useNavigate()
  const {data} = useQuery(['check-login'] , () => {
    const token = localStorage.getItem("token")
    if(token){
      navigate('/dashboard')
    }
  })
  return (
    <>
      <Routes>
        <Route path='/dashboard' element={<>Hello <Button onClick={() => {
          localStorage.removeItem('token')
          navigate('/')
        }}>Logout</Button></>}/>
        <Route path='/' Component={Login}/>
      </Routes>
    </>
  );
}

export default App;
