import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import styled from "styled-components"
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

const HeaderLine = styled.div`
  display: inline-flex;
  align-items: center;
  top: 0;
  padding-block: 1rem;
  background-color: black;
  position: fixed;
  width: 100%;
  display: none;
  z-index: 100;
    @media (max-width: 1000px) {
      display: block;
    }
`
const HeaderLineBox = styled.div`
  width: 95%;
  display: flex;
  margin-inline: auto;
  position: relative;
 
`

const Info = styled(Typography)`
display: inline-flex;
color: white;
position: absolute;
left: 50%;
transform: translateX(-50%);
`

interface InfoLineProps {
  info: string
}

const InfoLine = ({ info }: InfoLineProps) => {

  const navigate = useNavigate()

  return (
    <HeaderLine>
      <HeaderLineBox>
        <IoIosArrowBack
          onClick={() => navigate(-1)}
          style={{ marginRight: "auto", color: "white", cursor: "pointer" }}
          size={25}
        />
        <Info>{info}</Info>
      </HeaderLineBox>

    </HeaderLine>
  )
}

export default InfoLine