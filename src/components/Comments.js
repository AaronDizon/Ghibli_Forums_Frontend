import React from 'react'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import env from 'react-dotenv'
import axios from "axios"
import Commentform from './Commentform'
import CommentList from './CommentList'

const Comments = (props) => {
    // console.log(props.thread)

    const [ comments,  setComments] = useState([])

    const getComments = async (e) => {
        try {
           
            const threadComments = await axios.get(`${env.BACKEND_URL}/movies/thread/${props.thread.id}/comments`)
            // console.log(threadComments)
            setComments(threadComments.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(getComments, [])

    return (
        <div className="commentsContainer">
            <Commentform thread={props.thread} movie={props.movie} setComments={setComments}
            getComments={getComments}/>
            <CommentList threadId={props.thread.id} comments={comments} getComments={getComments}/>
        </div>
    )
}

export default Comments
