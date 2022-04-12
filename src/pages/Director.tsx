import React, { useEffect } from 'react'
import Menu from '../componants/navbar/Menu'
import styled from 'styled-components'
import MoviePanel from '../componants/panel/MoviePanel'
import MainContent from '../componants/homeContent/MainContent'
import { useAppDispatch } from '../app/hooks'
import { moviesFetch } from '../features/movies/moviesSlice'
import Footer from '../componants/Footer'
import {grey} from "@mui/material/colors"
import DirectorDetail from '../componants/directorPage/DirectorDetail'
import {ContentContainer } from "./styles"

const Director = () => {
  return (
    <div style={{display: "flex"}}>
        <ContentContainer>
            <DirectorDetail />
            <Footer />
        </ContentContainer>
    </div>
  )
}

export default Director