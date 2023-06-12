import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';


const Login = () => {

    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className='logo'>Chat Application</span>
                <span className='title'>Login</span>
                <form className='form' action="">
                    <input type="text" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <button>Sign In</button>
                    <span className='err'>Something went wrong!</span>
                </form>
                <p>Do don't Have an Account ?
                    <Link to="/register">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login