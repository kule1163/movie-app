import React, { useEffect, useRef, useState } from 'react'
import { useGetMovieByIdQuery } from '../../services/movies'
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { MovieType } from '../../utils/movieTypes';
import 'react-lazy-load-image-component/src/effects/blur.css';
import gsap from "gsap"
import { useAppDispatch } from '../../app/hooks';
import { setPanelLoading } from '../../features/movies/moviesSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import DefaultImage from "../../assets/defaultPhoto.png"
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

interface MoviePanelProps {
    random?: number;
}


const MoviePanel = ({ random }: MoviePanelProps) => {

    const [key, setKey] = useState<string>("")

    const dispatch = useAppDispatch()
    const { id } = useParams()

    const { data, error, isLoading } = useGetMovieByIdQuery(id ? id : random)

    const d: MovieType = data

    useEffect(() => {
        dispatch(setPanelLoading(isLoading))
    }, [isLoading])

    const handleTrailer = async () => {
        if (data) {
            try {
                const fetchData = await fetch(`https://api.themoviedb.org/3/movie/${data?.id}/videos?api_key=31af07621087a710376eeeff33ef9885&language=en-US`)
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
                <>
                    <div style={{ backgroundColor: "#121212", height: "70vh" }}></div>
                </>
            ) : d && (
                <div ref={el}>
                    <MainContainer
                        className="container"
                    >
                        <TextContentBox className='text'>
                            {d.original_title && (<TitleText variant='h4'>{d.original_title}</TitleText>)}
                            <FeaturesBox >
                                <FeaturesRantingBox>
                                    <StyledRating precision={0.1} size="small" name="read-only" value={d.vote_average / 2} readOnly />
                                    {d.vote_count && (<Typography style={{ marginLeft: "1rem" }}>voted {d.vote_count}</Typography>)}
                                </FeaturesRantingBox>
                                <FeaturesTextBox>
                                    {d.release_date && (<Typography>{d.release_date.slice(0, 4)}</Typography>)}
                                    {d.runtime && (<Typography>{Math.floor(d.runtime / 60)}h {d.runtime % 60}m</Typography>)}
                                    {d.original_language && (<Typography >{d.original_language}</Typography>)}
                                </FeaturesTextBox>
                            </FeaturesBox>
                            {d.overview && (
                                <DescriptionText>
                                    {`${d.overview.slice(0, 170)}...`}
                                </DescriptionText>
                            )}
                            {key && (
                                <Button target="_blank" href={`https://www.youtube.com/watch?v=${key}`}>
                                    <Arrow />
                                    <p>Watch Trailer</p>
                                </Button>
                            )}
                        </TextContentBox>
                        {key && (
                            <PlayButtonBox target="_blank" href={`https://www.youtube.com/watch?v=${key}`}>
                                <AiOutlinePlayCircle size={50} />
                            </PlayButtonBox>
                        )}
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

export default MoviePanel