import "h8k-components";
import { useState } from "react";
import Articles from "./components/Articles";

import "./App.css";

function App({ articles }) {
  const title = "Sorting Articles";
  const [sortOrder, setSortOrder] = useState(0);
  let sortedArticles = () => {
    if (sortOrder === 0) {
      return articles.sort((a, b) =>
        a.upvotes < b.upvotes ? 1 : a.upvotes > b.upvotes ? -1 : 0
      );
    } else {
      return articles.sort((a, b) =>
        new Date(a.date) < new Date(b.date)
          ? 1
          : new Date(a.date) > new Date(b.date)
          ? -1
          : 0
      );
    }
  };

  articles = sortedArticles();

  return (
    <>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="App">
        <div className="layout-row align-items-center justify-content-center my-20 navigation">
          <label className="form-hint mb-0 text-uppercase font-weight-light">
            Sort By
          </label>
          <button
            data-testid="most-upvoted-link"
            className="small"
            onClick={() => setSortOrder(0)}
          >
            Most Upvoted
          </button>
          <button
            data-testid="most-recent-link"
            className="small"
            onClick={() => setSortOrder(1)}
          >
            Most Recent
          </button>
        </div>
        <Articles articles={articles} />
      </div>
    </>
  );
}

export default App;
