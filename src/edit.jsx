import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Edit() {

    const [profile, setProfile] = useState(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        axios.get('http://localhost:3000/profile')
            .then(res => setProfile(res.data))
            .catch(err => console.log(err));
    }, []);

    function handleOnchange(e) {
        setProfile(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    // function handleDescription(e) {
    //     setProfile(prev => ({
    //         ...prev,
    //         [e.target.name]: e.target.value
    //     }));
    // }

    const handleUpdate = () => {
        axios.put('http://localhost:3000/profile', profile)
            .then(() => console.log("profile updated"))
            .catch(err => console.log(err));
    };

    
    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div>
                <h1>Edit Profile Page</h1>
            </div>

            <div>
                <img src={profile.profile_pic} className="profile rounded-circle" />

                <h2>{profile.username}</h2>

                <input
                    type="text"
                    value={profile.username}
                    name="username"
                    className="form-control my-5"
                    onChange={handleOnchange}
                />

                <input
                    type="text"
                    name="profile_pic"
                    value={profile.profile_pic}
                    className="form-control my-5"
                    onChange={handleOnchange}
                />

                
                <input
                    type="text"
                    name="Description"
                    value={profile.Description}
                    className="form-control"
                    onChange={handleOnchange}
                />


                <button
                    className="btn btn-primary my-4"
                    onClick={handleUpdate}
                >
                    Update
                </button>

                <button className="btn btn-primary m-3"
                 onClick={() => navigate("/profile")}
                >Back</button>
            </div>
        </>
    );
}

export default Edit;
