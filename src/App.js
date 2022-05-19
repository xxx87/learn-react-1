import React, { useState, useRef } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";

import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import "./styles/App.css";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description JavaScript" },
    { id: 2, title: "Basic", body: "Description Basic" },
    { id: 3, title: "GoLang", body: "Description GoLang" },
    { id: 4, title: "Java", body: "Description Java" }
  ]);

  const [post, setPost] = useState({ title: "", body: "" });
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", body: "" });
  };

  return (
    <div className="App">
      <form action="">
        <MyInput value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} type="text" placeholder="Post Name" />
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Post Description"
        />
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title="POSTS LIST 1" />
    </div>
  );
}

export default App;
