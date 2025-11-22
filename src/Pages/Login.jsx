import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router';
import auth from '../Firebase/Firebase.config';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {setUser, user} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
            })
            .catch((error) => {
                console.log(error);
                
            });
    }
    console.log(user);
    
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col items-center">

                    {/* Heading Center & Top */}
                    <div className="text-center mb-8">
                        <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    </div>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleLogin} className="fieldset">
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />

                                <label className="label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" />

                                <div>
                                    <a className="link link-hover">Forgot password?</a>
                                </div>

                                <button className="btn btn-neutral mt-4">Login</button>

                                <div>
                                    <p>
                                        Don't have an account? please{" "}
                                        <Link to={'/signup'} className='text-red-400'>register</Link>
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

export default Login;
