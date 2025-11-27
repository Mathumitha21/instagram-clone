import React, { useEffect, useState } from "react";
// import postsData from "./src/db/db.json";

function Post(){


    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch( "http://localhost:3000/posts").
        then((data)=>data.json()).
        then((data=>setPosts(data))).
        catch(err=>console.error(err))
    },[])


    return(
        <div className="d-flex justify-content-center">
            {posts.length > 0 ? (
                <div >
                    {posts.map((post)=>(
                      <div  key={post.id}className="my-5">
                       <div className="d-flex">
                        <img className=" db rounded-circle" src={post.user.profile_pic} alt="Profile pic" />
                        <h5>{post.user.username}</h5>
                       </div>
                       <img className="image" src={post.image} alt="post" />
                       <div>
                        <i className="bi bi-heart"></i>
                        <i className="bi bi-chat"></i>
                        <i className="bi bi-send"></i>
                       </div>
                       <div>
                        <b>{post.likes} Likes</b>
                       </div>
                       <p>{post.caption}</p>

                      </div>
                    ))}
                </div>
            ):(<div>
                loading post...
            </div>
        )}
        </div>
    )
}

export default Post; 