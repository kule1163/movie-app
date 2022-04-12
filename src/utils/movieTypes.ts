export interface Crew {
    department: string;
    name: string;
    job: string;
    backdrop_path: string;
    vote_average: number;
    id: number;
    original_title: string;
    poster_path: string;
    character: string;
    release_date:string;
    exmp: string
    media_type:string
    original_name: string
}

export interface Cast {
    name: string;
    profile_path: string;
    id: number;
    original_title: string;
    character: string;
    credit_id: string;
    release_date:string;
    exmp: string
    media_type:string
    original_name: string
    job: string
    backdrop_path: string;
    vote_average: number;
    poster_path: string;
}

export interface ProductionCompanies {
    name: string;
    id:number;
}

export interface Genre {
    name: string;
    id: number;
}

export interface Video {
    id: string;
    key: string;
    type: string;
    name: string;
}


export interface Photo {
    file_path: string;
    id: string;
}

export interface External {
    facebook_id: string;
    twitter_id: string;
    instagram_id: string;
    imdb_id: string;
}

export interface Season {
    id: number;
    season_number: number;
}

export interface SpokenLanguage {
    english_name: string;
    name: string;
}

export interface Network {
    id: number;
    name: string;
}

export interface Episode {
    overview: string;
    air_date: string;
    still_path: string;
    name: string;
    id: number;
}

export interface Season {
    id: number;
    episodes: Episode[];
    poster_path: string;
}

export interface MovieType {
    adult: boolean;
    backdrop_path: string;
    media_type: string;
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
    revenue: number;
    status: number;
    runtime: number;
    budget: number;
    genres: Genre[];
    external_ids: External;
    production_companies: ProductionCompanies[];
    credits: {
        crew: Crew[];
        cast: Cast[];
    };
    videos: {
        results: Video[]
    };
    images: {
        backdrops: Photo[];
        posters: Photo[]
    }
}

export interface SerieType {
    adult: boolean;
backdrop_path: string;
created_by: []
media_type: string;
episode_run_time: number [];
first_air_date: string;
genres: Genre[]
homepage: string;
id: number
in_production: boolean
languages: string[]
last_air_date: string;
// last_episode_to_air: {air_date: '2021-09-03', episode_number: 8, id: 3154389, name: 'Here’s to 17!', overview: 'It’s Charli’s 17th birthday, and her family plans … reflects on the highs and lows of the past year.', …}
name: string;
networks: Network[]
//next_episode_to_air: null
number_of_episodes: number;
number_of_seasons: number;
origin_country: string[]
original_language: string;
original_name: string;
overview: string;
popularity: number
poster_path: string;
//production_companies: (2) [{…}, {…}]
//production_countries: [{…}]
seasons: Season[];
spoken_languages: SpokenLanguage[];
status: string;
tagline:string; 
type:string; 
vote_average: number;
vote_count: number;
external_ids: External;
credits: {
    crew: Crew[];
    cast: Cast[];
};
videos: {
    results: Video[]
};
images: {
    backdrops: Photo[];
    posters: Photo[]
};
}

export interface PersonType {
    adult: boolean;
    also_known_as: string[]
    biography: string;
    media_type: string;
    /* deathday: null */
    gender: number;
    /* homepage: null */
    id: number;
    imdb_id: string;
    known_for_department: string;
    name: string; 
    place_of_birth: string; 
    popularity: number; 
    profile_path: string;
    birthday: string;
    external_ids: External;
    images: {
        profiles: Photo[];
    };
    movie_credits: {
        crew: Crew[];
        cast: Cast[];
    };
    combined_credits: {
        crew: Crew[];
        cast: Cast[];
    };
}

