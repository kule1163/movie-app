import React from 'react'
import { useGetNowPlayingMoviesQuery } from '../../../services/movies'
import SliderHeader from '../SliderHeader'
import MainMovieSlider from "./MainMovieSlider"

const NowPlayinMovies = () => {
    const {data, isLoading, error} =  useGetNowPlayingMoviesQuery("1")
  
    return (
    <>
      {error ? (
        <p>Oh no, there was an error</p>
      ) : !isLoading && data && (
        <>
          <SliderHeader category='nowplaying' mainType='movies' header="Now Playing Movies" />
          <MainMovieSlider currentType='movie' data={data} />
        </>
      )
      }
    </>
  )
}

export default NowPlayinMovies