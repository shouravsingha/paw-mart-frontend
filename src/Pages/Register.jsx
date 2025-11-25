import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../Firebase/Firebase.config';
import { FcGoogle } from 'react-icons/fc';

import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const { registerWithEmailPassword, setUser, handleGoogleSignIn } = useContext(AuthContext)

    const [showPass, setShowPass] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        const photoUrl = e.target.photoUrl.value

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

        registerWithEmailPassword(email, password)
            .then((userCredential) => {
                updateProfile(auth.currentUser, {
                    displayName: name, 
                    photoURL: photoUrl
                }).then(() => {
                    setUser(userCredential.user)
                })
            })
            .catch(err => console.log(err))
    }

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

                            {/* photo url */}
                            <label className="label">Photo URL</label>
                            <input name='photoUrl' type="text" className="input w-full" placeholder="Photo URL" />

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
