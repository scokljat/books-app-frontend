import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "../styles/Modal.scss";

function Modal() {
  const dispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div className="modal">
        <div className="closeButton">
          <button
            type="button"
            onClick={() => {
              dispatch(closeModal(false));
            }}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        <h2>If you are an admin, log in</h2>
        <form>
          <input
            type="email"
            id="email"
            placeholder="Email..."
            className="inputEmail"
          />
          <button type="submit" className="formButton">
            Login
          </button>
        </form>
      </div>
    </aside>
  );
}

export default Modal;
