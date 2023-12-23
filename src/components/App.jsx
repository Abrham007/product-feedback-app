import "./App.css";
import data from "../../data.json";
import { useEffect, useState } from "react";
import Suggestions from "./Suggestions";
import FeedBackDetail from "./FeedbackDetail";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function App() {
  const [appData, setAppData] = useState(data);

  function handleAppData(cb) {
    setAppData(cb);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suggestions appData={appData} handleAppData={handleAppData} />
            }
          ></Route>
          <Route
            path="/feedbackdetail/:id"
            element={<FeedBackDetail appData={appData} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
