import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGetSearchQuery } from '../services/movies'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { Cast, Crew } from '../utils/movieTypes'
import SearchItems from "../componants/navbar/SearchItems"
import { setSearchValue, setToggleSearchBar } from '../features/movies/moviesSlice'
import {ContentContainer } from "./styles"
import {useParams} from "react-router-dom"

const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #121212;
`

const Search = () => {
  const searchValue = useAppSelector(state => state.movies.searchValue)
  const count = useAppSelector(state => state.movies.changeCount)
  const dispatch = useAppDispatch()
  const {query} = useParams()  

  const {data, isLoading, error} = useGetSearchQuery(query ? query : "*")
   

  const res:(Cast&Crew)[] = data?.results;

  const pureList = res?.reduce((acc, x) => acc.concat(acc.find(y => y.id === x.id) ? [] : [x]), [] as (Cast&Crew)[])
  
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
        <p></p>
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