import React, {useEffect} from 'react'
import { Photo } from '../../../utils/movieTypes'
import styled from "styled-components"
import 'react-lazy-load-image-component/src/effects/blur.css';
import LazyLoad from "../../lazyLoadImage/LazyLoad";
import 'react-lazy-load-image-component/src/effects/blur.css';
import DefaultImage from "../../../assets/defaultPhoto.png"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {grey} from "@mui/material/colors"



const MainContainer = styled.div`
    display: grid;
    gap: .5rem;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    width: 90%;
    margin-inline: auto;
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

const Image = styled.img`
    height: 55vh;
    object-fit: cover;
    width: 100%;
`

interface PhotosProps {
  photo: Photo[];

  /* setHeaderList: React.Dispatch<React.SetStateAction<string[]>>;
    headerList: string */
}

const Photos:React.FC<PhotosProps> = ({photo, /* headerList, setHeaderList */}) => {
  


  
  return (
   <>
    {photo && (
       <MainContainer>
        {photo.map(item => (
       
          
       <ImageBox key={item.file_path} /* ref={addToRef} */ >
              
       <LazyLoadImage
       src={item.file_path ? `https://image.tmdb.org/t/p/original/${item.file_path}` : DefaultImage}
       width="100%"
       height="100%"
       effect="blur"
       
       />
      
      </ImageBox>
       
       ))}
     </MainContainer>
    )}
   </>
  )
}

export default Photos