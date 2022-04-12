import React from 'react'
import styled from "styled-components"
import {grey} from "@mui/material/colors"
import MoviePanel from '../../componants/panel/MoviePanel'
import Footer from '../../componants/Footer'
import Overview from '../../componants/singlePages/singleMoviePage/overview/Overview'
import MainContent from '../../componants/singlePages/singleMoviePage/overview/MainContent'
import SingleSerieContent from '../../componants/singlePages/singleSeriePage/SingleSerieContent'
import SeriesPanel from '../../componants/panel/SeriesPanel'
import {ContentContainer } from "../styles"

const SingleSerie = () => {
  return (
    <div style={{display: "flex"}}>
      <ContentContainer>
        <SeriesPanel />
        <SingleSerieContent />
        <Footer />
      </ContentContainer>
    </div>
  )
}

export default SingleSerie