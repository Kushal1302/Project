import React, { useState } from 'react'
import {Box, Button, Grid, TextField, Typography} from '@mui/material'
import { useMutation } from 'react-query'
import axios from 'axios'
import { BASE_URL } from '../constants'
const Login = () => {
    const [loginData , setLoginData] = useState({
        email:"",
        password:""
    })
    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]:e.target.value
        })
    }
    const {mutate:login} = useMutation(() => {
        return axios.post(`${BASE_URL}/find/login`,loginData)
    } , {
        onSuccess:(data) => {
            localStorage.setItem("token" , data?.data.token)
            alert(data?.data.message)
        },
        onError:(err) => {
            alert(err?.data.message)
        }
    })
    const handleSubmit = () => {
        login()
    }
  return (
    <Box sx={{display:'flex' , justifyContent:'center', alignItems:'center' , minHeight:'100vh'}}>
        <Grid container lg={3} md={4} sm={8} xs={10} sx={{display:'flex' , justifyContent:'center',border:1  , minHeight:"400px" , alignItems:'center'}}>
            <Grid item container sx={{display:'flex',justifyContent:'center'}}>
                <Grid item lg={10} md={10} sm={10} xs={10} sx={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                    <Typography variant='h4'>
                        Login
                    </Typography>
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10} sx={{p:1}}>
                    <TextField label="Email" fullWidth name='email' onChange={handleChange}/>
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10} sx={{p:1}}>
                    <TextField label="Password" fullWidth name='password' onChange={handleChange}/>
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10} sx={{p:1}}>
                    <Button variant='contained' onClick={handleSubmit} fullWidth>Login</Button>
                </Grid>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Login
