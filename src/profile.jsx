import React, { useEffect, useState } from "react";
import axios from 'axios';
import Edit from "./edit";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

function Profile() {

    const [profile, setProfile] = useState(null);
    const [followers, setFollowers] = useState([]);
    const [unfollowed, setUnfollowed] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:3000/profile')
            .then(res => setProfile(res.data))
            .catch(err => console.log(err));

        axios.get('http://localhost:3000/followers')
            .then(res => setFollowers(res.data))
            .catch(err => console.log(err));

    }, [unfollowed]);

    function handleOnchange(e) {
        setProfile(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    // const handleUpdate = () => {
    //     axios.put('http://localhost:3000/profile', profile)
    //         .then(() => console.log("profile updated"))
    //         .catch(err => console.log(err));
    // };

    const handleunfollow = (id) => {
        axios.delete(`http://localhost:3000/followers/${id}`)
            .then(() => {
                alert("unfollowed");
                setUnfollowed(prev => !prev);
            })
            .catch(err => console.log(err));
    };

    const navigate = useNavigate();

    return (
        <div>
            <div className="w-20"><Sidebar/></div>
        <div className=" input">
            
            {profile ? (
                <div>
                    <img src={profile.profile_pic} className="profile rounded-circle" />
                   
                    <h2 className="mt-3">{profile.username}</h2>
                    
                    <p>{profile.Description}</p>
                    
                    
                     <div  onClick={()=>{navigate('/edit')}}>
                    <button className="btn btn-primary ms-3 mt-3">Edit profile</button>
                    </div>
                    
                </div>
            ) : (
                <div>Loading profile...</div>
            )}

            <h4 className="text-primary mt-5 ">Followers*</h4>

            {followers.length > 0 ? (
                followers.map(follower => (
                    <div key={follower.id} className="d-flex  my-2">
                        {follower.username}
                        <button className=" unfollow btn btn-secondary rounded-pill"
                            onClick={() => handleunfollow(follower.id)}
                        >
                            Un Follow
                        </button>
                    </div>
                ))
            ) : (
                <div> Loading followers...</div>
            )}
        </div>
        </div>
    );
}

export default Profile;
