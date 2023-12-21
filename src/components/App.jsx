import "./App.css";
import data from "../../data.json";
import { useEffect, useState } from "react";
import Suggestions from "./Suggestions";
import FeedBackDetail from "./FeedbackDetail";

function App() {
  const [appData, setAppData] = useState(data);

  function handleUpVotes(id) {
    setAppData((prevValue) => {
      let changedIndex = prevValue.productRequests.findIndex(
        (req) => req.id === id
      );
      prevValue.productRequests[changedIndex].upvotes++;
      console.log(prevValue);
      return prevValue;
    });
  }

  return (
    <div className="App">
      {/* <Suggestions appData={appData} handleUpVotes={handleUpVotes} /> */}

      <FeedBackDetail />
    </div>
  );
}

export default App;
