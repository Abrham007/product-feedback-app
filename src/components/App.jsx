import "./App.css";
import data from "../../data.json";
import { useEffect, useState } from "react";
import Suggestions from "./Suggestions";
import FeedBackDetail from "./FeedbackDetail";

function App() {
  const [appData, setAppData] = useState(data);
  const SUGGESTIONLIST = appData.productRequests.filter(
    (req) => req.status === "suggestion"
  );
  const [suggestionList, setSuggestionList] = useState(SUGGESTIONLIST);

  function handleSuggestions(currentSuggestions) {
    setSuggestionList(currentSuggestions);
  }

  return (
    <div className="App">
      <Suggestions
        SUGGESTIONLIST={SUGGESTIONLIST}
        handleSuggestions={handleSuggestions}
        suggestionList={suggestionList}
        appData={appData}
      />

      {/* <FeedBackDetail /> */}
    </div>
  );
}

export default App;
