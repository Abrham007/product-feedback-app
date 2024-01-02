import "./App.css";
import Suggestions from "./components/Suggestions";
import FeedBackDetail from "./components/FeedbackDetail";
import CreateEditFeedBack from "./components/CreateEditFeedBack";
import RoadMap from "./components/RoadMap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSuggestionList,
  fetchPosts,
} from "./features/productRequests/productRequestsSlice";
import { fetchUser } from "./features/currentUser/currentUserSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  const postStatus = useSelector((state) => state.productRequests.status);
  const userStatus = useSelector((state) => state.currentUser.status);

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
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Suggestions />}></Route>
          <Route path="feedbackdetail/:id" element={<FeedBackDetail />} />
          <Route path="add" element={<CreateEditFeedBack />}></Route>
          <Route
            path="edit/:id"
            element={<CreateEditFeedBack isEdit={true} />}
          ></Route>
          <Route path="roadmap" element={<RoadMap />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
