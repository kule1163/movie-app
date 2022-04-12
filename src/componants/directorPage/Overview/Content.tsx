import React from 'react'
import { PersonType } from '../../../utils/movieTypes'
import styled from "styled-components"
import { Typography } from '@mui/material'
import { SiImdb } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import { SiFacebook } from 'react-icons/si';
import { SiTwitter } from 'react-icons/si';
import { IconType } from 'react-icons'
import { v4 as v4uuid } from "uuid"

const ContentTextBox = styled.div`
  text-align: justify;
  display: inline-flex;
  flex-direction: column;
  & > * {
    color: white;
  };
`
const DetailTextBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: .3rem;
  margin-block: 1rem;
  @media (max-width: 1000px) {
    grid-template-columns: auto;
  }
`
const SingleDetailTextBox = styled.div`
  display: flex;
  @media (max-width: 1000px) {
    width: 100%;
  }
`
const AnchorsBox = styled.div`
  display: flex;
`
const IconAnchor = styled.a`
  text-decoration: none;
  margin-right: 1rem;
  color: white;
  transition: color 1s ease;
  &:hover{
    color: blue;
  }
`
const Title = styled(Typography)`
  min-width: 120px;
`
export interface Icon {
    id: string;
    path: string;
    icon: IconType;
}

interface ContentProps {
    data: PersonType
}

const Content = ({data}: ContentProps) => {
    
    const facebook = data?.external_ids.facebook_id
    const twitter = data?.external_ids.twitter_id
    const instagram = data?.external_ids.instagram_id
    const imdb = data?.external_ids.imdb_id
  
    const iconList: Icon[] = [
      { id: v4uuid(), icon: SiFacebook, path: `https://facebook.com/${facebook}` },
      { id: v4uuid(), icon: SiTwitter, path: `https://twitter.com/${twitter}` },
      { id: v4uuid(), icon: SiInstagram, path: `https://instagram.com/${instagram}` },
      { id: v4uuid(), icon: SiImdb, path: `https://www.imdb.com/title/${imdb}` }
    ]
  
    return (
    <ContentTextBox>
    <DetailTextBox>
      <SingleDetailTextBox>
        <Title>Known For</Title>
        <Typography>{data.known_for_department}</Typography>
      </SingleDetailTextBox>
      <SingleDetailTextBox>
        <Title >Born</Title>
        <Typography>{data.birthday}</Typography>
      </SingleDetailTextBox>
      <SingleDetailTextBox>
        <Title >Place of Birth</Title>
        <Typography>{data.place_of_birth}</Typography>
      </SingleDetailTextBox>
    </DetailTextBox>
    <AnchorsBox>
      {iconList.map(item => (
        item && (
          <IconAnchor key={item.id} href={item.path}>
            <item.icon size={20} />
          </IconAnchor>
        )
      ))}
    </AnchorsBox>
  </ContentTextBox>
  )
}

export default Content