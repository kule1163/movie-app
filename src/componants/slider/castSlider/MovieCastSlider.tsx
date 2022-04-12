import React from "react";
import { useNavigate } from "react-router-dom"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../styles.css";
// import required modules
import { Pagination, Navigation } from "swiper";
import { Cast } from "../../../utils/movieTypes";
import SliderHeader from "../SliderHeader";
import 'react-lazy-load-image-component/src/effects/blur.css';
import CastItem from "./CastItem";

interface MovieCastSliderProps {
  cast: Cast[]
}

const MovieCastSlider = ({ cast }: MovieCastSliderProps) => {

  const navigate = useNavigate()

  return (
    <>
      <SliderHeader header="Cast" hideButton={true}></SliderHeader>
      <Swiper
        spaceBetween={10}
        breakpoints={{
          1100: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },

          650: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          0: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },

        }}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {cast.map(item => (
          <SwiperSlide onClick={() => navigate(`/person/${item.id}`)} key={item.id} >
            <CastItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default MovieCastSlider