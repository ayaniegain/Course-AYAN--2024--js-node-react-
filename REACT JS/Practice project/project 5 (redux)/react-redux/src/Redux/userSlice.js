import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

let initialState = {
  user: [],
  status: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "allusers",
  initialState,
  
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = "loading";
    })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.user = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      
    });
  },
});

export default userSlice.reducer;
