import axios from 'axios'
import { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import env from 'react-dotenv'
import React from 'react'

const Threadform = (props) => {

    const value = useContext(UserContext)
    const { userState } = useContext(UserContext)
    const [ user, setUser ] = userState

    const [description, setDescription] = useState('')

    const postForm = async (e) => {
        console.log('working')
        if(description === '') {
            alert(`input can't be blank`)
        } else {
            console.log('post is made to backend')
            await axios.post(`${env.BACKEND_URL}/user/${user.id}/thread/${props.movie.id}`, {description})
            .then((response) => {
                console.log(response)
                setDescription('')
            })
        }
    }
    // console.log(props.movie.id)
    // console.log(user.id)
    return (
        <div className="threadFormContainer">
        <h3>Make a thread!</h3>
        <div className="threadForm">
            <form className="threadFormContent" onSubmit={postForm}>
                <input value={description} onChange={(e)=>{setDescription(e.target.value)}} />
                <input className='threadSubmitButton' type='submit' value='Post' />
            </form>
        </div>
        </div>
    )
}

// A Town With An Ocean View is my favorite!

export default Threadform
