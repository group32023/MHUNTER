import React from 'react'
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div>
        <h1>Home Page</h1>
        <Link to={"/login"}>
          <button>Login</button>
        </Link>
        <Link to={"/signup"}>
          <button>Signup</button>
        </Link>

        
        
      
    </div>
  )
}