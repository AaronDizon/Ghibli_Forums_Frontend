import React from 'react'
import { useState , useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext'
import { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios'
import env from 'react-dotenv'
import MovieDisplay from '../components/MovieDisplay';
import MovieForumPage from '../components/MovieForumPage';
import Footer from '../components/Footer';



const Homepage = () => {

   
    const [allMovies, setAllMovies] = useState([])

    console.log(`${env.BACKEND_URL}`)

    useEffect(()=>{
        const getMovies = async() => {
       
        const movies = await axios.get(`${env.BACKEND_URL}/movies`)
        setAllMovies(movies.data.movies)
        }
        getMovies()

    },[])




    return (
        <>
        <Routes>
            
        </Routes>
        <div className='homepage'>
            <div className='movieContainer'>
                {allMovies.map((movie, i) => {
                    return (
                        <MovieDisplay movie={movie} />
                    )
                })}
            </div>
            <Footer />
        </div>
        </>
    )
}

export default Homepage
