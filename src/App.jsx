import "./App.css";
import Suggestions from "./components/Suggestions/Suggestions";
import FeedBackDetail from "./components/FeedBackDetail/FeedBackDetail";
import CreateEditFeedBack from "./components/CreateEditFeedBack/CreateEditFeedBack";
import RoadMap from "./components/RoadMap/RoadMap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./features/productRequests/productRequestsSlice";
import { fetchUser } from "./features/currentUser/currentUserSlice";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Error from "./components/Error";

function App() {
  // This is were determine errors
  const postError = useSelector((state) => state.productRequests.error);
  const userError = useSelector((state) => state.currentUser.error);

  const [hasError, setHasError] = useState(!!postError && !!userError);
  let errorMessage = postError || userError;

  const dispatch = useDispatch();
  // This is were we determine the state of the fetch
  const postStatus = useSelector((state) => state.productRequests.status);
  const userStatus = useSelector((state) => state.currentUser.status);

  // We set up a minor cursor loader for the loading stage
  let isLoading = false;
  if (postStatus === "loading") {
    isLoading = true;
  }

  // We fetch the data as soon as the component mounts
  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
    if (userStatus === "idle") {
      dispatch(fetchUser());
    }
  }, [postStatus, userStatus, dispatch]);

  // This to change the error state when an error occures
  useEffect(() => {
    setHasError(!!postError && !!userError);
    errorMessage = postError || userError;
  }, [postError, userError]);

  return (
    <div className="App" style={{ cursor: isLoading ? "progress" : "default" }}>
      <Routes>
        <Route path="/" element={<Suggestions />}></Route>
        <Route path="/feedbackdetail/:id" element={<FeedBackDetail />} />
        <Route path="/add" element={<CreateEditFeedBack />}></Route>
        <Route
          path="/edit/:id"
          element={<CreateEditFeedBack isEdit={true} />}
        ></Route>
        <Route path="/roadmap" element={<RoadMap />}></Route>
      </Routes>
      <Modal isOpen={hasError} setIsOpen={setHasError}>
        <Error message={errorMessage}></Error>
      </Modal>
    </div>
  );
}

export default App;
