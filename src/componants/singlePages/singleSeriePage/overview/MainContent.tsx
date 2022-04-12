import React from 'react'
import styled from 'styled-components'
import Overview from "./Overview"
import MovieCastSlider from '../../../slider/castSlider/MovieCastSlider'
import { SerieType } from "../../../../utils/movieTypes"

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export interface MainContentProps {
  data?: SerieType;
}

const MainContent: React.FC<MainContentProps> = ({ data }): JSX.Element => {

  return (
    <>
      {data && (
        <MainContainer>
          <Overview data={data} />
          <MovieCastSlider cast={data.credits.cast} />
        </MainContainer>
      )}
    </>
  )
}

export default MainContent