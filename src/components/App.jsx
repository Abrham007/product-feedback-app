import "./App.css";
import CompanyName from "./CompanyName";
import TagList from "./TagList";
import RoadMapView from "./RoadMapView";
import SuggestionsTab from "./SuggestionsTab";
import FeedBackList from "./FeedBackList";
import data from "../../data.json";
import { useState } from "react";

function App() {
  const [appData, setAppData] = useState(data);
  const [suggestionList, setSuggestionList] = useState(
    appData.productRequests.filter((req) => req.status === "suggestion")
  );

  function handleSuggestions(category) {
    if (category === "all") {
      setSuggestionList(
        appData.productRequests.filter((req) => req.status === "suggestion")
      );
    } else {
      setSuggestionList(
        appData.productRequests.filter(
          (req) => req.status === "suggestion" && req.category === category
        )
      );
    }
  }

  return (
    <div className="App">
      <div className="App__board">
        <CompanyName />
        <TagList handleClick={handleSuggestions} />
        <RoadMapView appData={appData} />
      </div>
      <div className="App__content">
        <SuggestionsTab numOfSuggestions={suggestionList.length} />
        <FeedBackList listOfFeedback={suggestionList} />
      </div>
    </div>
  );
}

//   <!-- Frontend Mentor
//   Feedback Board -->

//   <!-- Sidebar -->
//   <!-- All
// UI
// UX
// Enhancement
// Bug
// Feature

// Roadmap
// View -->

//   Planned
//   <!-- Add number here -->
//   In-Progress
//   <!-- Add number here -->
//   Live
//   <!-- Add number here -->

//   <!-- Sidebar end -->

//   <!-- Add number of suggestions here -->
//   Suggestions
//   <!-- Sort by:
// Most upvotes
// Least upvotes
// Most comments
// Least comments

// Add Feedback -->

//   <!-- No feedback -->
//   <!-- There is no feedback yet. Got a suggestion? Found a bug that needs to be squashed? We love
// hearing about new ideas to improve our app. -->

//   <!-- Add Feedback -->
//   <!-- No feedback end -->

export default App;
