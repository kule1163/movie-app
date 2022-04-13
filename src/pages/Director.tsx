import React from 'react'
import Footer from '../componants/Footer'
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