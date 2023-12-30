import "./App.css";
import Suggestions from "./components/Suggestions";
import FeedBackDetail from "./components/FeedbackDetail";
import CreateEditFeedBack from "./components/CreateEditFeedBack";
import RoadMap from "./components/RoadMap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
