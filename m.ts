
interface MainContainerProps {
    img: string;
    theme: Theme;
}
const MainContainer = styled.div<MainContainerProps>`
    width: 100%;
    min-height: 70vh;
    margin-left: auto;
    display: flex;
    align-items: center;
    padding-left: 5rem;
    box-sizing: border-box;
    background-image: linear-gradient(to left, transparent 0%, black 100%), ${props => props.img};
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    position: relative;
    /* & > * {
        margin-bottom: 0;
    }; */
    @media (max-width: 1000px) {
        background-image: linear-gradient(to bottom, transparent 0%, black 100%), ${props => props.img};
        align-items: end;
        padding-left: 3rem;
        
    };
    @media (max-width: 770px) {
        padding-left: 1rem;
    };
`

const TextContentBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
   
    @media (max-width: 1000px) {
        width: 90%;
        margin-bottom: 1rem;
    };
    @media (max-width: 770px) {
        margin-bottom: 1rem;
        display: inline-flex;
       /*  border: 1px solid red; */
        width: auto;
    };
`
/* const ImgBox = styled.div`
    width: 100%;
    height: ;
` */

const StarBox = styled.div`

`
const FeaturesBox = styled.div`
 display: flex;
 /* border: 1px solid red; */
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
        width: 57vw;
};
`

const FeaturesRantingBox = styled.div`
    display: flex;
    align-items: center;
    & > p{
        margin-left: 1rem;
    };
    @media (max-width: 770px) {
        width: 100%;
        & > p{
        margin-left: auto !important;
    };
};  
`

const FeaturesTextBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & > p {
     margin-right: 1rem;
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

const DescriptionText = styled(Typography)`
    color: white;
    display: block;
    @media (max-width: 770px) {
        display: none;
    };
`

const Button = styled.a`
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

const Arrow = styled.div`
    width: 0; 
    height: 0; 
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid white;
    margin-right: .5rem;
`

const PlayButtonBox = styled.a`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    cursor: pointer;
    display: none;
    & > * {
        color: white;
    };
    @media (max-width: 1000px) {
        display: block;
    };
`
const TitleText = styled(Typography)`
    color: white;
`
const StyledRating = styled(Rating)`
    & .MuiRating-iconFilled {
        color: blue;
    };

    & .MuiRating-iconEmpty {
        color: blue;
    }
`
