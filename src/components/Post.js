import "../styles/Post.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function Post() {
  return (
    <div className="wrapper">
      {/* <div className="container">
        <h1>Book Title</h1>
        <h2>Book image</h2>
        <p>Book description</p>
        <button className="readButton">Read full review</button>
        <div className="buttons">
          <button className="deleteButton">
            <FontAwesomeIcon icon={faTrash} className="icon" />
          </button>
          <button>
            {" "}
            <FontAwesomeIcon icon={faEdit} className="icon" />
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Book Title</h1>
        <h2>Book image</h2>
        <p>Book description</p>
        <button className="readButton">Read full review</button>
        <div>
          <button>
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button>Edit</button>
        </div>
      </div> */}
    </div>
  );
}

export default Post;
