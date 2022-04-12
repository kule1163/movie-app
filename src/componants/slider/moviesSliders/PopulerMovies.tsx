import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../app/hooks'
import { useGetPopulerMoviesQuery, } from '../../../services/movies'
import { setPopulerMovieLoading } from '../../../features/movies/moviesSlice'
import SliderHeader from '../SliderHeader'
import MainMovieSlider from "./MainMovieSlider"

const PopulerMovies = () => {
    
  const dispatch = useAppDispatch()
    const {data, isLoading, error} = useGetPopulerMoviesQuery("1")

    useEffect(() => {
      dispatch(setPopulerMovieLoading(isLoading))
    },[isLoading])
  
    return (
    <>
      {error ? (
        <p>Oh no, there was an error</p>
      ) : !isLoading &&  data && (
        <>
          <SliderHeader category='populer' mainType='movies' header="Populer Movies" />
          <MainMovieSlider currentType='movie' data={data} />
        </>
      )
      }
    </>
  )
}

export default PopulerMovies