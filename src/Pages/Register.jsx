import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../Firebase/Firebase.config';
import { FcGoogle } from 'react-icons/fc';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';

const Register = () => {
    const { registerWithEmailPassword, user, setUser, handleGoogleSignIn } = useContext(AuthContext)

    const [showPass, setShowPass] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        const photo = e.target.photo
        const file = photo.files[0]


        const uppercase = /[A-Z]/;
        const lowercase = /[a-z]/;

        if (password.length < 6) {
            return alert("Password must be at least 6 characters");
        }
        if (!uppercase.test(password)) {
            return alert("Password must contain at least ONE uppercase letter");
        }
        if (!lowercase.test(password)) {
            return alert("Password must contain at least ONE lowercase letter");
        }

        const res = await axios.post(`https://api.imgbb.com/1/upload?600&key=c288bf9a517b11d83123d4f58d60e4a3`, { image: file }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })


        const mainPhotoUrl = res.data.data.display_url

        const formData = {
            email,
            password,
            name,
            mainPhotoUrl,
        }

        if (res.data.success == true) {

            registerWithEmailPassword(email, password)
                .then((userCredential) => {
                    updateProfile(auth.currentUser, {
                        displayName: name,
                        photoURL: mainPhotoUrl
                    }).then(() => {
                        setUser(userCredential.user)
                        axios.post('http://localhost:5000/users', formData)
                            .then(res => {
                                console.log(res.data);
                            }).catch(err => {
                                console.log(err);

                            })
                    })
                })
                .catch(err => console.log(err))
        }


    }
    console.log(user);

    const googleSignUp = () => {
        handleGoogleSignIn()
            .then(result => {
                const user = result.user
                setUser(user)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col items-center">

                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold">Please Register Now!</h1>
                </div>

                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegister} className="fieldset">

                            {/* email */}
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input w-full" placeholder="Email" />

                            {/* name */}
                            <label className="label">Name</label>
                            <input name='name' type="text" className="input w-full" placeholder="Full Name" />

                            {/* photo file */}
                            <label className="label">Profile Photo</label>
                            <input name='photo' type="file" className="input w-full" placeholder="Photo" />

                            {/* password + eye button */}
                            <label className="label">Password</label>
                            <div className="relative">
                                <input
                                    name="password"
                                    type={showPass ? "text" : "password"}
                                    className="input w-full"
                                    placeholder="Password"
                                />

                                <span
                                    onClick={() => setShowPass(!showPass)}
                                    className="absolute right-3 top-3 text-xl cursor-pointer"
                                >
                                    {showPass ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>

                            {/* Google SignUp */}
                            <button type="button" onClick={googleSignUp} className='btn mt-3'>
                                <FcGoogle size={24} />
                            </button>

                            {/* Register Button */}
                            <button className="btn btn-neutral mt-4">Register</button>

                            <div className="mt-2">
                                <p>
                                    Already have an account?{" "}
                                    <Link to={'/login'} className='text-red-400'>
                                        Login
                                    </Link>
                                </p>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;
