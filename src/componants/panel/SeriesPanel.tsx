import React, { useEffect, useState, useRef } from 'react'
import { useGetSeriesByIdQuery } from '../../services/movies'
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { SerieType } from '../../utils/movieTypes';
import { gsap } from "gsap"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import DefaultImage from "../../assets/defaultPhoto.png";
import {
    MainContainer,
    TextContentBox,
    FeaturesBox,
    FeaturesRantingBox,
    FeaturesTextBox,
    Arrow,
    Button,
    DescriptionText,
    Image,
    ImageOverlay,
    PlayButtonBox,
    StarBox,
    StyledRating,
    TitleText
} from "./panelStyles"



interface SeriesPanelProps {
    populerSeriesId?: number[]
    random?: number;
}

const SeriesPanel = ({ populerSeriesId, random }: SeriesPanelProps) => {

    const { id } = useParams()

    const { data, error, isLoading } = useGetSeriesByIdQuery(id ? id : random)

    const d: SerieType = data

    const [key, setKey] = useState<string>("")



    const handleTrailer = async () => {
        if (data) {
            try {
                const fetchData = await fetch(`https://api.themoviedb.org/3/tv/${d.id}/videos?api_key=31af07621087a710376eeeff33ef9885`)
                const fetchResult = await fetchData.json();
                const key = fetchResult.results[0].key;

                setKey(key)
            } catch (error) {
                console.log(error);

            }
        }
    }

    const el = useRef<HTMLDivElement>(null)
    const q = gsap.utils.selector(el)
    const tl = useRef<GSAPTimeline>()

    useEffect(() => {
        if (!isLoading) {
            tl.current = gsap.timeline()
                .fromTo(q(".text"), { autoAlpha: 0, opacity: 0, y: 30 }, { autoAlpha: 1, opacity: 1, y: 0, delay: .5, duration: .5 })
        }

    }, [isLoading])

    useEffect(() => {
        handleTrailer()
    }, [data])

    return (
        <>
            {error ? (
                <p>Oh no, there was an error</p>
            ) : isLoading ? (
                <div style={{ backgroundColor: "#121212", height: "70vh" }}></div>
            ) : d && (
                <div >
                    <MainContainer
                        className="container"
                        ref={el}
                    >
                        <TextContentBox className='text'>
                            <TitleText variant='h4'>{d.name}</TitleText>
                            <FeaturesBox >
                                <FeaturesRantingBox>
                                    {d.vote_average > 0 && (
                                        <>
                                            <StyledRating precision={0.1} value={d.vote_average / 2} size="small" name="read-only" readOnly />
                                            <Typography style={{ marginLeft: "1rem" }}>voted {d.vote_count}</Typography>
                                        </>
                                    )}
                                </FeaturesRantingBox>
                                <FeaturesTextBox>
                                    {d.number_of_seasons && (<Typography>season {d.number_of_seasons}</Typography>)}
                                    {d.first_air_date && (<Typography>{d.first_air_date.slice(0, 4)}</Typography>)}
                                    <Typography >Batu. TV-Ma</Typography>
                                </FeaturesTextBox>
                            </FeaturesBox>
                            {d.overview && (<DescriptionText>
                                {`${data.overview?.slice(0, 170)}...`}
                            </DescriptionText>)}
                            <Button target="_blank" href={`https://www.youtube.com/watch?v=${key}`}>
                                <Arrow />
                                <p>Watch Trailer</p>
                            </Button>
                        </TextContentBox>
                        <PlayButtonBox target="_blank" href={`https://www.youtube.com/watch?v=${key}`}>
                            <AiOutlinePlayCircle size={50} />
                        </PlayButtonBox>
                        <Image>
                            <LazyLoadImage
                                src={d.backdrop_path || d.poster_path ? `https://image.tmdb.org/t/p/original/${d.backdrop_path ? d.backdrop_path : d.poster_path}` : DefaultImage}
                                width="100%"
                                height="100%"
                                effect="blur"

                            />
                        </Image>
                        <ImageOverlay></ImageOverlay>
                    </MainContainer>
                </div>
            )
            }


        </>
    )
}

export default SeriesPanel