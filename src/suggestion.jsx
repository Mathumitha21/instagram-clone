import axios from "axios";
import { useEffect, useState } from "react";

function Suggestion(){

    const [profile,setprofile]=useState(null);
    const [suggestion,setsuggestion]=useState([]);

    useEffect (()=>{
                                       
        fetch('http://localhost:3000/profile')
        .then(data=>data.json())
        .then(data=>setprofile(data))
        .catch(err=>console.log(err))

         fetch('http://localhost:3000/suggestion')
        .then(data=>data.json())
        .then(data=>setsuggestion(data))
        .catch(err=>console.log(err))

    },[])

    const handlefollow = async (id , username)=>{
        axios.post('http://localhost:3000/followers',{"id":id , "username":username})
        .then(alert("followed"))
        .catch(err=>console.log(err))
    }

    return(
        
        <div>
            <div className="suggestion w-75 m-4">
                 {profile ?
            <div className="d-flex">
                <img className=" db rounded-circle" src={profile.profile_pic} alt="Profile pic" />
                <h5>{profile.username}</h5>
                <p className="ms-auto text-primary ">switch</p>
            </div>
            : <small>loading...</small>}

            <div className="d-flex">
                <p>Suggestion for you</p>
                <b className="ms-auto">See All</b>
            </div>


             {suggestion.length > 0 ? (
                <div >
                    {suggestion.map((suggestion)=>(
                      <div className="my-4" key={suggestion.id}>
                       <div className="d-flex">
                        <img className=" db rounded-circle" src={suggestion.profile_pic} alt="Profile pic" />
                        <h5>{suggestion.username}</h5>
                        <a className="text-primary ms-auto " onClick={()=>(handlefollow(suggestion.id,suggestion.username))}>Follow</a>
                       </div>
                      

                      </div>
                    ))}
                </div>
            ):(<div>
                loading... 
            </div>
        )}
        </div>
            </div>

            
    ) 
}

export default Suggestion 