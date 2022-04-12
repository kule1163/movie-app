import React, { useState } from 'react'
import { useGetSerieSeasonsQuery } from '../../../services/movies'
import styled from "styled-components"
import { Season } from '../../../utils/movieTypes'
import { Typography } from '@mui/material'
import Select from "./Select"
import { useParams } from 'react-router-dom'
import DefaultImage from "../../../assets/defaultPhoto.png"

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-inline: auto;
`
const SectionBox = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    @media (max-width: 850px) {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))};
  @media (max-width: 700px) {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
};
`
const EpisodeBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

`
const EpisodeInfoBox = styled.div`
    display: flex;
`

const Image = styled.img`
    height: 30vh;
    width: 100%;
    object-fit: cover;
`
const EpisodeText = styled(Typography)`
    font-size: 1.3em !important;
    &:first-child{
        color: blue;
        margin-right: .5rem;
    };
    &:last-child{
        color: white;
    };
`
const OverviewText = styled(Typography)`
    color: white;
    font-size: .9em !important;
    margin-bottom: .5rem !important;
`
const DateText = styled(Typography)`
    color: grey;
    font-size: .9em !important;
    margin-top: auto !important;
`
interface EpisodeProps {
    totalSeason: number;

}

const Episodes = ({ totalSeason }: EpisodeProps) => {

    const [seasonNum, setSeasonNum] = useState<string>("1")

    const { id } = useParams()

    const item = {
        id: id ? id : "0",
        season: seasonNum
    }

    const { data, isLoading, error } = useGetSerieSeasonsQuery(item)


    const d: Season = data

    const handleEpisodeNum = (index: string) => {
        if (index.length === 1) {
            return `0${index}`
        } else {
            return index
        }
    }

    return (
        <>
            {error ? (
                <p>Oh no, there was an error</p>
            ) : isLoading ? (
                <p>loading...</p>
            ) : d && (
                <MainContainer>
                    <Select totalSeason={totalSeason} setSeasonNum={setSeasonNum} />
                    <SectionBox>
                        {d.episodes.map((item, index) => (
                            <div key={item.id} style={{ display: "flex", flexDirection: "column" }}>
                                <EpisodeBox key={item.id}>
                                    <Image src={item.still_path ? `https://image.tmdb.org/t/p/w400/${item.still_path ? item.still_path : d.poster_path}` : DefaultImage} />
                                    <EpisodeInfoBox>
                                        <EpisodeText>E{handleEpisodeNum((index + 1).toString())}</EpisodeText>
                                        <EpisodeText>{item.name}</EpisodeText>
                                    </EpisodeInfoBox>
                                    <OverviewText>{item.overview}</OverviewText>
                                    <DateText>{item.air_date}</DateText>
                                </EpisodeBox>

                            </div>
                        ))}
                    </SectionBox>
                </MainContainer>
            )
            }
        </>

    )
}

export default Episodes