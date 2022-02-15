import "./CreatePostForm.css";
import { FormEvent, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import UserContext from "../../context/UserContext";
import MessageBoardPost from "../../models/MessageBoardPost";
import { getDateTime } from "../../functions/functions";
import { postMessageToBoard } from "../../services/VetApiService";

interface Props {
  createActive: boolean;
}

function CreatePostForm({ createActive }: Props) {
  let { user } = useContext(UserContext);
  let { handleGeneralMessageBoard } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  let currentBoard = location.pathname.slice(15);

  function handlePostSubmit(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    let newPost: MessageBoardPost = {
      dateTime: String(getDateTime()),
      board: String(currentBoard),
      user: String(user.firstName) + " " + String(user.lastName),
      title: String(title),
      message: String(message),
      replies: [],
    };
    postMessageToBoard(newPost);
    setTitle("");
    setMessage("");
    setTimeout(function () {
      handleGeneralMessageBoard();
      setIsLoading(false);
    }, 1500);
  }
  return (
    <div className="CreatePostForm">
      <div className={isLoading ? "loadingScreen" : "hiddenLoadScreen"}>
        <div className={isLoading ? "lds-hourglass" : "hiddenLoadScreen"}></div>
      </div>
      <form method="post" onSubmit={handlePostSubmit}>
        <label htmlFor="name">
          <p>User</p>
        </label>
        <input
          readOnly
          type="text"
          name="name"
          id="name"
          defaultValue={`${user.firstName} ${user.lastName}`}
        />
        <label htmlFor="title">
          <p>Title</p>
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
          <p>Message</p>
        </label>
        <textarea
          name="message"
          id="message"
          value={message}
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default CreatePostForm;
