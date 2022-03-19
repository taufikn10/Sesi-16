const initialState = {
  counter: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

let store = Redux.createStore(counter);
let el = document.getElementById("counter");
const render = () => {
  el.innerHTML = store.getState().counter.toString();
};
render();
store.subscribe(render);

let incEL = document.getElementById("increment");
let decEL = document.getElementById("decrement");

incEL.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});

decEL.addEventListener("click", () => {
  store.dispatch({ type: "DECREMENT" });
});
