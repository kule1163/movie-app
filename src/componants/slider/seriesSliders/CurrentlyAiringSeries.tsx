import React from 'react'
import { useGetCurrentlyAiringSeriesQuery } from '../../../services/movies'
import SliderHeader from '../SliderHeader'
import MainMovieSlider from "../moviesSliders/MainMovieSlider"

const CurrentlyAiringSeries = () => {
    const {data, isLoading, error} = useGetCurrentlyAiringSeriesQuery("1")
    
    return (
    <>
       {error ? (
        <p>Oh no, there was an error</p>
      ) : !isLoading && data && (
        <>
          <SliderHeader mainType='series' category='currently-airing' header="Currently Airing TV Shows" />
          <MainMovieSlider currentType='serie' data={data} />
        </>
      )
      }
    </>
  )
}

export default CurrentlyAiringSeries
