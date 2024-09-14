import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar.jsx';
import Footer from './components/shared/Footer.jsx';
import HomePage from './components/home/HomePage.jsx';
import Form from './components/auth/Form.jsx';
import MoviePage from './components/movies/MoviePage.jsx'
import MovieDetailsPage from './components/movieDetails/movieDetailsPage.jsx';
import Shows from './components/booking/Shows.jsx';
import ShowsPage from './components/booking/ShowsPage.jsx';


const App = () => {
  return (
    <Router>
      <>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Form initialTab={0} />} />
          <Route path="/register" element={<Form initialTab={1} />} />
          <Route path='/allmovies' element={<MoviePage />} />
          <Route path='/movie/:name' element={<MovieDetailsPage />} />
          <Route path='/movie/:name/shows' element={<ShowsPage />} />
        </Routes>
        
      </>
    </Router>
  );
}

export default App;
