import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import getPostAction from "../redux/actions/getPostsAction";
import "./List.css";

const List = () => {
  const { posts, isLoading, error } = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostAction());
  }, [dispatch]);

  return (
    <div className="list">
      <div>
        {isLoading && !error ? (
          <h2>Loading....</h2>
        ) : (
          <ul>
            {posts.slice(95).map((post) => {
              return (
                <li key={Math.random() * 10000}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default List;
