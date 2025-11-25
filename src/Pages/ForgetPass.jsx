import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { useParams } from "react-router";
import auth from "../Firebase/Firebase.config";

const ForgetPass = () => {

    const { email } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formEmail = e.target.email.value.trim();

        if (!formEmail) {
            return alert("Please enter a valid email!");
        }

        sendPasswordResetEmail(auth, formEmail)
            .then(() => {
                alert("Password reset email sent! Check your inbox.");
                window.open("https://mail.google.com", "_blank");
            })
            .catch((error) => {
                console.log(error);
                alert(error.message);
            });
    };

    return (
        <div className="flex justify-center mt-20 mb-20">
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-6">

                <form onSubmit={handleSubmit}>
                    <label className="label">Email</label>

                    <input
                        defaultValue={email || ""}
                        name="email"
                        type="email"
                        className="input w-full"
                        placeholder="Enter your email"
                    />

                    <button className="btn btn-primary w-full mt-4">
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgetPass;
