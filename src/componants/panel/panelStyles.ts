import styled from "styled-components"
import {grey} from "@mui/material/colors"
import {Typography, Rating} from "@mui/material"

export const MainContainer = styled.div`
    width: 100%;
    height: 70vh;
    margin-left: auto;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    @media (max-width: 1000px){
        align-items: end;
        height: 80vh;
    };
    @media (max-width: 770px){
        align-items: end;
        height: 60vh;
    };
    @media (max-device-width: 1000px) and (max-device-height: 1300px){
            align-items: end;
            height: 45vh;   
    };
    @media (max-device-width: 1000px) and (max-device-height: 500px){
            align-items: end;
            height: 470px;
    };

`

export const TextContentBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    z-index: 3;
    margin-left: 4rem;
    @media (max-width: 1000px) {
        width: 90%;
        margin-bottom: 1rem;
        margin-left: 2rem;
    };
    @media (max-width: 770px) {
        margin-bottom: 1rem;
        margin-left: 1rem;
        display: inline-flex;
        width: auto;
    };
`


export const StarBox = styled.div`

`
export const FeaturesBox = styled.div`
 display: flex;
 margin-block: .7rem;
 align-items: end;
 justify-content: start;
 & > * {
     color: ${grey[500]};
     margin-right: 1rem;
     font-size: 1em;
 };
 @media (max-width: 1000px) {
        flex-direction: column;
        align-items: start;
        justify-content: start;
        width: 57vw;
};
 @media (max-width: 770px) {
        flex-direction: column;
        align-items: start;
        justify-content: start;
        width: 45vw;
};
@media (max-width: 550px) {
        flex-direction: column;
        align-items: start;
        justify-content: start;
        width: 60vw;
};
`

export const FeaturesRantingBox = styled.div`
    display: flex;
    align-items: center;
    & > p{
        margin-left: 1rem;
    };
    @media (max-width: 1000px) {
        width: 60%;
        justify-content: space-between;
};
    @media (max-width: 770px) {
        width: 100%;
        & > p{
        margin-left: auto;
    };
};  
`

export const FeaturesTextBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & > p:not(:last-child) {
     margin-right: 1rem;
    };
    @media (max-width: 1000px) {
        width: 60%;
        justify-content: space-between;
};
    @media (max-width: 770px) {
        & > p {
     margin-right: 0;
    };
        justify-content: space-between;
        width: 100%;
        margin-top: .5rem;
    }

`

export const DescriptionText = styled(Typography)`
    color: white;
    display: block;
    @media (max-width: 770px) {
        display: none;
    };
`

export const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${grey[900]};
    color: white;
    width: 150px;
    font-size: 1em;
    cursor: pointer;
    text-decoration: none;
    margin-top: 2rem;
    @media (max-width: 1000px) {
        display: none;
    };
`

export const Arrow = styled.div`
    width: 0; 
    height: 0; 
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid white;
    margin-right: .5rem;
`

export const PlayButtonBox = styled.a`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 3;
    transform: translate(-50%,-50%);
    cursor: pointer;
    display: none;
    & > * {
        color: white;
    };
    @media (max-width: 1000px) {
        display: block;
    };
    @media (max-device-width: 1000px) and (max-device-height: 500px){
            margin-top: -15vh !important;
    };
`
export const TitleText = styled(Typography)`
    color: white;
`
export const StyledRating = styled(Rating)`
    & .MuiRating-iconFilled {
        color: blue;
    };

    & .MuiRating-iconEmpty {
        color: blue;
    }
`

export const Image = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    & img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`

export const ImageOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(to left, transparent 0%, black 100%);
    z-index: 2;
    @media (max-width: 1000px) {
        background-image: linear-gradient(to bottom, transparent 0%, black 100%); 
    };
`
