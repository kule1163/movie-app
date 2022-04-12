import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSimilarMovieQuery } from '../../../services/movies'
import MainMovieSlider from "../moviesSliders/MainMovieSlider"
import SliderHeader from '../SliderHeader'
import 'react-lazy-load-image-component/src/effects/blur.css';

interface MoreLikeThisMovieProps {
  currentType: "movie"
}

const MoreLikeThisMovie = ({currentType}: MoreLikeThisMovieProps) => {
  
  const {id} = useParams()
  
  const {data, isLoading, error} = useGetSimilarMovieQuery(id)
  
    return (
    <>
        {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading ? (
        <p>loading...</p>
      ) : data && (
          <>
            <SliderHeader hideButton={true} header='More Like This'/>
            <MainMovieSlider currentType={currentType} data={data}/>
          </>
      )}
    </>
  )
}

export default MoreLikeThisMovie