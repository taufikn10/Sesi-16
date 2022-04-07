export const fetchData = () => {
  return async (dispatch) => {
    const res = await fetch("./task.json");
    const data = await res.json();
    dispatch({
      type: "SET_DATA",
      data: data,
    });
  };
};
