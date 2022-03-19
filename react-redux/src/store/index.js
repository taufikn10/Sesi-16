import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const initialState = {
  counter: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      let subtractor = action.payload ? action.payload : 1;
      return {
        counter: state.counter + subtractor,
      };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

// const store = createStore(counter);
const store = createStore(applyMiddleware(thunk, logger));
export default store;
