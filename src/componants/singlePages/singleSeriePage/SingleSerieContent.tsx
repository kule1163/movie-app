import React, { useState } from 'react'
import { useGetSeriesByIdQuery } from '../../../services/movies'
import { SerieType } from "../../../utils/movieTypes"
import MainContent from './overview/MainContent'
import Photos from '../photos/Photos'
import Videos from '../videos/Videos'
import styled from "styled-components"
import MoreLikeThisSerie from '../../slider/moreLikeThis/MoreLikeThisSerie'
import SingleMovieHeader from "../SingleMovieHeader"
import Episodes from '../episodes/Episodes'
import { useParams } from 'react-router-dom'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;  
`

const SectionContainer = styled.div`
    &.hide {
        display: none;
    };
    &.show {
        display: block;
    };
`

const SingleSerieContent = () => {

    const { id } = useParams()

    const { data, isLoading, error } = useGetSeriesByIdQuery(id)

    const [currentId, setCurrentId] = useState<number>(1)

    const d: SerieType = data

    return (
        <>
            {error ? (
                <p>Oh no, there was an error</p>
            ) : isLoading ? (
                <p>loading...</p>
            ) : d && (
                <MainContainer>
                    <SingleMovieHeader
                        photos={(d.images.backdrops.length > 0 || d.images.posters.length > 0) ? "P" : "PHOTOS"}
                        videos={d.videos.results.length > 0 ? "V" : "VIDEOS"}
                        episodes="E"
                        credits="CREDITS"
                        known='KNOWN FOR'
                        setCurrentId={setCurrentId}
                        currentId={currentId}
                    />
                    <SectionContainer className={currentId === 1 ? "show" : "hide"} >
                        <MainContent data={d} />
                    </SectionContainer>
                    <SectionContainer className={currentId === 2 ? "show" : "hide"} >
                        <Episodes totalSeason={d.number_of_seasons} />
                    </SectionContainer>
                    {(d.images.backdrops.length > 0 || d.images.posters.length > 0) && (
                        <SectionContainer className={currentId === 3 ? "show" : "hide"} >
                            <Photos photos={d.images} />
                        </SectionContainer>
                    )}
                    {d.videos.results.length > 0 && (
                        <SectionContainer className={currentId === 4 ? "show" : "hide"} >
                            <Videos videos={d.videos.results} />
                        </SectionContainer>
                    )}
                    <MoreLikeThisSerie currentType="serie" />
                </MainContainer>
            )}

        </>
    )
}

export default SingleSerieContent
