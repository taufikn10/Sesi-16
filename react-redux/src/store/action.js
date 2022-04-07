export const fetchUsers = () => {
  return async (dispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
    dispatch({
      type: "SET_USERS",
      payload: data,
    });
  };
};
