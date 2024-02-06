const initialState = "";

export const filterBy = (value) => {
  console.log("value", value);
  return {
    type: "FILTER",
    payload: {
      filter: value,
    },
  };
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER":
      return action.payload.filter;
    default:
      return state;
  }
};

export default filterReducer;
