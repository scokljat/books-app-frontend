import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { deletePost } from "../features/post/postSlice";
import "../styles/Post.scss";

function Post({ id, title, image, description }) {
  const dispatch = useDispatch();

  return (
    <>
      <h1>{title}</h1>
      <img src={image} height="300px" alt="bookImage" />
      <p>{description}</p>
      <button className="readButton">Read full review</button>
      <div className="buttons">
        <button
          className="deleteButton"
          onClick={() => {
            dispatch(deletePost({ id }));
          }}
        >
          <FontAwesomeIcon icon={faTrash} className="icon" />
        </button>
        <button>
          {" "}
          <FontAwesomeIcon icon={faEdit} className="icon" />
        </button>
      </div>
    </>
  );
}

export default Post;
