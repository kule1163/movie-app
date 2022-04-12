import React, { useEffect } from 'react'
import Menu from '../../componants/navbar/Menu'
import styled from 'styled-components'
import MoviePanel from '../../componants/panel/MoviePanel'
import MainContent from '../../componants/homeContent/MainContent'
import { useAppDispatch } from '../../app/hooks'
import { moviesFetch } from '../../features/movies/moviesSlice'
import Footer from '../../componants/Footer'
import {grey} from "@mui/material/colors"
import KnownFor from '../../componants/directorPage/knownFor/KnownFor'
import { useGetGenreMovieQuery } from '../../services/movies'
import GeneralMovies from '../../componants/GeneralMovies'
import SliderHeader from '../../componants/slider/SliderHeader'
import InfoLine from '../../componants/InfoLine'
import {ContentContainer } from "../styles"

const PopulerMovie = () => {

    const currentUrl=`https://api.themoviedb.org/3/movie/popular?api_key=31af07621087a710376eeeff33ef9885&language=en-US`

  return (
    <div style={{display: "flex"}}>
   
        <ContentContainer>
          <InfoLine info='Populer Movies' />
          <SliderHeader header='Populer Movies' hideButton={true}/>
          <GeneralMovies currentUrl={currentUrl}/>
        </ContentContainer>
            
        
    </div>
  )
}

export default PopulerMovie