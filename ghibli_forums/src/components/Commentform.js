import React from 'react'
import axios from 'axios'
import { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import env from 'react-dotenv'

const Commentform = (props) => {

    const value = useContext(UserContext)
    const { userState } = useContext(UserContext)
    const [ user, setUser ] = userState
    
    const [description, setDescription] = useState('')
    const [ show, setShow ] = useState(false)

    const postForm = async (e) => {
        e.preventDefault()
        // console.log('comment made')
        await axios.post(`${env.BACKEND_URL}/user/${user.id}/thread/${props.thread.id}/comment`, {description})
        .then((response) => {
            // console.log(response)
            setDescription('')
        })
        setShow(false)
        props.getComments()
    }
    // console.log(user.id)
    console.log(user)
    console.log(props.thread)
    return (
        <div className='commentFormContainer'>
            {show
            ?
            <form className='commentFormConent' onSubmit={postForm}>
                <input value={description} onChange={(e)=>{setDescription(e.target.value)}} />
                <input className='commentSubmitButton' type='submit' value='Post' />
                <button className='cancelCommentButton' onClick={()=>{
                    setShow(false)
                    }}value='Post'>Cancel</button>
            </form>
            : 
            <button className='cancelCommentButton' onClick={()=>{
                setShow(true)
            }}value='Post'>Comment</button> 
            } 
        </div>
    )
}

export default Commentform
