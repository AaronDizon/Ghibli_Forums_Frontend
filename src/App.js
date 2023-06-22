import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from './context/UserContext'
import  axios  from 'axios';
import env from 'react-dotenv'
import './App.css';

import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import MovieForumPage from './components/MovieForumPage';
import Footer from './components/Footer';

function App() {

  const value = useContext(UserContext)
  const { userState } = useContext(UserContext)
  const [ user, setUser ] = userState

  const fetchUser = () => {
    const userId = localStorage.getItem('userId')
    if (userId) {
      axios.get(`${env.BACKEND_URL}/user/verify`, {
        headers: {
          Authorization: userId
        }
      })
      .then((response) => {
        
        setUser(response.data.user)
        console.log(response.data.user)
        console.log('fetchUser')
      })
    }
  }

    useEffect(fetchUser, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage/> } />
        <Route path='/movie/:movieId' element={<MovieForumPage />} />
        <Route path='/signup' element=
        { user.id
        ?
        <Navigate to='/' />
        :
        <Signup/> 
        } />
        <Route path='/login' element=
        { user.id 
        ?
        <Navigate to='/' />
        :
        <Login /> 
        } />
      </Routes>
    </div>
  );
}

export default App;


