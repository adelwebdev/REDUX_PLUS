import {
  ADD_POST,
  editPost,
  EDIT_POST,
  GET_POSTS,
} from "../actions/post.action";
import Post from "../components/Post";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case ADD_POST:
      return [action.payload, ...state];
    case EDIT_POST:
      return state.map((Post) => {
        if (Post.id === action.payload.id) {
          return {
            ...Post,
            content: action.content.content,
          };
        }
      });
    default:
      return state;
  }
}
