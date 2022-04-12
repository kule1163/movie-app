import React from "react";
import { grey } from "@mui/material/colors"
import styled from "styled-components";
import { useGetTopRatedMoviesQuery } from "../../../services/movies";
import MainMovieSlider from "./MainMovieSlider";
import SliderHeader from "../SliderHeader";
import { Rating } from "@mui/material";

const TopRatedMovies = () => {

  const { isLoading, data, error } = useGetTopRatedMoviesQuery("1")

  return (
    <>
      {error ? (
        <p>Oh no, there was an error</p>
      ) : !isLoading && data && (
        <>
          <SliderHeader category="toprated" mainType="movies" header="Top Rated Movies" />
          <MainMovieSlider currentType='movie' data={data} />
        </>
      )
      }
    </>
  );
}

export default TopRatedMovies