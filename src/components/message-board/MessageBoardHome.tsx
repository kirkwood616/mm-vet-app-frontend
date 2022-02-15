import "./MessageBoardHome.css";
import { Link } from "react-router-dom";

function MessageBoardHome() {
  return (
    <div className="MessageBoardHome">
      <h1>Hello Clarice</h1>
      <div className="messageBoardCategories">
        <div className="categoriesContainer">
          <div className="divider">
            <Link to={"/message-board/general"}>
              <div className="category">
                <h2>General Discussion</h2>
                <p>Any topics... related or not related to animals.</p>
              </div>
            </Link>
          </div>
          <div className="divider">
            <Link to={"/message-board/medical"}>
              <div className="category">
                <h2>Medical</h2>
                <p>Topics related to medical questions/experience.</p>
              </div>
            </Link>
          </div>
          <div className="divider">
            <Link to={"/message-board/cats"}>
              <div className="category">
                <h2>Cats</h2>
                <p>All things cats.</p>
              </div>
            </Link>
          </div>
          <div className="divider">
            <Link to={"/message-board/dogs"}>
              <div className="category">
                <h2>Dogs</h2>
                <p>All things dogs.</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to={"/message-board/lost-pets"}>
              <div className="category">
                <h2>Lost Pets</h2>
                <p>
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
