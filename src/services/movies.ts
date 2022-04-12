import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Movie {
    id: number;
    original_title: string;
    title: string;
    vote_average: number;
    video: boolean;
    runtime: number;
    release_date: string;
}

interface Item {
    id: string;
    season: string;
}

export const moviesApi = createApi({
    reducerPath: "moviesApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://api.themoviedb.org/"}),
    endpoints: (builder) => ({
        getMovieById: builder.query({
            query: (id) => `3/movie/${id}?api_key=31af07621087a710376eeeff33ef9885&append_to_response=credits,videos,images,external_ids`
        }),
        getMovieExternal: builder.query({
            query: (id) =>`3/${id}/movie/550/external_ids?api_key=31af07621087a710376eeeff33ef9885`
        }),
        getSimilarMovie: builder.query({
            query: (id) =>`3/movie/${id}/similar?api_key=31af07621087a710376eeeff33ef9885&language=en-US&page=1`
        }),
        getTopRatedMovies: builder.query({
            query: (page) => `3/movie/top_rated?api_key=31af07621087a710376eeeff33ef9885&language=en-US&page=${page}`
        }),
        getUpComingMovies: builder.query({
            query: (page) => `3/movie/upcoming?api_key=31af07621087a710376eeeff33ef9885&language=en-US&page=${page}`
        }),
        getPopulerMovies: builder.query({
            query: (page) => `3/movie/popular?api_key=31af07621087a710376eeeff33ef9885&language=en-US&page=${page}`
        }),
        getNowPlayingMovies: builder.query({
            query: (page) => `3/movie/popular?api_key=31af07621087a710376eeeff33ef9885&language=en-US&page=${page}`
        }),

        //series query
        getSeriesById: builder.query({
            query: (id) => `3/tv/${id}?api_key=31af07621087a710376eeeff33ef9885&append_to_response=credits,videos,images,external_ids,episode_groups`
        }),
        getSerieSeasons: builder.query({
            query: (item:Item) => `3/tv/${item.id}/season/${item.season}?api_key=31af07621087a710376eeeff33ef9885&language=en-US`
        }),
        getSimilarSerie: builder.query({
            query: (id) => `3/tv/${id}/similar?api_key=31af07621087a710376eeeff33ef9885&language=en-US&page=1`
        }),
        getPopulerSeries: builder.query({
            query: (page) => `3/tv/popular?api_key=31af07621087a710376eeeff33ef9885&language=en-US&page=${page}`
        }),
        getTopRatedSeries: builder.query({
            query: (page) => `3/tv/top_rated?api_key=31af07621087a710376eeeff33ef9885&page=${page}`
        }),
        getTodayAiringSeries: builder.query({
            query: (page) => `3/tv/airing_today?api_key=31af07621087a710376eeeff33ef9885&language=en-US&page=${page}`
        }),
        getCurrentlyAiringSeries: builder.query({
            query: (page) => `3/tv/on_the_air?api_key=31af07621087a710376eeeff33ef9885&language=en-US&page=${page}`
        }),

        //person query
        getPersonDetail: builder.query({
            query: (id) => `3/person/${id}?api_key=31af07621087a710376eeeff33ef9885&append_to_response=movie_credits,combined_credits,external_ids,images`
        }),

        //genre query
        getGenreMovie: builder.query({
            query: (genre) => `3/discover/movie?api_key=31af07621087a710376eeeff33ef9885&language=en-US&sort_by=popularity.desc&page=1&with_genres=${genre}&with_watch_monetization_types=flatrate`
        }),

        //latest query
        getLatest: builder.query({
            query: (type) => `3/${type}/latest?api_key=31af07621087a710376eeeff33ef9885&language=en-US`
        }),

        //query search
        getSearch: builder.query({
            query: (query) => `3/search/multi?api_key=31af07621087a710376eeeff33ef9885&language=en-US&query=${query}&page=1&include_adult=false`
        }),

    })
})

export const {
    //movies query
    useGetMovieByIdQuery,
    useGetSimilarMovieQuery,
    useGetMovieExternalQuery,
    useGetTopRatedMoviesQuery, 
    useGetUpComingMoviesQuery,
    useGetPopulerMoviesQuery,
    useGetNowPlayingMoviesQuery,
    
    //series query
    useGetSeriesByIdQuery,
    useGetSerieSeasonsQuery,
    useGetSimilarSerieQuery,
    useGetPopulerSeriesQuery,
    useGetTopRatedSeriesQuery,
    useGetTodayAiringSeriesQuery,
    useGetCurrentlyAiringSeriesQuery,

    //person query
    useGetPersonDetailQuery,

    //genrequery
    useGetGenreMovieQuery,

    //latestquery
    useGetLatestQuery,

    //get Search query
    useGetSearchQuery,
} = moviesApi