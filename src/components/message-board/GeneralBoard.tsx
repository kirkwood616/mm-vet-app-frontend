import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import CreatePostForm from "./CreatePostForm";
import "./GeneralBoard.css";

function GeneralBoard() {
  let { generalMessageBoard } = useContext(UserContext);
  let { user } = useContext(UserContext);
  const [isCreateActive, setIsCreateActive] = useState(false);

  return (
    <div className="GeneralBoard">
      <h1>General Discussion Board</h1>
      <button
        className="addCreatePostContainer"
        onClick={() => setIsCreateActive(!isCreateActive)}
      >
        {isCreateActive ? "CANCEL POST" : "+ Create Post"}
      </button>
      <div className="generalPostsContainer">
        <div
          className={isCreateActive ? "createPostFormContainer" : "doNotShow"}
        >
          <CreatePostForm createActive={isCreateActive} />
        </div>
        <h2>CONTENT</h2>
        {generalMessageBoard.map((post, index) => (
          <div className="generalPost" key={index}>
            <p>{post.title}</p>
            <p>
              by {post.user} on {post.dateTime}
            </p>
            <p>{post.message}</p>
            <p>{post.replies.length} Replies</p>
            <p>
              {post.user === `${user.firstName} ${user.lastName}`
                ? "DELETE POST"
                : ""}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GeneralBoard;
