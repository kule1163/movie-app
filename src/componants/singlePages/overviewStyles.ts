import styled from "styled-components"
import { Typography } from "@mui/material"

export const MainContent = styled.div`
    display: inline-flex;
    max-width: 90%;
    margin-inline: auto;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
`

export const Image = styled.img`
  width: 25%;
  height: 60vh;
  object-fit: cover;
  display: block;
  @media (max-width: 1000px) {
    display: none;
  }
`

export const ContentTextBox = styled.div`
  width: 75%;
  margin-left: 2rem;
  & > * {
    color: white;
  };
  @media (max-width: 1000px) {
    margin-left: 0;
    width: 90%;
    margin-inline: auto;
  }
`

export const DetailTextBox = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  row-gap: .3rem;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-block: 1rem;
  @media (max-width: 1000px) {
    grid-template-columns: auto;
  }

`
export const SingleDetailTextBox = styled.div`
  display: flex;
  width: 30vw;
  @media (max-width: 1000px) {
    width: 100%;
  }
  
`
export const AnchorsBox = styled.div`
  display: flex;
  
`
export const IconAnchor = styled.a`
  text-decoration: none;
  margin-right: 1rem;
  color: white;
  transition: color 1s ease;
  &:hover{
    color: blue;
  }
`
export const LinkText = styled(Typography)`
  color: blue;
  cursor: pointer;
  display: inline-flex;
`

export const Title = styled(Typography)`
  min-width: 120px;
`