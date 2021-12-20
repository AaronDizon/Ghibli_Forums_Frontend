import React from 'react'
import { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import env from 'react-dotenv'
import axios from "axios"

const CommentContainer = (props) => {

    const value = useContext(UserContext)
    const { userState } = useContext(UserContext)
    const [ user, setUser] = userState


    const [description, setDescription] = useState('')
    const [showEdit, setShowEdit] = useState(false)

    const editComment = async (e) => {
        try{
            e.preventDefault()
            await axios.put(`${env.BACKEND_URL}/user/comment/${props.comment.id}`,{description})
            .then((response)=> {
                console.log(response)
                setShowEdit(false)
                props.getComments()
            })
        } catch (err) {
            console.log(err)
        }
    }

    const deleteComment = async () => {
        try{ 
            await axios.delete(`${env.BACKEND_URL}/user/comment/${props.comment.id}`)
            .then((response)=>{
                console.log(response)
                props.getComments()
            })
        }catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            {showEdit 
            ?   
            <form className="editCommentForm" onSubmit={editComment}>
                <input type="text" placeholder={`${props.comment.description}`} onChange={(e)=>{setDescription(e.target.value)}} />
                <button className="commentEditButton" type="submit">Change</button>
            </form>
            :   
            user.id === props.comment.user.id
            ?
            <div>
                <p>{props.comment.description}</p>
                <button onClick={()=>{setShowEdit(true)}}>Edit</button>
                <button onClick={()=>{deleteComment()}}>Delete</button>
            </div>
            :
            <p className="commentDescription">{props.comment.description}</p>
            }
        </div>
    )
}

export default CommentContainer
