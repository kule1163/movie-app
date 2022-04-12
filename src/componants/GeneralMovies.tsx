import React, { useRef, useEffect, useState, useCallback } from 'react'
import styled from "styled-components"
import { MovieType, SerieType } from '../utils/movieTypes'
import { Rating, Typography } from '@mui/material'
import useFetch from '../useFetch'
import gsap from "gsap"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from 'react-router-dom'
import { grey } from "@mui/material/colors"
import DefaultImage from "../assets/defaultPhoto.png"
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/ClipLoader";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: blue;
`;

const MainContainer = styled.div`
    display: grid;
    gap: .5rem;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    width: 90%;
    margin-inline: auto;
    padding-bottom: 60px;
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
    cursor: pointer;
    flex-direction: column;
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
const FooterLoading = styled.div`
  width: calc(100% - 100px);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  margin-inline: auto;
`
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
    display: none;
};
`
interface GeneralMoviesProps {
  currentUrl: string;
}

const GeneralMovies = ({ currentUrl }: GeneralMoviesProps) => {
  const [page, setPage] = useState(1);
  const url: string = `${currentUrl}&page=${page}`
  const { loading, error, list } = useFetch(url);
  const loader = useRef<HTMLDivElement>(null);

  const l: (MovieType & SerieType)[] = list

  const pureList = l.reduce((acc, x) => acc.concat(acc.find(y => y.id === x.id) ? [] : [x]), [] as (MovieType & SerieType)[]);

  const navigate = useNavigate()

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);
  const revealRef = useRef<HTMLDivElement[]>([])
  revealRef.current = []

  useEffect(() => {
    revealRef.current.forEach((el, index) => {
      gsap.fromTo(el, {
        opacity: 0,
      },
        {
          opacity: 1,
          duration: 2,
          delay: 5
        })
    })
  }, [handleObserver])

  const handleClick = (type: string, id: number) => {
    if (type) {
      navigate(`/serie/${id}`)
    } else {

      navigate(`/movie/${id}`)
    }
  }

  return (
    <>

      <MainContainer>

        {pureList.map(item => (
          <ImageContainer onClick={() => handleClick(item.name, item.id)} key={item.id}>
            <ImageBox className="a">
              <LazyLoadImage
                src={item.backdrop_path || item.poster_path ? `https://image.tmdb.org/t/p/original/${item.poster_path ? item.poster_path : item.backdrop_path}` : DefaultImage}
                width="100%"
                height="100%"
                effect="blur"

              />

            </ImageBox>
            <InfoBox>
              <RatingBox>
                <StyledRating precision={0.1} name="read-only" size="small" value={item.vote_average / 2} readOnly />
                <Typography sx={{ color: "gray" }}>{item.vote_average}</Typography>
              </RatingBox>

              <Typography sx={{ color: "white" }}>{item.original_title ? item.original_title.slice(0, 20) : item.name.slice(0, 20)}</Typography>
            </InfoBox>
          </ImageContainer>
        ))}
        <div ref={loader} />

      </MainContainer>
      {loading &&
        <FooterLoading>
          <PuffLoader css={override} size={150} />
        </FooterLoading>}
      {error && <p>Error!</p>}
    </>

  )
}

export default GeneralMovies