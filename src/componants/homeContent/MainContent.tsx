import React from 'react'
import styled from "styled-components"
import PopulerMovies from '../slider/moviesSliders/PopulerMovies'
import PopulerSeries from '../slider/seriesSliders/PopulerSeries'

const MainContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    background-color: #121212;
    border: "1px solid red";
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
            <PopulerSeries />
        </SectionContainer>
    </MainContainer>
  )
}

export default MainContent