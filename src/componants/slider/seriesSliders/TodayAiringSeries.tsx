import React from 'react'
import { useGetTodayAiringSeriesQuery } from '../../../services/movies'
import SliderHeader from '../SliderHeader'
import MainMovieSlider from "../moviesSliders/MainMovieSlider"

const TodayAiringSeries = () => {
  const { data, isLoading, error } = useGetTodayAiringSeriesQuery("1")

  return (
    <>
      {error ? (
        <p>Oh no, there was an error</p>
      ) : !isLoading && data && (
        <>
          <SliderHeader mainType='series' category='today-airing' header="TV Shows Airing Today" />
          <MainMovieSlider currentType='serie' data={data} />
        </>
      )
      }
    </>
  )
}

export default TodayAiringSeries