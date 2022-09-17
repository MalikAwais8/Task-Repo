import React from "react";
// import { FaUser , FaSignInAlt } from 'react-icons/fa'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="container header">
      
          <Link to="/" className='btn btn-reverse'>Home</Link>
       
          <Link to="/myusers"  className='btn btn-reverse'>Users</Link>
      
          <Link to="/register" className='btn btn-reverse'>Register</Link>
      
    </header>
  );
}

export default Header;
