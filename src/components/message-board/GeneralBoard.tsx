import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { fetchGeneralPosts } from "../../services/VetApiService";
import CreatePostForm from "./CreatePostForm";
import "./GeneralBoard.css";
import { useNavigate } from "react-router-dom";

function GeneralBoard() {
  let { generalMessageBoard } = useContext(UserContext);
  let { handleDeleteGeneralMessage } = useContext(UserContext);
  let { user } = useContext(UserContext);
  const navigate = useNavigate();

  function handleDeleteMessage(id: string): void {
    handleDeleteGeneralMessage(id);
    fetchGeneralPosts();
  }

  return (
    <div className="GeneralBoard">
      <h1>General Discussion Board</h1>
      <CreatePostForm />
      <div className="generalPostsContainer">
        {generalMessageBoard.map((post, index) => (
          <div className="generalPost" key={index}>
            <h2>{post.title}</h2>
            <p className="userDateTime">
              by {post.user} on {post.dateTime}
            </p>
            <p className="postMessage">{post.message}</p>
            {/* <p>{post.replies.length} Replies</p> */}

            {post.user === `${user.firstName} ${user.lastName}` ? (
              <div className="editDelete">
                <button
                  className="postControlButton editPostButton"
                  onClick={() => navigate(`/message-board/edit/${post._id}`)}
                >
                  EDIT POST
                </button>
                <button
                  className="postControlButton deletePostButton"
                  onClick={() => handleDeleteMessage(String(post._id))}
                >
                  DELETE POST
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
