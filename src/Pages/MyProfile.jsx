import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../Firebase/Firebase.config';

const MyProfile = () => {
    const { user, setUser } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false)

    const handleOpenForm = () => {
        setIsOpen(!isOpen)
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        
        const name = e.target.name.value
        const photoUrl = e.target.photoUrl.value

        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        }).then(() => {
            setUser({...user, displayName: name, photoURL: photoUrl})
            
        })
        .catch((error) => {
            console.log(error);

        });
    }


    return (
        <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-lg bg-base-100">
            <div className="flex flex-col items-center">
                <img
                    src={user?.photoURL}
                    alt=""
                    className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                />

                <h2 className="text-2xl font-bold mt-4">{user.displayName}</h2>
                <p className="mt-2">{user.email}</p>
                <button onClick={handleOpenForm}   className='btn btn-parimary mt-5'>Update Profile</button>

                {
                    isOpen && (
                        <form onSubmit={handleUpdate} className="fieldset">
                            <label className="label">Name</label>
                            <input defaultValue={user?.displayName} name='name' type="text" className="input" placeholder="Name" />

                            <label className="label">Photo URL</label>
                            <input defaultValue={user?.photoURL} name='photoUrl' type="text" className="input" placeholder="Photo Url" />

                            <button className="btn btn-neutral mt-4">Update</button>
                        </form>
                    )
                }
            </div>
        </div>
    );
};

export default MyProfile;