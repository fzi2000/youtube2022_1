import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, storage, db } from '../firebase';
// import { FcAddImage } from 'react-icons/fc'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';
 
const Register = () => {
 
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 
   
    const handleSignUpWithEmail = (e) => {
        e.preventDefault();
 
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // const displayName = e.target[0].value;
                // const email = e.target[1].value;
                // const password = e.target[2].value;
                // const file = e.target[3].files[0];
                const user = userCredential.user;
                const uid = user.uid;
 
                // if (!displayName || !email || !password || !file) {
                //     setErr("Invalid Entry")
                //     return;
                // }
                // console.log(displayName , password);
                // setSuccess(true);
 
                // // Send email verification
                // sendEmailVerification(user)
                //     .then(() => {
                //         // Verification email sent successfully
                //         console.log("Verification email sent");
                //     })
                //     .catch((error) => {
                //         // Handle email verification error
                //         console.log("Error sending verification email:", error);
                //     });
 
                updateProfile(user, {
                    displayName: username,
                });
 
                setDoc(doc(db, "users1", uid), {
                    uid: uid,
                    displayName: username,
                    email: email
                    // photoURL: getDownloadURL,
                })
               
                setDoc(doc(db,"userChats",uid),{});
                console.log("return of the gyat")
 
 
            })
            .catch((error) => {
                // Handle sign-up errors
                console.log("Error creating user:", error);
            });
    };
    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className='logo'>Chat Application</span>
                <span className='title'>Register</span>
                <form onSubmit={handleSignUpWithEmail} className='form' action="">
                    <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Display Name' />
                    <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email' />
                    <input onChange={(e) => setPassword(e.target.value) }type="password" placeholder='Password' />
                    <input style={{ display: "none" }} type="file" name="" id="file" />
                    <label htmlFor="file">
                        {/* <FcAddImage size={32} className='uploadIcon' /> */}
                        <span>Add an Avatar</span>
                    </label>
                    <button>Sign Up</button>
                    {err && <span className='err'>Something went wrong!</span>}
                    {console.log(err)}
                </form>
                <p>Do you Have an Account ?
 
                    <Link to="/login">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}
 
export default Register