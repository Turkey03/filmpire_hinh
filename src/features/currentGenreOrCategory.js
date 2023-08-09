import { createSlice } from '@reduxjs/toolkit';

export const genreOrCategory = createSlice({
  name: 'genreOrCategory',
  initialState: {
    genreIdOrCategoryName: '',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    selectedGenreOrCategory: (state, action) => {
      state.genreIdOrCategoryName = action.payload;
      state.searchQuery = '';
    },
    searchMovie: (state, action) => {
      console.log('hi', action.payload);
      state.searchQuery = action.payload;
    },
  },
});
export const { selectedGenreOrCategory, searchMovie } = genreOrCategory.actions;
export default genreOrCategory.reducer;
