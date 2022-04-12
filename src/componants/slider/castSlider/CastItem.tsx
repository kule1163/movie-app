import React from "react";
import { Typography } from "@mui/material";
import styled from "styled-components"
import DefaultImage from "../../../assets/defaultPhoto.png"
import { Cast } from "../../../utils/movieTypes";
import 'react-lazy-load-image-component/src/effects/blur.css';
import LazyLoad from "../../lazyLoadImage/LazyLoad";

const InfoBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  background-color: #121212;
  width: 100%;
  color: grey;
  z-index: 50;
  & > p {
    font-size: .7em;
  }
`

interface MovieCastSliderProps {
  item: Cast
}

const CastItem = ({ item }: MovieCastSliderProps) => {
  return (
    <>
      <LazyLoad imageSrc={item.profile_path ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.profile_path}` : DefaultImage} />
      <InfoBox>
        <Typography sx={{ color: "white" }}>{item.name.slice(0, 28)}</Typography>
        {
          item.character && (
            <Typography>{item.character?.slice(0, 28)}</Typography>
          )
        }
      </InfoBox>
    </>
  )
}

export default CastItem