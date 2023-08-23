import { createSlice } from "@reduxjs/toolkit";
export const roleSlice = createSlice({
  name: "role",
  initialState: {
    roleData: [
      { id: Math.random(), roleLabel: "Admin", roleKey: "admin" },
      { id: Math.random(), roleLabel: "Manager", roleKey: "manager" },
    ],
  },
  reducers: {
    addRole: (state, action) => {
      let newRole = {
        id: Math.random(),
        roleLabel: action.payload.roleLabel,
        roleKey: action.payload.roleKey,
      };
      state.roleData.push(newRole);
    },

    editRole: (state, action) => {
      let { roleData } = state;
      state.roleData = roleData.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    deleteRole: (state, action) => {
      let { roleData } = state;
      state.roleData = roleData.filter((item) => item.id !== action.payload.id);
    },
  },
});
// Action creators are generated for each case reducer function
export const { addRole, editRole, deleteRole } = roleSlice.actions;
export default roleSlice.reducer;
