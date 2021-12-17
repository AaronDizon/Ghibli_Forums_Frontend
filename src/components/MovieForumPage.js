import React from 'react'
import { useState, useEffect, useContext } from "react"
import { UserContext } from '../context/UserContext'
import { useParams } from "react-router-dom"
import env from 'react-dotenv'
import axios from "axios"
import Threadform from './Threadform'
import Commentform from './Commentform'
import CommentList from './CommentList'
import Comments from './Comments'
import ThreadContainer from './ThreadContainer'

const MovieForumPage = () => {

    const value = useContext(UserContext)
    const { userState } = useContext(UserContext)
    const [ user, setUser ] = userState

    const [movie, setMovie] = useState({})
    const [threadList, setThreadList] = useState([])
    const {movieId} = useParams()

    
    
    console.log({movieId})

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

    const getThreads = async () => {
        try{
            const threads = await axios.get(`${env.BACKEND_URL}/movies/${movieId}/threads`)
            // console.log(threads)
            setThreadList(threads.data)
            console.log(threadList)
        }catch (err) {
            console.log(err)
        }
    }

    useEffect(getThreads, [])


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
            <Threadform movie={movie} threadList={threadList} getThreads={getThreads}/>
          <div className='threadListContainer'>
           {threadList.map((thread, i)=> {
               return (
                   <div key={i} className='singleThread'>
                       <p className="threadUserName"> {thread.user.name}</p>
                        <ThreadContainer thread={thread} getThreads={getThreads}/>
                        <Comments thread={thread} movie={movie}/>
                       {/* <Commentform thread={thread} />
                       <CommentList threadId={thread.id} /> */}
                    </div>
               )
           })}
           </div>
        </div>
    )
}

export default MovieForumPage


// <p> {thread.user.name}</p>
// <p>{thread.description}</p>
// <Comments thread={thread} movie={movie}/>

