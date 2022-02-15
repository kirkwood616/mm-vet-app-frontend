import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import CreatePostForm from "./CreatePostForm";
import "./GeneralBoard.css";

function GeneralBoard() {
  let { generalMessageBoard } = useContext(UserContext);
  let { user } = useContext(UserContext);

  console.log(generalMessageBoard);

  return (
    <div className="GeneralBoard">
      <h1>General Discussion Board</h1>
      <div className="generalPostsContainer">
        <h2>CONTENT</h2>
        {generalMessageBoard.map((post, index) => (
          <div className="generalPost" key={index}>
            <p>{post.title}</p>
            <p>
              by {post.user} on {post.dateTime}
            </p>
            <p>{post.replies.length} Replies</p>
            <p>{post.message}</p>
          </div>
        ))}
      </div>
      <div className="addCreatePostContainer">+ Create Post</div>
      <div className="createPostFormContainer">
        <CreatePostForm />
      </div>
    </div>
  );
}

export default GeneralBoard;
