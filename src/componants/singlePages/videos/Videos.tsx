import React, { useState } from 'react'
import { Video } from '../../../utils/movieTypes'
import styled from "styled-components"
import { Typography } from '@mui/material'
import Select from './Select'
import { MediaProps } from "../../../componants/directorPage/credits/CreditsDetail"

const MainContainer = styled.div`
    width: 90%;
    margin-bottom: 2rem;
    margin-inline: auto;
`
const VideoBox = styled.div`
    display: inline-flex;
    flex-direction: column;
    width: 100%;
`
const SectionBox = styled.div`
    display: grid;
    gap: .5rem;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    @media (max-width: 1000px) {
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
};
@media (max-width: 770px) {
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
};
@media (max-width: 500px) {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
};
`
const Iframe = styled.iframe`
      height: 15vw;
      width: 100%;
      @media (max-width: 827px) {
        height: 25vw;
    };
    @media (max-width: 650px) {
        height: 25vw;
    };
    @media (max-width: 500px) {
        height: 50vw;
    };  
`
interface VideosProps {
    videos: Video[]
}

const Videos: React.FC<VideosProps> = ({ videos }) => {

    const [type, setType] = useState<string>("All")

    const filteredVideos = videos && videos.filter(item => item.type.includes(type))

    const youtubeVideos = type === "All" ? videos : filteredVideos

    const videoTypes = videos.map(item => item.type)
    let singleTypes = Array.from(new Set(videoTypes))
    singleTypes.unshift("All")

    let youtubeType: MediaProps[] = []

    singleTypes.forEach(item => {
        youtubeType.push({ text: item, option: item })
    })

    return (
        <>
            {videos && (
                <MainContainer>
                    <Select options={youtubeType} setType={setType} name="videos" videos={videos} />
                    <SectionBox>
                        {youtubeVideos && (
                            youtubeVideos.map(item => (
                                <VideoBox key={item.id}>
                                    <Iframe src={`https://www.youtube.com/embed/${item.key}`} />
                                    <Typography sx={{ color: "white" }}>{item.name}</Typography>
                                    <Typography sx={{ color: "gray" }}>{item.type}</Typography>
                                </VideoBox>
                            ))
                        )}
                    </SectionBox>
                </MainContainer>
            )}
        </>
    )
}

export default Videos