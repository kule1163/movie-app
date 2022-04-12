import React from 'react'
import { Typography } from '@mui/material'
import {SerieType } from '../../../../utils/movieTypes'
import { useNavigate } from 'react-router'
import {AnchorsBox,ContentTextBox,DetailTextBox,IconAnchor,Image,LinkText,MainContent,SingleDetailTextBox,Title} from "../../overviewStyles"
import Icons from '../../singleMoviePage/overview/Icons';

export interface OverviewProps {
  data: SerieType;
}

const Overview = ({data}: OverviewProps) => {
  
  const navigate = useNavigate()
 
  return (
    <MainContent>
      <Image src={`https://image.tmdb.org/t/p/original/${data.backdrop_path ? data.backdrop_path : data.poster_path}`}/>
      <ContentTextBox>
        <Typography sx={{marginBottom: ".5rem"}} variant="h4">Storyline</Typography>
        <Typography variant="body2">{data.overview}</Typography>
        <DetailTextBox>
          {data.first_air_date && (
            <SingleDetailTextBox>
            <Title>First Aired</Title>
            <Typography>{data?.first_air_date}</Typography>
          </SingleDetailTextBox>
          )}
          {data.last_air_date && (
            <SingleDetailTextBox>
            <Title >Last Aired</Title>
            <Typography>{data?.last_air_date}</Typography>
          </SingleDetailTextBox>
          )}
          {data.episode_run_time && (
            <SingleDetailTextBox>
            <Title >Runtime</Title>
            {data?.episode_run_time.map((item, index) => (
              <Typography key={index}>{item}m,</Typography>
            ))}
          </SingleDetailTextBox>
          )}
          {data.genres && (
            <SingleDetailTextBox>
            <Title >Genre</Title>
            <div style={{display: "block"}}>
            {data?.genres.map(item => (
              <LinkText  onClick={() => navigate(`/genre-serie/${item.name}`)} key={item.id}>{item.name}</LinkText>
            ))}
            </div>
          </SingleDetailTextBox>
          )}
          {data.seasons && (
            <SingleDetailTextBox>
            <Title >Seasons</Title>
            {data?.seasons.map(item => (
              <Typography key={item.id}>{item.season_number}</Typography>
            ))}
          </SingleDetailTextBox>
          )}
          {data.number_of_episodes && (
            <SingleDetailTextBox>
            <Title >Episodes</Title>
            <Typography>{data?.number_of_episodes}</Typography>
          </SingleDetailTextBox>
          )}
          {data.status && (
            <SingleDetailTextBox>
            <Title >Status</Title>
            <Typography>{data?.status}</Typography>
          </SingleDetailTextBox>
          )}
          {data.spoken_languages && (
            <SingleDetailTextBox>
            <Title >Language</Title>
            {data?.spoken_languages.map(item => (
              <Typography key={item.name}>{data.spoken_languages.length > 1 ? `${item.english_name},` : `${item.english_name}`}</Typography>
            ))}
          </SingleDetailTextBox>
          )}
          {data.networks && (
            <SingleDetailTextBox>
            <Title >Network</Title>
            {data?.networks.map(item => (
              <Typography key={item.id}>{data.spoken_languages.length > 1 ? `${item.name},` : `${item.name}`}</Typography>
            ))}
          </SingleDetailTextBox>
          )}
        </DetailTextBox>
        <AnchorsBox>
          <Icons data={data}/>
        </AnchorsBox>
      </ContentTextBox>
    </MainContent>
  )
}

export default Overview