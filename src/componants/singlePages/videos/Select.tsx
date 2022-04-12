import React, { ChangeEvent } from 'react'
import styled from "styled-components"
import { Video } from "../../../utils/movieTypes"
import { grey } from "@mui/material/colors"
import { Typography } from '@mui/material'
import { MediaProps } from '../../directorPage/credits/CreditsDetail'

const MainContainer = styled.div`
    display: inline-flex;
    margin-block: 2rem;
    margin-right: 3rem;
`

const Selector = styled.select`
    color: white;
    background-color: ${grey[800]};
    border: none;
    outline: none;
    width: 100px;
    padding-block: .5rem;
`

const Option = styled.option`

`

interface SelectProps {
    videos?: Video[];
    setType: React.Dispatch<React.SetStateAction<string>>;
    options: MediaProps[];
    name: string;
}

const Select = ({ videos, setType, options, name }: SelectProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setType(event.target.value as string);
    };

    return (
        <MainContainer>
            <Selector onChange={(e) => handleChange(e)}>
                {options.map(item => (
                    <Option value={item.option} key={item.text}>{item.text}</Option>
                ))}
            </Selector>
            <Typography sx={{ display: "flex", color: `${grey[800]}`, marginLeft: "1rem" }}> {name}</Typography>
        </MainContainer>
    )
}

export default Select