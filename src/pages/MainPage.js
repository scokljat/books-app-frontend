import Post from "../components/Post";
import "../styles/MainPage.scss";

function MainPage() {
  return (
    <div className="mainPage">
      <h2>Reading and discovering new books</h2>
      <Post />
    </div>
  );
}

export default MainPage;
