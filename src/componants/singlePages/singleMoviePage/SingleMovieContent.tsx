import React, { useState } from 'react'
import { useGetMovieByIdQuery } from '../../../services/movies'
import { MovieType } from "../../../utils/movieTypes"
import MainContent from './overview/MainContent'
import Photos from "../photos/Photos"
import Videos from '../videos/Videos'
import styled from "styled-components"
import SingleMovieHeader from "../SingleMovieHeader"
import MoreLikeThisMovie from '../../slider/moreLikeThis/MoreLikeThisMovie'
import { useParams } from 'react-router-dom'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    
`
const SectionContainer = styled.div`
    &.hide {
        display: none;
    };
    &.show {
        display: block;
    };
`

export interface HeaderProps {
    id: string;
    name: string;
}

const SingleMovieContent = () => {

    const { id } = useParams()

    const { data, isLoading, error } = useGetMovieByIdQuery(id)

    const [currentId, setCurrentId] = useState<number>(1)

    const d: MovieType = data

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
                        episodes="EPISODES"
                        credits="CREDITS"
                        known="KNOWN FOR"
                        setCurrentId={setCurrentId}
                        currentId={currentId}
                    />
                    <SectionContainer className={currentId === 1 ? "show" : "hide"} >
                        <MainContent data={d} />
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
                    <MoreLikeThisMovie currentType='movie' />
                </MainContainer>
            )}

        </>
    )
}

export default SingleMovieContent