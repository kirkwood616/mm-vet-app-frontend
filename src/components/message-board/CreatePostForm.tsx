import "./CreatePostForm.css";
import { FormEvent, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import UserContext from "../../context/UserContext";

function CreatePostForm() {
  let { user } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const location = useLocation();

  console.log(location.pathname);

  function handlePostSubmit(e: FormEvent) {
    e.preventDefault();
    // new post model

    // handlePost function
    setTitle("");
    setMessage("");
  }
  return (
    <div className="CreatePostForm">
      <form method="post" className="createPostForm">
        <p>User</p>
        <input
          readOnly
          type="text"
          name="name"
          id="name"
          defaultValue={`${user.firstName} ${user.lastName}`}
        />
        <p>Title</p>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          placeholder="Message Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <p>Message</p>
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
