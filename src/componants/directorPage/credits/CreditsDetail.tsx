import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import {Crew, Cast} from "../../../utils/movieTypes"
import Select from '../../singlePages/videos/Select'
import FilteredCredits from './FilteredCredits'


const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-inline: auto;
    @media (max-width: 600) {
      width: 95%;
    }
`
const SectionContainer = styled.div`
  &.show {
    display: block;
  }
  &.hide {
    display: none;
  }
`
const SelectBox = styled.div`
  display: inline-flex;
  width: 100%;
  flex-wrap: wrap;
  margin-inline: auto;

`

interface CreditsDetailProps {
    credits: {
        crew: Crew[];
        cast: Cast[];
    }
}

export interface MediaProps {
  text: string;
  option: string;
 }

 

const CreditsDetail = ({credits}: CreditsDetailProps) => {

  const [direct, setDirect] = useState([] as Crew[])
  const [production, setProduction] = useState([] as Crew[])
  const [writer, setWriter] = useState([] as Crew[])
  const [cast, setCast] = useState([] as Cast[])
  const [type, setType] = useState<string>("All")
  const [mediaType, setMediaType] = useState<string>("All")

  
  const filteredCast = credits.cast.filter(item => item.media_type.includes(mediaType))
  const castt = mediaType === "All" ? credits.cast : filteredCast
  const filteredDirecting = credits.crew.filter(item => item.media_type.includes(mediaType))
  const directt = mediaType === "All" ? credits.crew : filteredDirecting
  const filteredProduction = credits.crew.filter(item => item.media_type.includes(mediaType))
  const productionn = mediaType === "All" ? credits.crew : filteredProduction
  const filteredWriting = credits.crew.filter(item => item.media_type.includes(mediaType))
  const writingg = mediaType === "All" ? credits.crew : filteredWriting

  const castYear = castt.filter(item => item.release_date).sort((a,b) => parseInt(a.release_date.slice(0,4)) - parseInt(b.release_date.slice(0,4)))
  const castNon = castt.filter(item => !item.release_date)


  const productionYear = productionn.filter(item => item.department === "Production").filter(item => item.release_date).sort((a,b) => parseInt(a.release_date.slice(0,4)) - parseInt(b.release_date.slice(0,4)))
  const productionNon = production.filter(item => item.department === "Production").filter(item => !item.release_date)
   
  const writerYear = writingg.filter(item => item.department === "Writing").filter(item => item.release_date).sort((a,b) => parseInt(a.release_date.slice(0,4)) - parseInt(b.release_date.slice(0,4)))
  const writerNon = writingg.filter(item => item.department === "Writing").filter(item => !item.release_date)
  
  const directYear = directt.filter(item => item.department === "Directing").filter(item => item.release_date).sort((a,b) => parseInt(a.release_date.slice(0,4)) - parseInt(b.release_date.slice(0,4)))
  const directNon = directt.filter(item => item.department === "Directing").filter(item => !item.release_date)
  
  const hope = <T extends Crew | Cast>(yearArray:T[], nonYearArray:T[]):T[] => {
    const a = Array.from(new Set(yearArray.map(item => item.release_date.slice(0,4))))   
    let b:T[] = []
    let c:T[] = []
    nonYearArray.forEach(item => c.push({...item, exmp: "true"}))
    a.forEach(item => {
      if((a.indexOf(item) % 2) === 1) {
        const w = yearArray.filter(year => year.release_date.slice(0,4) === item).map(i => ({...i, exmp: "true"}))
        w.forEach(item => b.push(item));
      } else {
        const y = yearArray.filter(year => year.release_date.slice(0,4) === item).map(i => ({...i, exmp: "false"}))
        y.forEach(item => b.push(item));
      }
    })
    return c.concat(b)
  }
 
 useEffect(() => {
    const d = hope(directYear, directNon)
    const p = hope(productionYear, productionNon)
    const w = hope(writerYear, writerNon)
    const c = hope(castYear, castNon)

    setDirect(d)
    setProduction(p)
    setWriter(w)
    setCast(c)
 },[mediaType,])


  const job:MediaProps[] = [
    {text: "All", option: "All"},
  ]

  credits.cast.length > 0 && job.push({text: "Acting", option: "Acting"})
  credits.crew.filter(item => item.department === "Directing").length > 0 && job.push({text:"Directing", option:"Directing"})
  credits.crew.filter(item => item.department === "Production").length > 0 && job.push({text:"Production", option:"Production"})
  credits.crew.filter(item => item.department === "Writing").length > 0 && job.push({text:"Writing", option:"Writing"})

  const media:MediaProps[] = [
    {text: "All", option: "All"},
    {text: "Movie", option: "movie"},
    {text: "Tv-Show", option: "tv"}
  ]

  return (
    <MainContainer>
       
          <SelectBox>
            <Select setType={setType} options={job} name="departmant"/>
            <Select setType={setMediaType} options={media} name="media"/>
          </SelectBox>
          {castt.length > 0 && (
            <SectionContainer className={(type === "All" || type === "Acting") ? "show" : "hide"}>
              <FilteredCredits header='Acting' creditsType={cast}/>
            </SectionContainer>
          )}
          {directt.filter(item => item.department === "Directing").length > 0 && (
            <SectionContainer className={(type === "All" || type === "Directing") ? "show" : "hide"}>
              <FilteredCredits header='Directing' creditsType={direct}/>
            </SectionContainer>
          )}
          {productionn.filter(item => item.department === "Production").length > 0 && (
            <SectionContainer className={(type === "All" || type === "Production") ? "show" : "hide"}>
              <FilteredCredits header='Production' creditsType={production}/>
            </SectionContainer>
          )}
          {writingg.filter(item => item.department === "Writing").length > 0 && (
            <SectionContainer className={(type === "All" || type === "Writing") ? "show" : "hide"}>
                 <FilteredCredits header='Writing' creditsType={writer}/>
            </SectionContainer>
          )}
       
    </MainContainer>
  )
}

export default CreditsDetail