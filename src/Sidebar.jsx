import React from "react";
import { useNavigate } from "react-router-dom";




function Sidebar(){


    const navigate = useNavigate();
    return(
        <>
        <div className="m-3 position-fixed">
         <div className="d-flex flex-column gap-3">
            <img  className="logo-text"src="./src/instagram name.png" alt="" />
            <div  onClick={()=>{navigate('/')}}><i className="bi bi-house-door-fill"></i> Home</div>
            <div onClick={()=>{navigate('/search')}}><i className="bi bi-search"></i> Search</div>
            <div onClick={()=>{navigate('/explore')}}><i className="bi bi-compass"></i>Explore</div>
            <div onClick={()=>{navigate('/reels')}}><i className="bi bi-play-circle"></i>Reels</div>
            <div onClick={()=>{navigate('/messages')}}><i className="bi bi-chat-heart"></i> Messages</div>
            <div onClick={()=>{navigate('/notifications')}}><i className="bi bi-bell"></i> Notification</div>
            <div onClick={()=>{navigate('/create')}}><i className="bi bi-plus-circle"></i>Create</div>
            <div onClick={()=>{navigate('/profile')}}><i className="bi bi-person-circle"></i>Profile</div>
        </div>
        </div>
        <div className=" position-fixed bottom-0  d-flex flex-column gap-3 mb-3">
            <div><i className="bi bi-threads"></i> Threads</div>
            <div onClick={()=>{navigate('/more')}}><i className="bi bi-list"></i>More</div>
        </div>
        
        </>
       
    )
}

export default Sidebar