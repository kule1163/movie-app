import React from 'react'
import styled from "styled-components"
import PopulerSeries from '../slider/seriesSliders/PopulerSeries'
import TodayAiringSeries from '../slider/seriesSliders/TodayAiringSeries'
import CurrentlyAiringSeries from '../slider/seriesSliders/CurrentlyAiringSeries'
import TopRatedSeries from '../slider/seriesSliders/TopRatedSeries'

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
            <PopulerSeries />
        </SectionContainer>
        <SectionContainer>
            <TopRatedSeries />
        </SectionContainer>
        <SectionContainer>
            <TodayAiringSeries />
        </SectionContainer>
        <SectionContainer>
            <CurrentlyAiringSeries />
        </SectionContainer>
    </MainContainer>
  )
}

export default MainContent