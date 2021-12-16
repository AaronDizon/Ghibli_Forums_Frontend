import React from 'react'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import env from 'react-dotenv'
import axios from "axios"

const CommentList = (props) => {

    
    const [ show, setShow ] = useState(false)

   

    // console.log(props.threadId)
    return (
        <div className='commentsContainer'>
            {show
            ?
            <div>
                <p onClick={()=>{setShow(false)}}>Hide Comments</p>
                {props.comments.map((comment, i)=> {
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
