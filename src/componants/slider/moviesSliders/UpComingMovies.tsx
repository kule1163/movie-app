import React from 'react'
import { useGetUpComingMoviesQuery } from '../../../services/movies'
import SliderHeader from '../SliderHeader'
import MainMovieSlider from "./MainMovieSlider"

const UpComingMovies = () => {
    const {data, isLoading, error} = useGetUpComingMoviesQuery("1")
  
    return (
    <>
      {error ? (
        <p>Oh no, there was an error</p>
      ) : !isLoading && data && (
        <>
          <SliderHeader category='upcoming' mainType='movies' header="Up Coming Movies" />
          <MainMovieSlider currentType='movie' data={data} />
        </>
      )
      }
    </>
  )
}

export default UpComingMovies