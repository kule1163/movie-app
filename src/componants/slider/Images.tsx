import React from "react";
import styled from "styled-components";
import { Typography, Rating } from "@mui/material";
import { Crew } from "../../utils/movieTypes";
import { useNavigate } from "react-router-dom";
import DefaultImage from "../../assets/defaultPhoto.png"
import LazyLoad from "../lazyLoadImage/LazyLoad";

const InfoBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-top: .5rem;
  align-items: start;
  justify-content: start;
  background-color: #121212;
  width: 100%;
  color: white;
  @media (max-width: 650px) {
    display: none;
  };
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
    };
    margin-right: 1rem;
`

interface MainSliderProps {
  item: Crew
}

const Images = ({ item }: MainSliderProps) => {

  return (


    <>
      <LazyLoad imageSrc={item.backdrop_path || item.poster_path ? `https://image.tmdb.org/t/p/original/${item.poster_path ? item.poster_path : item.backdrop_path}` : DefaultImage} />
      <InfoBox>
        <Typography sx={{ fontSize: ".8em" }}>{item.original_title ? item.original_title.slice(0, 10) : item.name.slice(0, 10)}</Typography>
        <RatingBox>
          <StyledRating precision={0.1} name="read-only" size="small" value={item.vote_average / 2} readOnly />
          <Typography sx={{ fontSize: ".7em", color: "gray" }}>{item.vote_average}</Typography>
        </RatingBox>
      </InfoBox>
    </>
  );
}

export default Images