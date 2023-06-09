import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, storage, db } from '../firebase';
import { FcAddImage } from 'react-icons/fc'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {

    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        // const auth = getAuth();

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);



            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    setErr(true);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(res.user, {
                            displayName: displayName,
                            photoURL: downloadURL,


                        });
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,

                        });
                        await setDoc(doc(db, "users", res.user.uid), {});
                        navigate('/');
                    });

                }
            );

        } catch (err) {
            console.log(err);
            setErr(true);
        }


    }
    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className='logo'>Chat Application</span>
                <span className='title'>Register</span>
                <form onSubmit={handleSubmit} className='form' action="">
                    <input type="text" placeholder='Display Name' />
                    <input type="text" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <input style={{ display: "none" }} type="file" name="" id="file" />
                    <label htmlFor="file">
                        <FcAddImage size={32} className='uploadIcon' />
                        <span>Add an Avatar</span>
                    </label>
                    <button>Sign Up</button>
                    {err && <span className='err'>Something went wrong!</span>}
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