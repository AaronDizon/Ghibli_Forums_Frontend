import React from 'react'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import env from 'react-dotenv'
import axios from "axios"
import Threadform from './Threadform'

const MovieForumPage = () => {

    const [movie, setMovie] = useState({})
    const {movieId} = useParams()

    const getOneMovie = async () => {
        try {
             const movieSelected = await axios.get(`${env.BACKEND_URL}/movies/${movieId}`)
            //  console.log(movieSelected)
             setMovie(movieSelected.data.movie)

        } catch (err) {
            console.log(err)
        }
    }
    useEffect(getOneMovie, [])


    return (
        <div className='forumPage'>
            <div className='movieInfo'>
                {movie.title}
                <img src= {movie.image} alt={`${movie.title}`}/>
                <div>
                    {movie.original_title}
                </div>
                <div>
                    {movie.original_title_romanised}
                </div>
                <div>
                    {movie.description}
                </div>
                <div>
                    {movie.director}
                </div>
                <div>
                    {movie.producer}
                </div>
                <div>
                    {movie.release_date}
                </div>
            </div>
            <Threadform movie={movie} />
        </div>
    )
}

export default MovieForumPage
