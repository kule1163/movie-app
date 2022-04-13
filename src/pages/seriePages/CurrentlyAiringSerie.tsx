import React, { useEffect } from 'react'
import GeneralMovies from '../../componants/GeneralMovies'
import SliderHeader from '../../componants/slider/SliderHeader'
import InfoLine from '../../componants/InfoLine'
import {ContentContainer } from "../styles"

const CurrentlyAiringSerie = () => {

    const currentUrl=`https://api.themoviedb.org/3/tv/on_the_air?api_key=31af07621087a710376eeeff33ef9885&language=en-US`

  return (
    <div style={{display: "flex"}}>
   
        <ContentContainer>
        <InfoLine info="Currently Airing TV Shows"/>
          <SliderHeader header='Currently Airing TV Shows' hideButton={true}/>
          <GeneralMovies currentUrl={currentUrl}/>
        </ContentContainer>
            
        
    </div>
  )
}

export default CurrentlyAiringSerie