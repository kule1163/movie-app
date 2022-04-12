import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../styles.css";
// import required modules
import { Pagination, Navigation } from "swiper";
import { Cast, Crew } from "../../../utils/movieTypes";
import { useNavigate } from "react-router-dom";
import 'react-lazy-load-image-component/src/effects/blur.css';
import Images from "../Images"

interface Data<T> {
  results: T[];
}

interface MainSliderProps<T> {
  data: Data<T>;
  currentType?: "serie" | "movie";
}

const MainSlider = <T extends Cast & Crew>({ data, currentType }: MainSliderProps<T>) => {

  const { results } = data;

  const navigate = useNavigate()

  return (
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
      {results.map(item => (

        <SwiperSlide key={item.id} onClick={() => navigate(`/${currentType}/${item.id}`)}>

          <Images item={item} />

        </SwiperSlide>

      ))}
    </Swiper>

  );
}

export default MainSlider