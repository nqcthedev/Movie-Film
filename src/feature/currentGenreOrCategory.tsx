import { GenreState } from "@/types/Genre";
import { createSlice } from "@reduxjs/toolkit";


const initialState: GenreState = {
  genreIdOrCategory:'',
  page:1,
  searchQuery:''
}

export const genreOrCategory = createSlice({
  name:'genreOrCategory',
  initialState,
  reducers:{
    selectGenreOrCategory: (state, {payload}) => {
      state.genreIdOrCategory = payload;
      state.searchQuery = '';
    },
    searchMovie:(state, {payload}) => {
      state.searchQuery = payload;
    }
  }
})

export const {selectGenreOrCategory, searchMovie} = genreOrCategory.actions

export default genreOrCategory.reducer;