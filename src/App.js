import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import TheNavbar from "./components/TheNavbar";
import MainPage from "./pages/MainPage";
import BookPage from "./pages/BookPage";
import ErrorPage from "./pages/ErrorPage";
import Modal from "./components/Modal";

function App() {
  const { isOpen } = useSelector((state) => state.modal);
  console.log(isOpen);
  return (
    <div>
      <TheNavbar />
      {isOpen && <Modal />}
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
