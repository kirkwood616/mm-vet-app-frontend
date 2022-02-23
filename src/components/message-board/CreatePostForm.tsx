import "./CreatePostForm.css";
import { FormEvent, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import UserContext from "../../context/UserContext";
import MessageBoardPost from "../../models/MessageBoardPost";
import { getFormattedDateAndTime } from "../../functions/functions";
import { postMessageToBoard } from "../../services/VetApiService";
import cleanData from "../../functions/sanitize";

function CreatePostForm() {
  let { user } = useContext(UserContext);
  let { handleGeneralMessageBoard } = useContext(UserContext);
  const location = useLocation();

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCreateActive, setIsCreateActive] = useState(false);

  let currentBoard = location.pathname.slice(15);

  function handlePostSubmit(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    let newPost: MessageBoardPost = {
      dateTime: String(getFormattedDateAndTime(new Date())),
      board: String(currentBoard),
      user: String(user.firstName) + " " + String(user.lastName),
      title: cleanData(String(title)),
      message: cleanData(String(message)),
      replies: [],
    };
    postMessageToBoard(newPost);
    setTitle("");
    setMessage("");
    setTimeout(function () {
      handleGeneralMessageBoard();
      setIsLoading(false);
      setIsCreateActive(false);
    }, 1000);
  }

  function handleCreateCancelClick() {
    if (!isCreateActive) {
      setTitle("");
      setMessage("");
      setIsCreateActive(!isCreateActive);
    } else {
      setIsCreateActive(!isCreateActive);
    }
  }
  return (
    <div className="CreatePostForm">
      <button
        className={
          isCreateActive
            ? "addCreatePostButton cancelPostButton"
            : "addCreatePostButton"
        }
        onClick={() => handleCreateCancelClick()}
      >
        {isCreateActive ? "CANCEL POST" : "CREATE POST"}
      </button>

      <div className={isLoading ? "loadingScreen" : "hiddenLoadScreen"}>
        <div className={isLoading ? "lds-hourglass" : "hiddenLoadScreen"}></div>
      </div>

      <div className={isCreateActive ? "createPostFormContainer" : "doNotShow"}>
        <form method="post" onSubmit={handlePostSubmit}>
          <label htmlFor="name">
            <p className="inputTitle">User</p>
          </label>
          <input
            readOnly
            type="text"
            name="name"
            id="name"
            defaultValue={`${user.firstName} ${user.lastName}`}
          />
          <label htmlFor="title">
            <p className="inputTitle">Title</p>
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            placeholder="Message Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="message">
            <p className="inputTitle">Message</p>
          </label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className="addPostButton">
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePostForm;
