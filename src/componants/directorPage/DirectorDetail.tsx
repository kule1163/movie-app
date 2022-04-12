import React, { useState } from 'react'
import styled from "styled-components"
import { useGetPersonDetailQuery } from '../../services/movies'
import { PersonType } from '../../utils/movieTypes'
import Photos from './photos/Photos'
import KnownFor from './knownFor/KnownFor'
import Overview from './Overview/Overview'
import CreditsDetail from './credits/CreditsDetail'
import SingleMovieHeader from '../singlePages/SingleMovieHeader'
import { useParams } from 'react-router-dom'
import InfoLine from '../InfoLine'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`
const SectionContainer = styled.div`
    &.hide {
        display: none;
    };
    &.show {
        display: block;
    };
`

const DirectorDetail = () => {

  const [currentId, setCurrentId] = useState<number>(6)
  const { personID } = useParams()

  const { data, isLoading, error } = useGetPersonDetailQuery(personID)

  const d: PersonType = data

  return (

    <>
      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading ? (
        <p>loading...</p>
      ) : d && (
        <MainContainer>
          <InfoLine info={d.name} />
          <Overview data={d} />
          <SingleMovieHeader
            photos={(d.images.profiles.length > 0) ? "P" : "PHOTOS"}
            videos="VIDEOS"
            episodes="EPISODES"
            overview='OVERVIEW'
            known={(d.combined_credits.cast.length > 0 || d.combined_credits.crew.length > 0) ? "K" : "KNOWN FOR"}
            credits={(d.combined_credits.cast.length > 0 || d.combined_credits.crew.length > 0) ? "C" : "CREDITS"}
            setCurrentId={setCurrentId}
            currentId={currentId}
          />
          <SectionContainer className={currentId === 6 ? "show" : "hide"}>
            <KnownFor data={d} />
          </SectionContainer>
          <SectionContainer className={currentId === 3 ? "show" : "hide"}>
            <Photos photo={d.images.profiles} />
          </SectionContainer>
          <SectionContainer className={currentId === 5 ? "show" : "hide"}>
            <CreditsDetail credits={d.combined_credits} />
          </SectionContainer>
        </MainContainer>
      )}
    </>
  )
}

export default DirectorDetail