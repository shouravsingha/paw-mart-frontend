import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../Firebase/Firebase.config';

const Register = () => {
    const { registerWithEmailPassword, setUser, user } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        const photoUrl = e.target.photoUrl.value
        registerWithEmailPassword(email, password)
            .then((userCredential) => {

                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photoUrl
                }).then(() => {
                    setUser(userCredential.user)

                }).catch((error) => {
                    console.log(error);

                });
            })
            .catch(err => {
                console.log(err);

            })
    }
    console.log(user);
    
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col items-center">

                    {/* Heading Center & Top */}
                    <div className="text-center mb-8">
                        <h1 className="text-5xl font-bold text-center">Please Register Now!</h1>
                    </div>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleRegister} className="fieldset">
                                {/* email */}
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />

                                {/* name */}
                                <label className="label">Name</label>
                                <input name='name' type="text" className="input" placeholder="full name" />

                                {/* photo url */}
                                <label className="label">Photo URL</label>
                                <input name='photoUrl' type="text" className="input" placeholder="Photo URL" />

                                {/* password */}
                                <label className="label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" />

                                <button className="btn btn-neutral mt-4">Register</button>

                                <div>
                                    <p>
                                        Already have an account? please{" "}
                                        <Link to={'/login'} className='text-red-400' >
                                            Login
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
