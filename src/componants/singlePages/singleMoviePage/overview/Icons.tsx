import React from 'react'
import { SiImdb } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import { SiFacebook} from 'react-icons/si';
import { SiTwitter } from 'react-icons/si';
import {v4 as v4uuid} from "uuid"
import { IconType } from 'react-icons';
import styled from "styled-components"
import { MovieType, SerieType } from '../../../../utils/movieTypes';

export const IconAnchor = styled.a`
  text-decoration: none;
  margin-right: 1rem;
  color: white;
  transition: color 1s ease;
  &:hover{
    color: blue;
  }
`
export interface Icon {
    id: string;
    path: string;
    icon: IconType;
}

interface IconProps {
    data: MovieType | SerieType
}

const Icons = ({data}: IconProps) => {

    const facebook = data?.external_ids.facebook_id
    const twitter = data?.external_ids.twitter_id
    const instagram = data?.external_ids.instagram_id
    const imdb = data?.external_ids.imdb_id
  
    const iconList:Icon[] = [
      {id: v4uuid(),icon: SiFacebook, path: `https://facebook.com/${facebook}`},
      {id: v4uuid(),icon: SiTwitter, path: `https://twitter.com/${twitter}`},
      {id: v4uuid(),icon: SiInstagram, path: `https://instagram.com/${instagram}`},
      {id: v4uuid(),icon: SiImdb, path: `https://www.imdb.com/title/${imdb}`}
  ]
   
  
    return (
        <>
            {iconList.map(item => (
                item && (
                    <IconAnchor key={item.id} href={item.path}>
                        <item.icon size={20}/>
                    </IconAnchor>
                )
            ))}
        </>
    )
}

export default Icons