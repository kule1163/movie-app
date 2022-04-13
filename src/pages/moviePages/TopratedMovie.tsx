import React from 'react'
import GeneralMovies from '../../componants/GeneralMovies'
import SliderHeader from '../../componants/slider/SliderHeader'
import InfoLine from '../../componants/InfoLine'
import {ContentContainer } from "../styles"

const TopRatedMovie = () => {

    const currentUrl=`https://api.themoviedb.org/3/movie/top_rated?api_key=31af07621087a710376eeeff33ef9885&language=en-US`

  return (
    <div style={{display: "flex"}}>
   
        <ContentContainer>
          <InfoLine info='Top Rated Movies'/>
          <SliderHeader header='Top Rated Movies' hideButton={true}/>
          <GeneralMovies currentUrl={currentUrl} />
        </ContentContainer>
            
        
    </div>
  )
}

export default TopRatedMovie