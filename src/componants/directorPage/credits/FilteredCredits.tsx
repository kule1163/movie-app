import { Typography } from '@mui/material'
import React from 'react'
import styled from "styled-components"
import { Cast, Crew } from '../../../utils/movieTypes'
import SliderHeader from '../../slider/SliderHeader'

interface InfoBoxProps {
    hope: string
}

const MainContainer = styled.div`
    width: 100%;
    margin-inline: auto;
`

const InfoBox = styled.div<InfoBoxProps>`
    display: inline-flex;
    padding-block: 1rem;
    width: 100%;
    color: white;
    background-color: ${props => props.hope === "true" ? "black" : "none"};
`

const Year = styled.div`
    padding-left: 1rem;
    min-width: 60px;
`

interface FilteredCreditsProps<T> {
    creditsType: T[];
    header: string;
}

const FilteredCredits = <T extends Cast | Crew>({creditsType, header}: FilteredCreditsProps<T>) => {    
    
    const pureList = creditsType.reduce((acc, x) => acc.concat(acc.find(y => y.id === x.id) ? [] : [x]), [] as ((Cast | Crew)[]))
    
    return (
    <>
        <SliderHeader width="100%" hideButton={true} header={header}/>
        <MainContainer>
            {pureList.map(item => (
                <InfoBox hope={item.exmp} key={item.id}>
                    <Year >{item.release_date ? `${item.release_date.slice(0,4)}` : "-"}</Year>
                    <Typography sx={{wordBreak: "break-word"}}>
                        {item.media_type === "movie" ? 
                            item.original_title :
                            item.original_name
                        } 
                        {item.character ? 
                            (<span style={{color: "gray"}}> {item.character && (<span style={{color: "gray"}}>as</span>)} {item.character}</span>) : 
                            (<span style={{color: "gray"}}> {item.job && (<span style={{color: "gray"}}>as</span>)} {item.job}</span>)
                        }
                    </Typography>
                </InfoBox>
            ))}
        </MainContainer>
    </>
  )
}

export default FilteredCredits