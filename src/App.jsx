import "./App.css";
import Suggestions from "./components/Suggestions";
import FeedBackDetail from "./components/FeedbackDetail";
import CreateEditFeedBack from "./components/CreateEditFeedBack";
import RoadMap from "./components/RoadMap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./features/productRequests/productRequestsSlice";
import { fetchUser } from "./features/currentUser/currentUserSlice";
import { useEffect } from "react";

function App() {
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
  }, [postStatus, dispatch]);

  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(fetchUser());
    }
  }, [userStatus, dispatch]);

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
    </div>
  );
}

export default App;
