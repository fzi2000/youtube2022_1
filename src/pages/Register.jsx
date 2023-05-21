import React from 'react'
import { FcAddImage } from 'react-icons/fc'

const Register = () => {
    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className='logo'>Chat Application</span>
                <span className='title'>Register</span>

                <form className='form' action="">
                    <input type="text" placeholder='Display Name' />
                    <input type="text" placeholder='Email' />
                    <input type="password" placeholder='Password' />

                    <input style={{ display: "none" }} type="file" name="" id="file" />
                    <label htmlFor="file">
                        <FcAddImage size={32} className='uploadIcon' />
                        <span>Add an Avatar</span>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>Do you Have an Account ? Login</p>
            </div>
        </div>
    )
}

export default Register