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
import { useParams } from 'react-router-dom'
import SliderHeader from '../../componants/slider/SliderHeader'
import InfoLine from '../../componants/InfoLine'
import {ContentContainer } from "../styles"

const GenreSerie = () => {
  
  const {genreID} = useParams()

  const currentUrl = `https://api.themoviedb.org/3/discover/tv?api_key=31af07621087a710376eeeff33ef9885&language=en-US&sort_by=popularity.desc&with_genres=${genreID}&with_watch_monetization_types=flatrate`

  return (
    <div style={{display: "flex"}}>
        <ContentContainer>
          <InfoLine info={`${genreID}`}/>
          <SliderHeader header={`${genreID}`} hideButton={true}/>
          <GeneralMovies currentUrl={currentUrl}/>
        </ContentContainer>
    </div>
  )
}

export default GenreSerie