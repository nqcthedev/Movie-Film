import { InitStateAuth } from "@/interface/Auth";
import { LocalStorageService } from "@/utils/local-storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState: InitStateAuth = {
  user: {},
  isAuthenticated: false,
  sessionId: "",
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
      state.isAuthenticated = true;
      state.sessionId = LocalStorageService.get('session_id');

      LocalStorageService.set('accountId', payload.id)
    },
  },
});


export const {setUser}  = authSlice.actions;

export default authSlice.reducer
