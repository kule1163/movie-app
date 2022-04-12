import { Typography } from '@mui/material'
import React from 'react'
import styled from "styled-components"
import { socialIcons } from '../utils/socialIcons'

const MainContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    width: 90%;
    margin-inline: auto;
    margin-top: 2rem;
    padding-bottom: 60px;
`
const SocialIconBox = styled.div`
    display: inline-flex;
    margin-top: 2rem;
    & > *{
        color: gray;
    }
`
const SingleIconBox = styled.div`
    cursor: pointer;
    &:not(:last-child) {
        margin-right: 1.5rem;
    }
    &:hover {
        color: white;
    }
`
const FooterText = styled(Typography)`
    color: gray;
    font-size: 1em !important;
    @media (max-width: 600px) {
        font-size: .8em !important;
    };
`
const Footer = () => {
  return (
    <MainContainer>
        <FooterText>© 2022 Jason Ujma-Alvis. All rights reserved. Cookie Policy.</FooterText>
        <FooterText>Designed and built by me, data provided by TMDb.</FooterText>
        <SocialIconBox>
            {socialIcons.map(item => (
                <SingleIconBox key={item.id}>
                    <item.icon size={30} />
                </SingleIconBox>
            ))}
        </SocialIconBox>
    </MainContainer>
  )
}

export default Footer