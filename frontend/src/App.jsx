import React from 'react'
import Navbar from './components/shared/Navbar.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/home/HomePage.jsx'

const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <HomePage />
  },
])

const App = () => {
  
  return (
    <>
      <Navbar />
      <RouterProvider router={appRouter}  />
      
    </>
  )
}

export default App