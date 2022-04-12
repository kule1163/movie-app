import { ActionTypes } from '@mui/base';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from "react"

export const moviesFetch = createAsyncThunk(
  'movies/moviesFetch',
  async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=31af07621087a710376eeeff33ef9885&language=en-US&page=1");
    const response = await data.json()
    const {results} = response

    console.log("aaaaaa",results);
    
    return results
  }
);

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieList {
  movieList: Movie[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  searchValue: string | undefined
  toggleSearchBar: boolean
  changeCount: number
  searchBarRef: any
  panelLoading: boolean;
  populerSerie: boolean;
  populerMovie: boolean;
}

const initialState:MovieList = {
  movieList: [],
  loading: "idle",
  searchValue: "",
  toggleSearchBar: false,
  changeCount: 0,
  searchBarRef: null,
  panelLoading: true,
  populerMovie: true,
  populerSerie: true
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearchValue: (state, action:PayloadAction<string | undefined>) => {
      state.searchValue = action.payload
    },
    setToggleSearchBar: (state, action:PayloadAction<boolean>) => {
      state.toggleSearchBar = action.payload
    },
    setChangeCount: (state, action:PayloadAction<number>) => {
      state.changeCount = action.payload
    },
    setSearchBarRef: (state, action) => {
      state.searchBarRef = action.payload
    },
    setPanelLoading: (state, action) => {
      state.panelLoading = action.payload
    },
    setPopulerMovieLoading: (state, action) => {
      state.panelLoading = action.payload
    },
    setPopulerSerieLoading: (state, action) => {
      state.panelLoading = action.payload
    }
  },
  extraReducers: (builder) => {
      builder
        .addCase(moviesFetch.fulfilled, (state, action:PayloadAction<Movie[]>) => {
          state.movieList = action.payload.map(item => ({...item}))
        })
  },
});

export const {setSearchValue, setToggleSearchBar, setChangeCount, setSearchBarRef, setPanelLoading, setPopulerMovieLoading, setPopulerSerieLoading } = moviesSlice.actions;

export default moviesSlice.reducer;
