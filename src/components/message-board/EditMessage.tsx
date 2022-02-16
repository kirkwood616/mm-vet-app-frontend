// import "./EditMessage.css";
import { FormEvent, useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import MessageBoardPost from "../../models/MessageBoardPost";
import {
  fetchGeneralPosts,
  updateMessageFromBoard,
} from "../../services/VetApiService";
import { useParams } from "react-router-dom";
import { getDateTime } from "../../functions/functions";
import { useNavigate } from "react-router-dom";

function EditMessage() {
  let { user } = useContext(UserContext);
  let { generalMessageBoard } = useContext(UserContext);
  let { handleUpdateMessage } = useContext(UserContext);

  let postId = useParams();
  let postToEdit = generalMessageBoard.find((post) => post._id === postId.id);

  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  function handleEditSubmit(e: FormEvent): void {
    e.preventDefault();
    if (postToEdit) {
      let newPostEdit: MessageBoardPost = {
        dateTime: postToEdit.dateTime,
        board: postToEdit.board,
        user: postToEdit.user,
        title: postToEdit.title,
        message: `${message} *Edited on ${String(getDateTime())}*`,
        replies: postToEdit.replies,
      };
      updateMessageFromBoard(postId.id!, newPostEdit);

      setTimeout(function () {
        fetchGeneralPosts();
      }, 1000);
      setTimeout(function () {
        handleUpdateMessage(postId.id!, newPostEdit);
        navigate("/message-board/general");
      }, 1500);
    }
  }
  return (
    <div className="EditMessage">
      <h1>EDIT</h1>
      <form method="post" onSubmit={handleEditSubmit}>
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
          readOnly
          type="text"
          name="title"
          id="title"
          defaultValue={postToEdit?.title}
          placeholder="Message Title"
        />
        <label htmlFor="message">
          <p>Message</p>
        </label>
        <textarea
          name="message"
          id="message"
          defaultValue={postToEdit?.message}
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditMessage;
