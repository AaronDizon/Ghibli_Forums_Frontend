import React from 'react'
import { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import env from 'react-dotenv'
import axios from "axios"

const ThreadContainer = (props) => {

    const value = useContext(UserContext)
    const { userState } = useContext(UserContext)
    const [ user, setUser] = userState


    const [description, setDescription] = useState('')
    const [showEdit, setShowEdit] = useState(false)
    console.log(props.thread.id)

    const editThread = async (e) => {
        try{
            e.preventDefault()
            await axios.put(`${env.BACKEND_URL}/user/thread/${props.thread.id}`,{description})
            .then((response)=> {
                console.log(response)
                setShowEdit(false)
                props.getThreads()
            })
        } catch (err) {
            console.log(err)
        }
    }

    const deleteThread = async () => {
        
        await axios.delete(`${env.BACKEND_URL}/user/thread/${props.thread.id}`)
        .then((response)=> {
            console.log(response)
            props.getThreads()
        })
    }

    return (
        <div>
            {showEdit 
            ?   
            <form className="editThreadForm" onSubmit={editThread}>
                <input type="tex" placeholder={`${props.thread.description}`} onChange={(e)=>{setDescription(e.target.value)}} />
                <button className="threadEditButton" type="submit">Change</button>
            </form>
            :   
            user.id === props.thread.user.id
            ?
            <div>
                <p>{props.thread.description}</p>
                <button onClick={()=>{setShowEdit(true)}}>Edit</button>
                <button onClick={()=>{deleteThread()}}>Delete</button>
            </div>
            :
            <p>{props.thread.description}</p>
            }
        </div>
    )
}

export default ThreadContainer

/*{ show edit is true ?
    show(an input with type text when on change, placeholder = thread.description, setDescription to e.target.value)
    show button that calls an axios put with the req.body being the description and sets the showEdit to false
    :
    user.id === thread.user.id?
    show thread.description
    show button when onClick sets show edit to true
    :show thread.description
}
*/

/*

{showEdit 
?   
<form className="editThreadForm" onSubmit={}>
    <input type="tex" placeholder=`${thread.description}` onChange{(e)=>{setDescription}} />
    <input className="threadEditButton" type="submit" oncClick={()=>{setShowEdit(false)}}value="Change" />
</form>
:   
user.id === thread.user.id
?
<p>{thread.description}</p>
<button onClick={()=>{setShowEdit(true)}}
:
<p>{thread.description}</p>
}

*/