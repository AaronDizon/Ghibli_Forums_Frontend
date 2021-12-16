import React from 'react'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import env from 'react-dotenv'
import axios from "axios"

const CommentList = (props) => {

    const [ comments,  setComments] = useState([])
    const [ show, setShow ] = useState(false)

    const getComments = async () => {
        try {
            const threadComments = await axios.get(`${env.BACKEND_URL}/movies/thread/${props.threadId}/comments`)
            console.log(threadComments)
            setComments(threadComments.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(getComments, [])

    console.log(props.threadId)
    return (
        <div className='commentsContainer'>
            {show
            ?
            <div>
                <p onClick={()=>{setShow(false)}}>Hide Comments</p>
                {comments.map((comment, i)=> {
                    return (
                        <div key={i} className='singleCommentContainer'>
                            <p>{comment.description}</p>
                        </div>
                    )
                })}
            
            </div>
            :
            <p onClick={()=>{setShow(true)}}>View Comments</p>
            }
           
          
                
        </div>
    )
}

export default CommentList
