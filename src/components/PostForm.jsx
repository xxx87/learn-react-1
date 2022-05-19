import React, { useState, useEffect } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now()
    };
    if (post.title && post.body) {
      console.log(newPost);
      create(newPost);
      setPost({ title: "", body: "" });
    }
  };

  return (
    <form action="">
      <MyInput value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} type="text" placeholder="Post Name" />
      <MyInput value={post.body} onChange={(e) => setPost({ ...post, body: e.target.value })} type="text" placeholder="Post Description" />
      <MyButton onClick={addNewPost}>Create post</MyButton>
    </form>
  );
};

export default PostForm;
