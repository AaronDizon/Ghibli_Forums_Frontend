import React from 'react'
import { Link } from "react-router-dom"



const MovieDisplay = (props) => {
    return (
        <div className='movieDisplay'>
             {props.movie.title}
             <Link to={`/movie/${props.movie.id}`}>
             <img src= {props.movie.image} alt={`${props.movie.title}`}/>
             </Link>
        </div>
    )
}

export default MovieDisplay
