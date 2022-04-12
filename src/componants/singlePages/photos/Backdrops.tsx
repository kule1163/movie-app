import React from 'react'
import { Photo } from '../../../utils/movieTypes'
import styled from "styled-components"
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {Typography} from "@mui/material"
import {grey} from "@mui/material/colors"
import DefaultImage from "../../../assets/defaultPhoto.png"


interface BackdropsProps {
    backdrops: Photo[]
}

const MainContainer  = styled.div`
    
`
const SectionContainer = styled.div`
display: grid;
gap: .5rem;
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
@media (max-width: 1100px) {
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
};
@media (max-width: 770px) {
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
};
@media (max-width: 500px) {
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
};

`

const ImageBox = styled.div`
   height: 15vw;
    @media (max-width: 650px) {
        height: 25vw;
    };
  background-color: ${grey[900]};
  & img {
    object-fit: cover;
  };
`

const Backdrops = ({backdrops}: BackdropsProps) => {
  
  const pureBackdrops = backdrops.reduce((acc, x) => acc.concat(acc.find(y => y.file_path === x.file_path) ? [] : [x]), [] as (Photo[]))

  return (
    <MainContainer>
        <Typography sx={{color: "white", marginY: "1rem"}} variant="h4">Backdrops</Typography>
    <SectionContainer>
        {pureBackdrops.map(item => (
             <ImageBox key={item.file_path}>
             <LazyLoadImage
             src={item.file_path ? `https://image.tmdb.org/t/p/original/${item.file_path}` : DefaultImage}
             width="100%"
             height="100%"
             effect="blur"
             
             />
            </ImageBox>
        ))}
    </SectionContainer>
    </MainContainer>
  )
}

export default Backdrops