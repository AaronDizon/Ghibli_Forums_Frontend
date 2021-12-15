import React from 'react'
import { Link,  } from "react-router-dom"

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link className="NavLink" to="/">Home</Link>
            <Link className="NavLink" to="/login" >Login</Link>
            <Link className="NavLink" to="/signup">Signup</Link>       
        </div>
    )
}

export default Navbar
