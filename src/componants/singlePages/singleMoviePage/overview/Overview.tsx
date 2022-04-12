import { Typography } from '@mui/material'
import React from 'react'
import { MovieType, Cast } from '../../../../utils/movieTypes'
import { IconType } from 'react-icons'
import { useNavigate } from 'react-router-dom'
import {AnchorsBox,ContentTextBox,DetailTextBox,IconAnchor,Image,LinkText,MainContent,SingleDetailTextBox,Title} from "../../overviewStyles"
import Icons from './Icons'

export interface Icon {
  id: string;
  path: string;
  icon: IconType;
}

export interface OverviewProps {
  data: MovieType;
  cast: Cast[];
}

const Overview = ({data}: OverviewProps) => {
  
  const navigate = useNavigate()
  
  const singleCrew = data?.credits.crew.find(item => item.job === "Director")
 
  return (
    <MainContent>
      <Image src={`https://image.tmdb.org/t/p/original/${data.backdrop_path ? data.backdrop_path : data.poster_path}`}/>
      <ContentTextBox>
        <Typography sx={{marginBottom: ".5rem"}} variant="h4">Storyline</Typography>
        <Typography variant="body2">{data.overview}</Typography>
        <DetailTextBox>
          {data?.release_date && (
            <SingleDetailTextBox>
            <Title>Relased</Title>
            <Typography>{data?.release_date}</Typography>
          </SingleDetailTextBox>
          )}
          {singleCrew?.name && (
            <SingleDetailTextBox>
            <Title >Director</Title>
            <LinkText onClick={() => navigate(`/person/${singleCrew?.id}`)}><u>{singleCrew?.name}</u></LinkText>
          </SingleDetailTextBox>
          )}
         {data?.revenue > 0 && (
            <SingleDetailTextBox>
            <Title >Revanue</Title>
            <Typography>${data?.revenue.toLocaleString()}</Typography>
          </SingleDetailTextBox>
         )}
          {data?.status && (
            <SingleDetailTextBox>
            <Title >Statues</Title>
            <Typography>{data?.status}</Typography>
          </SingleDetailTextBox>
          )}
          {data?.runtime && (
            <SingleDetailTextBox>
            <Title >Run Time</Title>
            <Typography>{Math.floor(data.runtime / 60)}h {data.runtime % 60}m</Typography>
          </SingleDetailTextBox>
          )}
          {data?.budget && (
            <SingleDetailTextBox>
            <Title >Budget</Title>
            <Typography>${data?.budget.toLocaleString()}</Typography>
          </SingleDetailTextBox>
          )}
          {data.production_companies && (
            <SingleDetailTextBox>
            <Title >Production</Title>
            <div style={{display: "block"}}>
              {data?.production_companies.map(item => (
                <Typography sx={{display: "inline-flex",}} key={item.id}>{item.name},</Typography>
              ))}
            </div>
          </SingleDetailTextBox>
          )}
          {data.genres && (
            <SingleDetailTextBox>
            <Title >Genre</Title>
              <div style={{display: "block"}}>
                {data?.genres.map(item => (
                  <LinkText onClick={() => navigate(`/genre/${item.name}`)} key={item.id}><u>{item.name}</u>,</LinkText>
                ))}
              </div>
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