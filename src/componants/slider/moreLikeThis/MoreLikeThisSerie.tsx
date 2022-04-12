import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSimilarSerieQuery } from '../../../services/movies'
import MainMovieSlider from "../moviesSliders/MainMovieSlider"
import SliderHeader from '../SliderHeader'

interface MoreLikeThisSerieProps {
  currentType: "serie"
}

const MoreLikeThisSerie = ({currentType}: MoreLikeThisSerieProps) => {
    
  const {id} = useParams()
  const {data, isLoading, error} = useGetSimilarSerieQuery(id)
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

export default MoreLikeThisSerie