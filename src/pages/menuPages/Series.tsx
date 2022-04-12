import React, { useEffect, useState } from 'react'
import Menu from '../../componants/navbar/Menu'
import styled from 'styled-components'
import MainContent from '../../componants/seriesPageContent/MainContent'
import Footer from '../../componants/Footer'
import SeriesPanel from '../../componants/panel/SeriesPanel'
import { useGetPopulerSeriesQuery } from '../../services/movies'
import { SerieType } from '../../utils/movieTypes'
import {ContentContainer, LoadingContainer} from "../styles"

interface Data {
  results: SerieType[]
}

const Series = () => {

  const { data, isLoading, error } = useGetPopulerSeriesQuery("1")

  const d: Data = data
  const [randomId, setRandomId] = useState<number>()

  const ids = d?.results.map(item => item.id)

  useEffect(() => {
    if (ids) {
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
        <div style={{ display: "flex" }}>
          <ContentContainer>
            <SeriesPanel random={randomId} populerSeriesId={ids} />
            <MainContent />
            <Footer />
          </ContentContainer>
        </div>
      )}
    </>
  )
}

export default Series