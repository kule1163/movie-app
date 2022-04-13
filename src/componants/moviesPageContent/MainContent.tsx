import React from 'react'
import styled from "styled-components"
import PopulerMovies from '../slider/moviesSliders/PopulerMovies'
import TopRatedMovies from '../slider/moviesSliders/TopRatedMovies'
import NowPlayinMovies from '../slider/moviesSliders/NowPlayinMovies'
import UpComingMovies from '../slider/moviesSliders/UpComingMovies'

const MainContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    background-color: #121212;
`

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`
const MainContent = () => {
    
    return (
    <MainContainer>
        <SectionContainer>
            <PopulerMovies />
        </SectionContainer>
        <SectionContainer>
            <TopRatedMovies />
        </SectionContainer>
        <SectionContainer>
            <NowPlayinMovies />
        </SectionContainer>
        <SectionContainer>
            <UpComingMovies />
        </SectionContainer>
    </MainContainer>
  )
}

export default MainContent