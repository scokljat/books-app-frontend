import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "../components/Post";
import { getPosts } from "../features/post/postSlice";
import "../styles/MainPage.scss";

function MainPage() {
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  console.log(posts);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div className="container">
      <h2>Reading and discovering new books</h2>
      <div className="wrapper">
        {posts.map((post) => {
          return (
            <>
              <div className="container2">
                <Post key={post.id} {...post} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
