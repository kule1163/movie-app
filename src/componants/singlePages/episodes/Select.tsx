import React, { ChangeEvent } from 'react'
import styled from "styled-components"
import { Video } from "../../../utils/movieTypes"
import { grey } from "@mui/material/colors"
import { Typography } from '@mui/material'

const MainContainer = styled.div`
    display: inline-flex;
    margin-block: 2rem;
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
    totalSeason: number;
    setSeasonNum: React.Dispatch<React.SetStateAction<string>>
}

const Select = ({ setSeasonNum, totalSeason }: SelectProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSeasonNum(event.target.value as string);
    };

    return (
        <MainContainer>
            <Selector onChange={(e) => handleChange(e)}>
                {Array.from({ length: totalSeason }, (v, i) => i + 1).map(item => (
                    <Option key={item}>{item.toString()}</Option>
                ))}
            </Selector>
            <Typography sx={{ display: "flex", color: `${grey[800]}`, marginLeft: "1rem" }}>season</Typography>
        </MainContainer>
    )
}

export default Select