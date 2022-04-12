import { Typography } from '@mui/material'
import React from 'react'
import styled from "styled-components"
import { PersonType } from '../../../utils/movieTypes'
import Content from "./Content"

const MainContent = styled.div`
    width: 90%;
    margin-inline: auto;
    @media (max-width: 1100px) {
    width: 95%;
    display: block;
  };
`
const Image = styled.img`
  width: auto;
  float: left;
  margin-right: .5rem;
  height: 300px;
  object-fit: cover;
  display: block;
  @media (max-width: 500px) {
    height: 60vw;
  };
`
const FirstContext = styled.div`
display: block;
width: 95%;
@media (max-width: 1000px) {
    display: none;
  }
`
const SecondContext = styled.div`
display: none;
width: 95%;

margin-inline: auto;
@media (max-width: 1000px) {
    display: block;

  }
`
const FirstName = styled(Typography)`
  margin-bottom: .5rem  !important;
 color:white ;
 font-size: 1.6em !important;
 display: block;
 @media (max-width: 1000px) {
    display: none;
  }
`
const SecondName = styled(Typography)`
  margin-bottom: .5rem !important;
 color:white;
 font-size: 1.6em !important;
 display: none;
 @media (max-width: 1000px) {
    display: block;
  }
`
export interface OverviewProps {
  data: PersonType;
}

const Overview = ({ data }: OverviewProps) => {

  return (
    <div style={{ paddingTop: "2rem", display: "flex", flexDirection: "column" }}>
      <MainContent>
        <SecondName>{data.name}</SecondName>
        <Image src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${data.profile_path}`} />
        <FirstName>{data.name}</FirstName>
        <Typography sx={{ color: "white" }} variant="body2">{data.biography}</Typography>
        <FirstContext>
          <Content data={data} />
        </FirstContext>
      </MainContent>
      <SecondContext>
        <Content data={data} />
      </SecondContext>
    </div>
  )
}

export default Overview