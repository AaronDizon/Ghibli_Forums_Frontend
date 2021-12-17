import React from 'react'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import env from 'react-dotenv'
import axios from "axios"
import CommentContainer from './CommentContainer'

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
                        <div key={i} className='singleComment'>
                            <p>{comment.user.name}</p>
                            <CommentContainer comment={comment} getComments={props.getComments}/>
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
