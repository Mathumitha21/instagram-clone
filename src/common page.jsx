import React from "react";
import Sidebar from "./Sidebar";

 export const Search = () => {
  return (

    <div>
      <div className="w-20"><Sidebar/></div>
      <div className="d-flex justify-content-center">
      <div className=" fs-2 d-flex m-5">
        <div>Search:</div> 
      </div>
      <div className="fs-5 d-flex  m-5"><input type="text number" placeholder="Search..." /></div>
      </div>
      <h6 className=" d-flex justify-content-center m-5">Recent</h6>
      <h6 className="d-flex justify-content-center mx-5 pt-5">No recent searches.</h6>
    </div>
  );
}

 export const Reels = () => {
  return (
    <div >
       <div className="w-20"><Sidebar/></div>
      <div className="d-flex justify-content-center">
        <h1 className="reels  d-flex justify-content-center m-5">Reels not found</h1>
      </div>
    </div>
  );
}


 export const Messages = () => {
  return (
    <div >
       <div className="w-20"><Sidebar/></div>
      <div className="d-flex justify-content-center">
        <h1 className="reels  d-flex justify-content-center m-5">Messages</h1>
         <i className=" pf bi bi-person-circle "></i>
        <h6 className="txt">Your note</h6>
        <i className=" arrow bi bi-send rounded-circle"></i>
        <i className=" note bi bi-pencil-square">Note...</i>
       
        <h6 className=" ms d-flex justify-content-center ms-10">Send a message to start a chat.</h6>
        <button className=" btn3 btn-primary ">Send message</button>
      </div>
    </div>
  );
}



 export const Notification = () => {
  return (
    <div>
       <div className="w-20"><Sidebar/></div>
      <div className="d-flex justify-content-center">
        <h1 className="reels  d-flex justify-content-center m-5 pt-5">No messages <i className="bi bi-send-plus"></i></h1>
        
      </div>
    </div>
  );
}


 export const Create = () => {
  return (
    <div>
      <div className="w-20"><Sidebar/></div>
      <div className="d-flex justify-content-center">
        <h1 className="reels  d-flex justify-content-center m-5">Create</h1>
      </div>
    </div>
  );
}



 export const More = () => {
  return (
    <div>
       <div className="w-20"><Sidebar/></div>
       <div >
      
        <h1 className="reels  d-flex justify-content-center m-5"><i className="bi bi-list"></i>More</h1>
        <div><i className="bi-1 bi-gear-wide m-3"></i>Settings</div>
        <div><i className="bi-1 bi-activity m-3"></i>Your activity</div>
        <div><i className="bi-1 bi-bookmark m-3"></i>Saved</div>
        <div><i className="bi-1 bi-chat-left-quote m-3 "></i>Report a problem</div>
      </div>
    </div>
  );
}





