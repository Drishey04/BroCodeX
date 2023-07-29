import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
};


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.username = action.payload.username;
    },
    setLogout: (state) => {
      state.username = null;
    },
  },
});

export const { setLogin, setLogout} =
  authSlice.actions;
export default authSlice.reducer;
