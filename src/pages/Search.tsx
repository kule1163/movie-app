import React, { useEffect, Suspense, useState } from 'react'
import styled from 'styled-components'

import {grey} from "@mui/material/colors"
import { useInView } from 'react-intersection-observer'

import GeneralMovies from '../componants/GeneralMovies'
import SliderHeader from '../componants/slider/SliderHeader'
import { useGetSearchQuery } from '../services/movies'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import MainMovieSlider from "../componants/slider/moviesSliders/MainMovieSlider"
import { Cast, Crew, MovieType, PersonType, SerieType } from '../utils/movieTypes'
import Images from "../componants/slider/Images"
import CastItem from '../componants/slider/castSlider/CastItem'

import SearchItems from "../componants/navbar/SearchItems"
import { useNavigate, useParams } from 'react-router-dom'
import Home from './menuPages/Home'
import { setSearchValue, setToggleSearchBar } from '../features/movies/moviesSlice'
import {ContentContainer } from "./styles"

interface SearchResultsProps{
    resultss: MovieType[] | SerieType[]
}

const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #121212;
`

const Search = () => {

  const navigate = useNavigate()

  const searchValue = useAppSelector(state => state.movies.searchValue)
  const toggleSearchBar = useAppSelector(state => state.movies.toggleSearchBar)
  const count = useAppSelector(state => state.movies.changeCount)
  const dispatch = useAppDispatch()
  const {query} = useParams()  

  const {data, isLoading, error} = useGetSearchQuery(query ? query : "*")
   

  const [d, setD] = useState<(Cast&Crew)[]>([])
  
  const res:(Cast&Crew)[] = data?.results;

  const pureList = res?.reduce((acc, x) => acc.concat(acc.find(y => y.id === x.id) ? [] : [x]), [] as (Cast&Crew)[])
  
 /*   const moviesSeries:Crew[] = res?.filter(item => item.media_type !== "person")
   const person:Cast[] = res?.filter(item => item.media_type === "person")
    
  const purems = moviesSeries?.reduce((acc, x) => acc.concat(acc.find(y => y.id === x.id) ? [] : [x]), [] as Crew[])
  const purep = person?.reduce((acc, x) => acc.concat(acc.find(y => y.id === x.id) ? [] : [x]), [] as Cast[]) */

 /*  useEffect(() => {
    if(moviesSeries)
  }) */

/*   useEffect(() => {
    
  },[searchValue])
 */

  useEffect(() => {
    dispatch(setToggleSearchBar(true))
    dispatch(setSearchValue(query)) 
  }, [searchValue])

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count))
  }, [searchValue])

  return (
    <div style={{display: "flex"}}>
       <ContentContainer>
      {error ? (
        <p>aaaaaaaaaaa</p>
      ) : isLoading ? (
        <LoadingContainer />
      ) : data && (
          <>
            <SearchItems pureList={pureList}/>
          </>
      )}
        
        </ContentContainer> 
        
    </div>
  )
}

export default Search