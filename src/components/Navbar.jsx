import React, { useContext } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {
 

  return (
    <div className='navbar'>
      <span className='logo'>Chat Application</span>
      <div className='user'>
        <img src= "" alt="" />
        <span> Naman </span>
        <button>logout </button>
      </div>
    </div>
  )
}

export default Navbar