import { useState } from "react";

import "./App.css";
import Form from "./compents/Form";
import List from "./compents/List";

function App() {
  const [posts, setPosts] = useState([]);

  const addNewPost = (data) => {
    setPosts((prevState) => {
      return [...prevState, data];
    });
  };

  return (
    <div className="App">
      <Form onNewPost={addNewPost} />
      <List />
    </div>
  );
}

export default App;
