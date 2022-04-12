import React from 'react'
import { Photo } from '../../../utils/movieTypes'
import styled from "styled-components"
import Backdrops from './Backdrops'
import Posters from "./Posters"
import 'react-lazy-load-image-component/src/effects/blur.css';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-inline: auto;
`

interface PhotosProps {
  photos?: {
    backdrops: Photo[];
    posters: Photo[]
  };
}

const Photos:React.FC<PhotosProps> = ({photos}) => {
  
  return (
   <>
    {photos && (
       <MainContainer>
         <Backdrops backdrops={photos.backdrops}/>
         <Posters posters={photos.posters}/>
     </MainContainer>
    )}
   </>
  )
}

export default Photos