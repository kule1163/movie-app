import React from 'react'
import styled from "styled-components"
import { Crew, Cast } from '../../utils/movieTypes'
import { Rating, Typography } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import SliderHeader from '../slider/SliderHeader'
import { useAppSelector } from '../../app/hooks'
import { useNavigate } from 'react-router-dom'
import DefaultImage from "../../assets/defaultPhoto.png"
import { grey } from '@mui/material/colors'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 10vh;
`
const MainContainer = styled.div`
    display: grid;
    gap: .5rem;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    width: 90%;
    margin-inline: auto;
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
    height: 100%;
    object-fit: cover;
    width: 100%;
    border: 1px solid black;
    &.visible {
      opacity: 1;
    };
    &.hidden {
      opacity: 0;
    };
    
`
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
    display: none;
};
`
interface GeneralMoviesProps<T> {
  pureList: T[];
}

const SearchItems = <T extends Cast & Crew>({ pureList }: GeneralMoviesProps<T>) => {

  const searchValue = useAppSelector(state => state.movies.searchValue)
  const navigate = useNavigate()

  const handleClick = (type: string, id: number) => {
    if (type === "person") {
      navigate(`/person/${id}`)
    } else if (type === "movie") {
      navigate(`/movie/${id}`)
    } else if (type === "tv") {
      navigate(`/serie/${id}`)
    }
  }

  return (
    <Container>
      <SliderHeader header={`Results for: ${searchValue}`} hideButton={true} />
      <MainContainer >

        {pureList.map(item => (
          <ImageContainer onClick={() => handleClick(item.media_type, item.id)} key={item.id}>
            <ImageBox className="a">
              {item.media_type === "person" ? (
                <LazyLoadImage
                  src={item.profile_path ? `https://image.tmdb.org/t/p/original/${item.profile_path}` : DefaultImage}
                  width="100%"
                  height="100%"
                  effect="blur"

                />
              ) : (
                <LazyLoadImage
                  src={item.poster_path || item.backdrop_path ? `https://image.tmdb.org/t/p/original/${item.poster_path ? item.poster_path : item.backdrop_path}` : DefaultImage}
                  width="100%"
                  height="100%"
                  effect="blur"

                />
              )}

            </ImageBox>
            {item.media_type === "person" ? (
              <InfoBox>
                <Typography sx={{ color: "white" }}>{item.name}</Typography>
              </InfoBox>
            ) :
              (
                <InfoBox>
                  <RatingBox>
                    <StyledRating precision={0.1} name="read-only" size="small" value={item.vote_average / 2} readOnly />
                    <Typography sx={{ color: "gray" }}>{item.vote_average}</Typography>
                  </RatingBox>
                  <Typography sx={{ color: "white" }}>{item.original_title ? item.original_title.slice(0, 20) : item.name.slice(0, 20)}</Typography>
                </InfoBox>
              )
            }
          </ImageContainer>
        ))}

      </MainContainer>
    </Container>

  )
}

export default SearchItems