import React from 'react'
import { Photo } from '../../../utils/movieTypes'
import styled from "styled-components"
import { Typography } from '@mui/material'
import 'react-lazy-load-image-component/src/effects/blur.css';
import DefaultImage from "../../../assets/defaultPhoto.png"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { grey } from "@mui/material/colors"

interface PostersProps {
  posters: Photo[]
}

const MainContainer = styled.div`
    
`
const SectionContainer = styled.div`
display: grid;
gap: .5rem;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
@media (max-width: 1100px) {
      grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    };
    @media (max-width: 850px) {
      grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
    }; 
    @media (max-width: 700px) {
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    }; 
    @media (max-width: 500px) {
      grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
    }; 
    @media (max-width: 450px) {
      grid-template-columns: repeat(auto-fill, minmax(95px, 1fr));
    }; 
`


const ImageBox = styled.div`
   height: 25vw;
    @media (max-width: 1100px) {
        height: 30vw;
    };
    @media (max-width: 700px) {
            height: 35vw;
    };
    @media (max-width: 650px) {
            height: 40vw;
    };
  background-color: ${grey[900]};
  & img {
    object-fit: cover;
  };
`


const Posters = ({ posters }: PostersProps) => {

  const purePosters = posters.reduce((acc, x) => acc.concat(acc.find(y => y.file_path === x.file_path) ? [] : [x]), [] as (Photo[]))

  return (
    <MainContainer>
      <Typography sx={{ color: "white", marginY: "1rem" }} variant="h4">Posters</Typography>
      <SectionContainer>

        {purePosters.map(item => (

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

export default Posters