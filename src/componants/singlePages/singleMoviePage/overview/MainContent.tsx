import React from 'react'
import styled from 'styled-components'
import Overview from "./Overview"
import MovieCastSlider from '../../../slider/castSlider/MovieCastSlider'
import { MovieType } from "../../../../utils/movieTypes"

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export interface MainContentProps {
  data?: MovieType;
}

const MainContent: React.FC<MainContentProps> = ({ data }): JSX.Element => {

  return (
    <>
      {data && (
        <MainContainer>
          <Overview data={data} cast={data.credits.cast} />
          <MovieCastSlider cast={data.credits.cast} />
        </MainContainer>
      )}
    </>
  )
}

export default MainContent