import "./MessageBoardHome.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

function MessageBoardHome() {
  // let { user } = useContext(UserContext);
  let { handleGeneralMessageBoard } = useContext(UserContext);
  return (
    <div className="MessageBoardHome">
      <h1>Message Board</h1>
      <div className="messageBoardCategories">
        <div className="categoriesContainer">
          <div className="divider">
            <Link
              to={"/message-board/general"}
              onClick={handleGeneralMessageBoard}
            >
              <div className="category">
                <h2>General Discussion</h2>
                <p className="boardDescription">
                  Any topics... related or not related to animals.
                </p>
              </div>
            </Link>
          </div>
          <div className="divider">
            <Link to={"/message-board/under-construction"}>
              <div className="category">
                <h2>Medical</h2>
                <p className="boardDescription">
                  Topics related to medical questions/experience.
                </p>
              </div>
            </Link>
          </div>
          <div className="divider">
            <Link to={"/message-board/under-construction"}>
              <div className="category">
                <h2>Cats</h2>
                <p className="boardDescription">All things cats.</p>
              </div>
            </Link>
          </div>
          <div className="divider">
            <Link to={"/message-board/under-construction"}>
              <div className="category">
                <h2>Dogs</h2>
                <p className="boardDescription">All things dogs.</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to={"/message-board/under-construction"}>
              <div className="category">
                <h2>Lost Pets</h2>
                <p className="boardDescription">
                  Lost your pet? Post missing and/or found information here.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageBoardHome;
