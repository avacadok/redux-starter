import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { name: "Hello there", age: 0, email: "1@1.com" };

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
    reducers: {
      login: (state, action) => {
        state.value = action.payload;
      },

      logout: (state) => {
        state.value = initialStateValue;
      }
    }

});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;