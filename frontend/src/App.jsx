import React from 'react'
import Navbar from './components/shared/Navbar.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/home/HomePage.jsx'
import Footer from './components/shared/Footer.jsx'
import Login from './components/auth/Login.jsx'
import Signup from './components/auth/Signup.jsx'


const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <HomePage />
  },
  {
    path : '/login',
    element : <Login />
  },
  {
    path : '/signup',
    element : <Signup />
  }
])

const App = () => {
  
  return (
    <>
      <Navbar />
      <RouterProvider router={appRouter}  />
      <Footer />
    </>
  )
}

export default App