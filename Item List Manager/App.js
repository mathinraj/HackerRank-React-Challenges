import { useState, useEffect } from "react";
import "h8k-components";

import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleAddItem = () => {
    if (input) {
      setItems([...items, {name : input}]);
    }
    setInput("");
  };

  return (
    <>
      <h8k-navbar header="Item List Manager"></h8k-navbar>
      <div className="App">
        <h3>Item List</h3>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter item"
          data-testid="input-field"
        />
        <button onClick={handleAddItem} data-testid="add-button">
          Add Item
        </button>
        <ul data-testid="item-list">
          {items.length > 0 &&
            items.map((item, index) => (
              <li key={index} data-testid="list-item">
                {item.name}
              </li>
            ))
          }
        </ul>

      </div>
    </>
  );
}

export default App;
