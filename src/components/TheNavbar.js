import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { openModal } from "../features/modal/modalSlice";
import "../styles/TheNavbar.scss";

function TheNavbar() {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    values.preventDefault();
    console.log(values.currentTarget.elements.searchInput.value);
  };

  return (
    <div className="navbar">
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <input
            type="text"
            className="input"
            placeholder="Search book..."
            id="searchInput"
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>
      <div>
        <NavLink to="/">Home</NavLink>
        <button
          className="icon"
          onClick={() => {
            dispatch(openModal(true));
          }}
        >
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
    </div>
  );
}

export default TheNavbar;
