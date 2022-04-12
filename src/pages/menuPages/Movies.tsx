import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MoviePanel from '../../componants/panel/MoviePanel'
import MainContent from '../../componants/moviesPageContent/MainContent'
import Footer from '../../componants/Footer'
import { useGetPopulerMoviesQuery } from '../../services/movies'
import { MovieType } from '../../utils/movieTypes'
import {ContentContainer, LoadingContainer} from "../styles"


interface Data {
  results: MovieType[]
}

const Movies = () => {
  
  const { data, isLoading, error } = useGetPopulerMoviesQuery("1")

  const d:Data = data
  const [randomId, setRandomId] = useState<number>()

  const ids = d?.results.map(item => item.id)

 useEffect(() => {
  if(ids) {
    setRandomId(ids[Math.floor(Math.random() * 20)])
  }
}, [data])
  


  return (

  <>
      {error ? (
      <p>Oh no, there was an error</p>
    ) : isLoading ? (
      <LoadingContainer />
    ) : randomId && (
      <div style={{display: "flex"}}>
        <ContentContainer>
          <MoviePanel random={randomId}/>
          <MainContent />
          <Footer />
        </ContentContainer>
        
    </div>
    )} 
  </>
    
  )
}

export default Movies