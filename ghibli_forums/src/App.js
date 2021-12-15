import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import  axios  from 'axios';
import env from 'react-dotenv'
import './App.css';

import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import MovieForumPage from './components/MovieForumPage';

function App() {



  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage/> } />
        <Route path='/movie/:movieId' element={<MovieForumPage />} />
        <Route path='/signup' element={ <Signup/> } />
        <Route path='/login' element={ <Login /> } />
      </Routes>
    </div>
  );
}

export default App;
