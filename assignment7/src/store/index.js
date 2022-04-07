import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  task: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { task: action.data };
    default:
      return state;
  }
};

const store = createStore(taskReducer, applyMiddleware(thunk));

export default store;
