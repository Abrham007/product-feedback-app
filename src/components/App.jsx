import "./App.css";
import CompanyName from "./CompanyName";
import TagList from "./TagList";
import RoadMapView from "./RoadMapView";
import SuggestionsTab from "./SuggestionsTab";
import FeedBackList from "./FeedBackList";

function App() {
  return (
    <div className="App">
      <div className="App__board">
        <CompanyName />
        <TagList />
        <RoadMapView />
      </div>
      <div className="App__content">
        <SuggestionsTab />
        <FeedBackList />
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
