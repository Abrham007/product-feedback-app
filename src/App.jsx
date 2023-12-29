import "./App.css";
import data from "../data.json";
import { useState } from "react";
import Suggestions from "./components/Suggestions";
import FeedBackDetail from "./components/FeedbackDetail";
import CreateEditFeedBack from "./components/CreateEditFeedBack";
import RoadMap from "./components/RoadMap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [appData, setAppData] = useState(data);

  function handleAppData(cb) {
    console.log("reached");
    setAppData(cb);
    console.log(appData);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Suggestions />}></Route>
          <Route
            path="/feedbackdetail/:id"
            element={
              <FeedBackDetail appData={appData} handleAppData={handleAppData} />
            }
          />
          <Route
            path="/add"
            element={<CreateEditFeedBack handleAppData={handleAppData} />}
          ></Route>
          <Route
            path="/edit/:id"
            element={
              <CreateEditFeedBack
                appData={appData}
                handleAppData={handleAppData}
              />
            }
          ></Route>
          <Route
            path="/roadmap"
            element={
              <RoadMap appData={appData} handleAppData={handleAppData} />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
