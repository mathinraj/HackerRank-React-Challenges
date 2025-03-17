import React, { useState } from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

function Home() {
  const [inputTitle, setTitle] = useState();
  const [inputDesc, setDesc] = useState();
  const [posts, setPosts] = useState([]);

  const handleCreatePost = () => {
    if (inputTitle !== "" && inputDesc !== "") {
      setPosts([...posts, {title: inputTitle, description:inputDesc}]);
    }

    setTitle("");
    setDesc("");

    // console.log(posts);
  }


  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input inputTitle={inputTitle} setTitle={setTitle} inputDesc={inputDesc} setDesc={setDesc} />
        <button data-testid="create-button" className="mt-10" onClick={handleCreatePost}>
          Create Post
        </button>
      </div>
      <div className="posts-section">
        <PostDisplay posts={posts} setPosts={setPosts} />
      </div>
    </div>
  );
}

export default Home;
