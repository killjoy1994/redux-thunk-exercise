import axios from "axios";

const newPostAction = (data) => {
  return (dispatch, getState) => {
    dispatch({ type: "posts/post-pending" });
    //API call
    const postRequest = {
      method: "post",
      url: "https://jsonplaceholder.typicode.com/posts",
      data: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    };

    axios(postRequest)
      .then((res) => {
        dispatch({ type: "posts/post-success", payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: "posts/post-failed",
          payload: err,
        });
      });
  };
};

export default newPostAction;
