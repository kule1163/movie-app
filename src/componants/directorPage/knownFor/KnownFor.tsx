import React from 'react'
import styled from "styled-components"
import { PersonType, Crew, Cast } from '../../../utils/movieTypes'
import { Rating, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import 'react-lazy-load-image-component/src/effects/blur.css';
import DefaultImage from "../../../assets/defaultPhoto.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { grey } from "@mui/material/colors"

const MainContainer = styled.div`
    width: 90%;
    margin-inline: auto;
    display: grid;
    gap: .5rem;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    @media (max-width: 1100px) {
      width: 95%;
      grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    };
    @media (max-width: 850px) {
      width: 95%;
      grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
    }; 
    @media (max-width: 700px) {
      width: 95%;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    }; 
    @media (max-width: 500px) {
      width: 95%;
      grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
    }; 
    @media (max-width: 450px) {
      width: 95%;
      grid-template-columns: repeat(auto-fill, minmax(95px, 1fr));
    }; 
`
const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
`

const RatingBox = styled.div`
  display: flex;
  align-items: center;
`
const StyledRating = styled(Rating)`
    & .MuiRating-iconFilled {
        color: blue;
    };

    & .MuiRating-iconEmpty {
        color: blue;
    }
    margin-right: 1rem;
`
const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 700px) {
      display: none;
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
interface KnownForProps {
  data: PersonType
}

const KnownFor = ({ data }: KnownForProps) => {

  const navigate = useNavigate()
  const knownCast: Cast[] = data.combined_credits.cast.reduce((acc, x) => acc.concat(acc.find(y => y.id === x.id) ? [] : [x]), [] as Cast[]);
  const knownCrew: Crew[] = data.combined_credits.crew.reduce((acc, x) => acc.concat(acc.find(y => y.id === x.id) ? [] : [x]), [] as Crew[]);

  const handleClick = (type: string, id: number) => {
    if (type === "movie") {
      navigate(`/movie/${id}`)
    } else if (type === "tv") {
      navigate(`/serie/${id}`)
    }
  }

  return (

    <MainContainer>
      {knownCast.map((item, index) => (
        <ImageContainer onClick={() => handleClick(item.media_type, item.id)} key={item.id}>
          <ImageBox className="a">
            <LazyLoadImage
              src={item.backdrop_path || item.poster_path ? `https://image.tmdb.org/t/p/original/${item.poster_path ? item.poster_path : item.backdrop_path}` : DefaultImage}
              width="100%"
              height="100%"
              effect="blur"
            />

          </ImageBox>
          <InfoBox>
            <Typography sx={{ color: "white" }}>{item.original_title ? item.original_title.slice(0, 20) : item.name.slice(0, 20)}</Typography>
            <RatingBox>
              <StyledRating name="read-only" size="small" value={2} readOnly />
              <Typography sx={{ color: "gray" }}>{item.vote_average}</Typography>
            </RatingBox>
          </InfoBox>
        </ImageContainer>

      ))}
      {knownCrew.map((item, index) => (
        <ImageContainer onClick={() => handleClick(item.media_type, item.id)} key={item.id}>
          <ImageBox className="a">
            <LazyLoadImage
              src={item.backdrop_path || item.poster_path ? `https://image.tmdb.org/t/p/original/${item.poster_path ? item.poster_path : item.backdrop_path}` : DefaultImage}
              width="100%"
              height="100%"
              effect="blur"
            />
          </ImageBox>
          <InfoBox>
            <Typography sx={{ color: "white" }}>{item.original_title ? item.original_title.slice(0, 20) : item.name.slice(0, 20)}</Typography>
            <RatingBox>
              <StyledRating name="read-only" size="small" value={2} readOnly />
              <Typography sx={{ color: "gray" }}>{item.vote_average}</Typography>
            </RatingBox>
          </InfoBox>
        </ImageContainer>

      ))}
    </MainContainer>
  )
}

export default KnownFor