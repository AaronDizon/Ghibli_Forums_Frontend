import React from 'react'
import { useState } from 'react'
import env from 'react-dotenv'
import axios from "axios"

const ThreadContainer = (props) => {

    const [description, setDesciption] = useState('')
    const [showEdit, setShowEdit] = useState(false)
    console.log(props.thread.id)
    const editThread = async () => {
        try{
            const change = await axios.put(`${env.BACKEND_URL}/user/thread/${props.thread.id}`,{description})
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <p>{props.thread.description}</p>
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