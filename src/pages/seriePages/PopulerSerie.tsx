import React, { useEffect } from 'react'
import styled from 'styled-components'

import {grey} from "@mui/material/colors"

import GeneralMovies from '../../componants/GeneralMovies'
import SliderHeader from '../../componants/slider/SliderHeader'
import InfoLine from '../../componants/InfoLine'
import {ContentContainer } from "../styles"

const PopulerSerie = () => {

    const currentUrl=`https://api.themoviedb.org/3/tv/popular?api_key=31af07621087a710376eeeff33ef9885&language=en-US`

  return (
    <div style={{display: "flex"}}>
   
        <ContentContainer>
          <InfoLine info='Populer Tv Shows' />
          <SliderHeader header='Populer Tv Shows' hideButton={true}/>
          <GeneralMovies currentUrl={currentUrl}/>
        </ContentContainer>
            
        
    </div>
  )
}

export default PopulerSerie