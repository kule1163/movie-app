import React from 'react'
import styled from "styled-components"
import MoviePanel from '../../componants/panel/MoviePanel'
import Footer from '../../componants/Footer'
import SingleMovieContent from '../../componants/singlePages/singleMoviePage/SingleMovieContent'
import {ContentContainer } from "../styles"

const SingleMovie = () => {
  return (
    <div style={{ display: "flex" }}>
      <ContentContainer>
        <MoviePanel />
        <SingleMovieContent />
        <Footer />
      </ContentContainer>
    </div>
  )
}

export default SingleMovie