import { createSlice, Dispatch } from '@reduxjs/toolkit';

const initialState: any = {
  isLoading:false
}
const slice = createSlice({
  name:"movie",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    getMoive(state, {payload}) {
      state.isLoading = payload;
    }
  }
})

//Reducer
export default slice.reducer;


//Actions 
export const {
  getMoive
} = slice.actions