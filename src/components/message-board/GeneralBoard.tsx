import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import { fetchGeneralPosts } from "../../services/VetApiService";
import CreatePostForm from "./CreatePostForm";
import "./GeneralBoard.css";
import { useNavigate } from "react-router-dom";

function GeneralBoard() {
  let { generalMessageBoard } = useContext(UserContext);
  let { handleDeleteGeneralMessage } = useContext(UserContext);
  let { user } = useContext(UserContext);
  const [isCreateActive, setIsCreateActive] = useState(false);
  const navigate = useNavigate();

  function handleDeleteMessage(id: string): void {
    handleDeleteGeneralMessage(id);
    fetchGeneralPosts();
  }

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

            {post.user === `${user.firstName} ${user.lastName}` ? (
              <div className="editDelete">
                <button onClick={() => handleDeleteMessage(String(post._id))}>
                  DELETE POST
                </button>
                <button
                  onClick={() => navigate(`/message-board/edit/${post._id}`)}
                >
                  EDIT POST
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GeneralBoard;
