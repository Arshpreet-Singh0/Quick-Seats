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
import SeatPage from './components/booking/SeatPage.jsx';
import AdminTheaters from './components/admin/AdminTheaters.jsx';
import CreateTheater from './components/admin/CreateTheater.jsx';


const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Form initialTab={0} />} />
          <Route path="/register" element={<Form initialTab={1} />} />
          <Route path='/allmovies' element={<MoviePage />} />
          <Route path='/movie/:id' element={<MovieDetailsPage />} />
          <Route path='/movie/:id/shows' element={<ShowsPage />} />
          <Route path='/book/:id' element={<SeatPage />} />
          <Route path='/admin/theaters' element={<AdminTheaters />} />
          <Route path='/admin/theaters/create' element={<CreateTheater />} />
        </Routes>
        
      </>
    </Router>
  );
}

export default App;
