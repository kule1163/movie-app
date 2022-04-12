import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { Video } from '../../utils/movieTypes'


const MainContainer = styled.div`
    display: flex;
    margin: 2rem 0;
    align-items: center;
    justify-content: center;
    height: 10vh;
    width: 100%;
    @media (max-width: 770px) {
        height: 8vh;
    };
    @media (max-width: 550px) {
        height: 6vh;
    };
`

const HeaderContainer = styled.div`  
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1000px) {
        width: 100%;
        justify-content: space-between;
        height: 100%;
    };
    @media (max-width: 500px) {
        width: 100%;
        justify-content: space-between;
        height: 100%;
    };
`
const HeaderBox = styled.div`
    display: flex;
    flex-direction: column;
    &:not(:last-child) {
        margin-right: 5rem;
    };
    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        &:not(:last-child) {
            margin-right: 0;   
        };
    };
`
const Line = styled.div`
    width: 100%;
    height: 3px;
    margin-top: 3px;
    background-color: white;
    transition: all 1s ease;
    display: none;
    &.show{
        display: block;
    };
    @media (max-width: 1000px) {
        &.show{
        display: none;
    };
    };
`

const Header = styled(Typography)`
    font-size: 1.5em !important;
    color: grey;
    cursor: pointer;
    transition: all 1s ease;
    &:hover {
        color: white;
    };
    &.show {
        color: white;
    };
    @media (max-width: 770px) {
        font-size: 1.3em !important;
    };
    @media (max-width: 550px) {
        font-size: 1em !important;
    };
`
export interface HeaderProps {
    id: number;
    name: string;
}

interface SingleMovieHeaderProps {
    setCurrentId: React.Dispatch<React.SetStateAction<number>>;
    currentId: number;
    videos?: string;
    photos?: string;
    episodes?: string;
    credits?: string;
    known?: string;
    overview?: string;
}

const SingleMovieHeader = ({ currentId, videos, photos, episodes, setCurrentId, credits, known, overview }: SingleMovieHeaderProps) => {
    const [currentIndex, setCurentIndex] = useState<number>(0)
    const [headerList, setHeaderList] = useState<HeaderProps[]>([
        { id: 1, name: "OVERVIEW" },
        { id: 2, name: "EPISODES" },
        { id: 6, name: "KNOWN FOR" },
        { id: 5, name: "CREDITS" },
        { id: 3, name: "PHOTOS" },
        { id: 4, name: "VIDEOS" },
    ])

    const filteredList = headerList
        .filter(item => item.name !== photos)
        .filter(item => item.name !== videos)
        .filter(item => item.name !== episodes)
        .filter(item => item.name !== credits)
        .filter(item => item.name !== known)
        .filter(item => item.name !== overview)

    return (
        <MainContainer>
            <HeaderContainer>
                {filteredList.map((item, index) => (
                    <HeaderBox style={{ backgroundColor: `${index === currentIndex ? "black" : "transparent"}` }} key={item.id} onClick={() => {
                        setCurrentId(item.id)
                        setCurentIndex(index)
                    }}>
                        <Header className={item.id === currentId ? `show` : ""}>{item.name}</Header>
                        <Line className={item.id === currentId ? `show` : ""}></Line>
                    </HeaderBox>
                ))}
            </HeaderContainer>
        </MainContainer>
    )
}

export default SingleMovieHeader