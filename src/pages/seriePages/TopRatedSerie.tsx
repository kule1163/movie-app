import React, { useEffect } from 'react'

import styled from 'styled-components'

import {grey} from "@mui/material/colors"

import GeneralMovies from '../../componants/GeneralMovies'
import SliderHeader from '../../componants/slider/SliderHeader'
import InfoLine from '../../componants/InfoLine'
import {ContentContainer } from "../styles"

const TopratedMovie = () => {

    const currentUrl=`https://api.themoviedb.org/3/tv/top_rated?api_key=31af07621087a710376eeeff33ef9885&language=en-US`

  return (
    <div style={{display: "flex"}}>
      <InfoLine info='Top Rated Tv Shows'/>
                <ContentContainer>
                  <SliderHeader header='Top Rated Tv Shows' hideButton={true}/>
          <GeneralMovies currentUrl={currentUrl}/>
        </ContentContainer>
            
        
    </div>
  )
}

export default TopratedMovie