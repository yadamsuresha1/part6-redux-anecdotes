import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addNotification(state = initialState, action) {
      return action.payload;
    },
    removeNotification() {
      return "";
    },
  },
});

export const setNotification = (content) => {
  return async (dispatch) => {
    dispatch(addNotification(content));
    setTimeout(() => {
      dispatch(removeNotification());
    }, 5000);
  };
};

export const { addNotification, removeNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
