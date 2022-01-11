import axios from "axios";

const getPostAction = () => {
  return (dispatch, getState) => {
    dispatch({ type: "posts/get-pending" });
    //API call
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        dispatch({
          type: "posts/get-posts",
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: "posts/get-failed",
          payload: err,
        });
      });
  };
};

export default getPostAction;
