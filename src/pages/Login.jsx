import React from 'react'

const Login = () => {
    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className='logo'>Chat Application</span>
                <span className='title'>Register</span>
                <form className='form' action="">
                    <input type="text" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <button>Sign In</button>
                </form>
                <p>Do don't Have an Account ? Register</p>
            </div>
        </div>
    )
}

export default Login