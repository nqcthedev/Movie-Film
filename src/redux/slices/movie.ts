import { createSlice } from "@reduxjs/toolkit";
import { uniqBy } from "lodash";

const initialState: any = {
  isLoading: false,
  favourite: [],
};
const slice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },

   // Get Movie
   getMovie(state, action) {
    const movie = action.payload;
    state.favourite = movie
   },
    addToFavourite(state, action) {
      const newFavourite = action.payload;
      const isEmptyCart = !state.favourite.lenght;

      if(isEmptyCart) {
        state.favourite = [...state.favourite, newFavourite]
      } else {
        state.favourite.cart = state.favourite.map((movie: any) => {
          const isExisted = movie.id === newFavourite.id;

          if (isExisted) {
            return {
              ...movie,
              
            };
          }

          return movie;
        });
      }
      state.favourite = uniqBy([...state.favourite, newFavourite], "id")
    },

    deleteMovie(state, action) {
      const updateFavourite = state.favourite.filter((movie: any) => movie.id !== action.payload);

      state.favourite = updateFavourite;
    },
  },
});

//Reducer
export default slice.reducer;

//Actions
export const {addToFavourite, getMovie, deleteMovie} = slice.actions;
