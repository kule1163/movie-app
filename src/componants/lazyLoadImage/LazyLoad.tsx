import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styled from "styled-components"
import {grey} from "@mui/material/colors"


const MainContainer = styled.div`
    background-color: ${grey[900]};
    height: 25vw;
    width: 100%;
    @media (max-width: 1100px) {
        height: 30vw;
    };
    @media (max-width: 650px) {
            height: 45vw;
    };
    & img {
        object-fit: cover;
        display: block;
        
    };
`

interface LazyLoadProps {
    imageSrc: string
}

const LazyLoad = ({imageSrc}: LazyLoadProps) => {
  return (
     <MainContainer> 
        <LazyLoadImage 
        width="100%"
        height="100%"
        src={imageSrc}
        effect="blur"
    />
     </MainContainer> 
  )
}

export default LazyLoad