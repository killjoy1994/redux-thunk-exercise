const initialState = {
  posts: [],
  isLoading: false,
  error: "",
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "posts/get-pending":
      return {
        ...state,
        isLoading: true,
      };
    case "posts/get-posts":
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
      };

    case "posts/get-failed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case "posts/post-pending":
      return {
        ...state,
        isLoading: true,
      };
    case "posts/post-success":
      return {
        ...state,
        posts: [...state.posts, action.payload],
        isLoading: false,
      };

    case "posts/post-failed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
