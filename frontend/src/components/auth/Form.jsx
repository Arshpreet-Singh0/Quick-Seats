import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Tabs, Tab } from '@mui/material';
import Login from './Login.jsx';
import Signup from './Signup.jsx';

export default function Form({ initialTab = 0 }) {
  const [tab, setTab] = useState(initialTab);
  const navigate = useNavigate();
  const location = useLocation();
  

  useEffect(() => {
    if (location.pathname === '/login') {
      setTab(0);
    } else if (location.pathname === '/register') {
      setTab(1);
    }
  }, [location.pathname]);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
    if (newValue === 0) {
      navigate('/login');
    } else {
      navigate('/register');
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box
        sx={{
          width: { xs: '100%', md: '40%' }, 
          backgroundColor: '#222',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 4,
        }}
      >
        <Box component="img" src="/media/logo.png" alt="Logo" sx={{ width: '300px', marginBottom: 2 , display: { xs: 'none', md: 'block' }, marginRight : {xs: '50px', md:'0'}}} />

        <Tabs value={tab} onChange={handleTabChange} textColor="inherit" centered>
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>

        {tab === 0 ? <Login /> : <Signup />}
      </Box>

      <Box
        sx={{
          width: { xs: '0%', md: '60%' }, 
          display: { xs: 'none', md: 'block' }, 
          backgroundImage: 'url(/media/auth.png)',
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
        }}
      />
    </Box>
  );
}
