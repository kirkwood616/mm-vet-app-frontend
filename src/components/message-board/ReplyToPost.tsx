// import "./ReplyToPost.css";
import { FormEvent, useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import { useParams, useNavigate } from "react-router-dom";
import MessageBoardPost from "../../models/MessageBoardPost";
import { getFormattedDateAndTime } from "../../functions/functions";
import {
  fetchGeneralPosts,
  updateMessageFromBoard,
} from "../../services/VetApiService";

function ReplyToPost() {
  let { user } = useContext(UserContext);
  let { generalMessageBoard } = useContext(UserContext);
  // let { handleGeneralMessageBoard } = useContext(UserContext);
  let { handleUpdateMessage } = useContext(UserContext);
  let postId = useParams();
  let replyToMessage = generalMessageBoard.find(
    (post) => post._id === postId.id
  );

  const [replyTitle, setReplyTitle] = useState("");
  const [replyMessage, setReplyMessage] = useState("");

  const navigate = useNavigate();

  function handleReplySubmit(e: FormEvent): void {
    e.preventDefault();
    if (replyToMessage) {
      let newPostReply: MessageBoardPost = {
        dateTime: String(getFormattedDateAndTime(new Date())),
        board: String(replyToMessage.board),
        user: String(user.firstName) + " " + String(user.lastName),
        title: String(replyTitle),
        message: String(replyMessage),
        replies: [],
      };
      let postEdit: MessageBoardPost = {
        dateTime: String(replyToMessage.dateTime),
        board: String(replyToMessage.board),
        user: String(replyToMessage.user),
        title: String(replyToMessage.message),
        message: String(replyToMessage.message),
        replies: [...replyToMessage.replies, newPostReply],
      };
      updateMessageFromBoard(replyToMessage._id!, postEdit);
      setTimeout(function () {
        fetchGeneralPosts();
      }, 1000);
      setTimeout(function () {
        console.log(postId.id);
        handleUpdateMessage(postId.id!, postEdit);
        navigate(`/message-board/${replyToMessage?.board}`);
      }, 2000);
    }
  }

  return (
    <div className="ReplyToPost">
      <h1>hello</h1>
      <div className="originalPost">
        <p>{replyToMessage?.title}</p>
        <p>
          by {replyToMessage?.user} on {replyToMessage?.dateTime}
        </p>
        <p>{replyToMessage?.message}</p>
      </div>
      <form method="post" onSubmit={handleReplySubmit}>
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
          name="replyTitle"
          id="replyTitle"
          value={replyTitle}
          placeholder="Message Title"
          onChange={(e) => setReplyTitle(e.target.value)}
        />
        <label htmlFor="message">
          <p className="inputTitle">Message</p>
        </label>
        <textarea
          name="replyMessage"
          id="replyMessage"
          value={replyMessage}
          onChange={(e) => setReplyMessage(e.target.value)}
        />
        <button type="submit" className="addPostButton">
          Add Post
        </button>
      </form>
    </div>
  );
}

export default ReplyToPost;
