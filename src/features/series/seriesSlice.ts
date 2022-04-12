import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const seriesFetch = createAsyncThunk(
  'series/seriesFetch',
  async () => {
    const data = await fetch("https://api.themoviedb.org/3/tv/popular?api_key=31af07621087a710376eeeff33ef9885&language=en-US&page=1");
    const response = await data.json()
    const {results} = response

    console.log("aaaaaa",results);
    
    return results
  }
);

export interface Serie {
    poster_path: string | undefined;
    popularity: number;
    id: number;
    backdrop_path: string | undefined;
    vote_average: number;
    overview: string;
    first_air_date: string;
    origin_country: string[];
    genre_ids: number[];
    original_language: string;
    vote_count: number[];
    name: string;
    original_name: string;   
}

interface SerieList {
  serieList: Serie[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState:SerieList = {
  serieList: [],
  loading: "idle"
}

export const seriesSlice = createSlice({
  name: 'series',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
        .addCase(seriesFetch.fulfilled, (state, action:PayloadAction<Serie[]>) => {
          state.serieList = action.payload.map(item => ({...item}))
        })
  },
});

export const { } = seriesSlice.actions;

export default seriesSlice.reducer;