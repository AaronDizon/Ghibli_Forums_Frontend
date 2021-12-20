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
        <div>
            {show
            ?
            <div className='commentsContainer'>
                <p clasName="viewComments" onClick={()=>{setShow(false)}}>Hide Comments</p>
                <div className='commentsContainer'>
                    {props.comments.map((comment, i)=> {
                        return (
                            <div key={i} className='singleComment'>
                                <p className="commentUserName">{comment.user.name}</p>
                                <CommentContainer comment={comment} getComments={props.getComments}/>
                            </div>
                        )
                    })}
                </div>
            
            </div>
            :
            <p clasName="viewComments" onClick={()=>{setShow(true)}}>View Comments</p>
            }
           
          
                
        </div>
    )
}

export default CommentList
