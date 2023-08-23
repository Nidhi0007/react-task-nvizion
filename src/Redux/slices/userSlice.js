import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: [],
  },
  reducers: {
    addUser: (state, action) => {
      let newUser = {
        id: Math.random(),
        name: action.payload.name,
        email: action.payload.email,
        username: action.payload.username,
        mobile: action.payload.mobile,
        roleKey: action.payload.roleKey,
        password: action.payload.password,
      };
      state.userData.push(newUser);
    },

    editUser: (state, action) => {
      let { userData } = state;
      state.userData = userData.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    deleteUser: (state, action) => {
      let { userData } = state;
      state.userData = userData.filter((item) => item.id !== action.payload.id);
    },
  },
});
// Action creators are generated for each case reducer function
export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
