import React from 'react'
import Footer from '../../componants/Footer'
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