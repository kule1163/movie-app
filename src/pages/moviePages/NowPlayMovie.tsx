import React from 'react'
import InfoLine from '../../componants/InfoLine'
import GeneralMovies from '../../componants/GeneralMovies'
import SliderHeader from '../../componants/slider/SliderHeader'
import {ContentContainer } from "../styles"

const NowPlayMovie = () => {

    const currentUrl=`https://api.themoviedb.org/3/movie/now_playing?api_key=31af07621087a710376eeeff33ef9885&language=en-US`

  return (
    <div style={{display: "flex"}}>
        <ContentContainer>
          <InfoLine info="Now Playing Movies"/>
          <SliderHeader header='Now Playing Movies' hideButton={true}/>
          <GeneralMovies currentUrl={currentUrl}/>
        </ContentContainer> 
    </div>
  )
}

export default NowPlayMovie