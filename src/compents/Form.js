import React, { useState } from "react";
import { useDispatch } from "react-redux";

import newPostAction from "../redux/actions/newPostAction";

const Form = (props) => {
  const dispatch = useDispatch();

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredBody, setEnteredBody] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const bodyChangeHandler = (e) => {
    setEnteredBody(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      title: enteredTitle,
      body: enteredBody,
    };

    props.onNewPost(data);
    dispatch(newPostAction(data));
    setEnteredTitle("");
    setEnteredBody("");
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Title: </label>
      <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
      <br />
      <label>Body: </label>
      <input type="text" onChange={bodyChangeHandler} value={enteredBody} />
      <br />
      <button type="submit" value="submit">
        Add new
      </button>
    </form>
  );
};

export default Form;
