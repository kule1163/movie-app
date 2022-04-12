import React from 'react'
import styled from "styled-components"
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

interface HeaderBoxProps {
    width?: string
}

const HeaderBox = styled.div<HeaderBoxProps>`
    display: flex;
    align-items: center;
    width: ${props => props.width ? "100%" : "90%"};
    margin-inline: auto;
    padding: 2rem 0 1rem 0;
    @media (max-width: 500px) {
    };
`
const Anchor = styled(Typography)`
    color: blue;
    cursor: pointer;
    font-size: .8em;
    @media (max-width: 650px) {
        margin-top: .5rem;
    };
`
interface SliderHeaderProps {
    header: string;
    hideButton?: boolean;
    category?: string;
    mainType?: "movies" | "series";
    width?: string
}

const SliderHeader = ({ width, header, hideButton, category, mainType }: SliderHeaderProps) => {

    const navigate = useNavigate()

    return (
        <HeaderBox width={width}>
            <Typography sx={{ marginRight: "1rem !important", color: "white", fontSize: "1.5em" }} variant="h4">{header}</Typography>
            {hideButton
                ? null :
                (
                    <Anchor onClick={() => navigate(`/${mainType}/category/${category}`)}>explore all</Anchor>
                )}
        </HeaderBox>
    )
}

export default SliderHeader