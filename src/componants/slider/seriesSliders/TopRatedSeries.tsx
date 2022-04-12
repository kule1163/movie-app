import React from 'react'
import { useGetTopRatedSeriesQuery } from '../../../services/movies'
import SliderHeader from '../SliderHeader'
import MainMovieSlider from "../moviesSliders/MainMovieSlider"

const TopRatedSeries = () => {
  const { data, isLoading, error } = useGetTopRatedSeriesQuery("1")

  return (
    <>
      {error ? (
        <p>Oh no, there was an error</p>
      ) : !isLoading && data && (
        <>
          <SliderHeader mainType='series' category='top-rated' header="Top Rated Series" />
          <MainMovieSlider currentType='serie' data={data} />
        </>
      )
      }
    </>
  )
}

export default TopRatedSeries