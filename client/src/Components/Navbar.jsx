import React from 'react'
import {AppBar,Toolbar, Box,IconButton , Button , Typography} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const {userName} = JSON.parse(localStorage.getItem("user")) ?? {}
    const handleLogout = () => {
      localStorage.removeItem('user')
      navigate('/login')
    } 
    const navigate = useNavigate()
  return (
    <AppBar sx={{background:'#E0E3E8',color:'#000'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component={Link} to={'/'} sx={{textDecoration:'none',color:'#000'}}>
            University
          </Typography>
          <Box sx={{display:'flex', width:500 , justifyContent:'space-between', marginLeft:2}}>
              <Typography to={'/dashboard'} component={Link} sx={{cursor:'pointer',textDecoration:'none',color:'#000'}}>Home</Typography>
              <Typography component={Link} sx={{cursor:'pointer',textDecoration:'none',color:'#000'}}>About</Typography>
              <Typography component={Link} sx={{cursor:'pointer',textDecoration:'none',color:'#000'}}>Contact</Typography>
              <Typography component={Link} sx={{cursor:'pointer',textDecoration:'none',color:'#000'}}>Latest News</Typography>
          </Box>
          <Box sx={{display:'flex' , width:'100%',justifyContent:'end' , alignItems:'center'}}>
              {
                userName ? <> {userName} <Button sx={{marginLeft:1}} color="success" variant='contained' onClick={handleLogout}>Logout</Button> </> : <Button  variant='contained' onClick={() => navigate('/login')}>Login</Button>
              }
          </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar
