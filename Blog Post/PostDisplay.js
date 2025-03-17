import React, { useEffect } from "react";

function PostDisplay({ posts, setPosts }) {

  useEffect(() => {

  }, [posts])

  const handleDelete = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  return (
        <div data-testid="posts-container" className="flex wrap gap-10">
          {
            posts.map((post, index) =>
              <div className="post-box" key={index}>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            )
          }
        </div>
  );
}

export default PostDisplay;
