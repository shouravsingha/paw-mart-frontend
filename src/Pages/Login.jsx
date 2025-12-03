import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import auth from '../Firebase/Firebase.config';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const { setUser, handleGoogleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState('');
    const [showPass, setShowPass] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                navigate(location.state ? location.state : '/');
            })
            .catch((error) => {
                console.log(error);
                alert(error.message);
            });
    };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate(location.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleForget = () => {
        navigate(`/forget/${email}`);
    };

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col items-center">

                    <div className="text-center mb-8">
                        <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    </div>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleLogin} className="fieldset">

                                {/* Email */}
                                <label className="label">Email</label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email"
                                    type="email"
                                    className="input"
                                    placeholder="Email"
                                />

                                {/* Password with eye toggle */}
                                <label className="label">Password</label>
                                <div className="relative">
                                    <input
                                        name="password"
                                        type={showPass ? "text" : "password"}
                                        className="input w-full pr-10"
                                        placeholder="Password"
                                    />

                                    <span
                                        onClick={() => setShowPass(!showPass)}
                                        className="absolute right-3 top-3 cursor-pointer text-xl"
                                    >
                                        {showPass ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>

                                {/* Forget password */}
                                <div>
                                    <button onClick={handleForget} type="button" className="link link-hover">
                                        Forgot password?
                                    </button>
                                </div>

                                {/* Google sign-in */}
                                <button onClick={googleSignIn} type="button" className="btn">
                                    <FcGoogle /> Sign in with Google
                                </button>

                                {/* Login */}
                                <button className="btn btn-neutral mt-4">Login</button>

                               
                                <div>
                                    <p>
                                        Don't have an account? please{" "}
                                        <Link to={'/signup'} className="text-red-400">register</Link>
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
