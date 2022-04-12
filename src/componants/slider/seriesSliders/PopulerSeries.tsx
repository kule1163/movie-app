import React, { useEffect } from 'react'
import { useGetPopulerSeriesQuery } from '../../../services/movies'
import { useAppDispatch } from '../../../app/hooks'
import SliderHeader from '../SliderHeader'
import { setPopulerSerieLoading } from '../../../features/movies/moviesSlice'
import MainMovieSlider from "../moviesSliders/MainMovieSlider"

const PopulerSeries = () => {
  const { data, isLoading, error } = useGetPopulerSeriesQuery("1")

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPopulerSerieLoading(isLoading))
  }, [isLoading])

  return (
    <>
      {error ? (
        <p>Oh no, there was an error</p>
      ) : !isLoading && data && (
        <>
          <SliderHeader mainType='series' category='populer' header="Populer Series" />
          <MainMovieSlider currentType='serie' data={data} />
        </>
      )
      }
    </>
  )
}

export default PopulerSeries