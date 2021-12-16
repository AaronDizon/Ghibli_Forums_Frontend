import React from 'react'
import { Link,  } from "react-router-dom"
import { useContext } from 'react';
import { UserContext } from '../context/UserContext'

const Navbar = () => {

    const { userState } = useContext(UserContext)
    const [ user, setUser ] = userState

    return (
        <div className='navbar'>
            <Link className="NavLink" to="/">Home</Link>
            { user.id ? 
            <>
            <p className='logout' onClick={()=> {
                localStorage.removeItem('userId')
                setUser({})
            }}>Logout</p>
            </>
            :
            <>
            <Link className="NavLink" to="/login" >Login</Link>
            <Link className="NavLink" to="/signup">Signup</Link>   
            </>    
            }
        </div>
    )
}

export default Navbar
