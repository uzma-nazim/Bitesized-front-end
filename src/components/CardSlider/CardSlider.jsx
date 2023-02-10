import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import VideoCard from "../VideoCard/VideoCard";

export default function CardSlider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        dot={false}
        showsPagination={false} 
        pagination={{
          clickable: true,
          dots:false
        }}
        
        breakpoints={{
            // when window width is >= 640px
            1400: {
              // width: 640,
              slidesPerView: 4,
            },
            // when window width is >= 768px
            1000: {
              // width: 768,
              slidesPerView: 3,
            },
            700: {
              // width: 768,
              slidesPerView: 2,
            },
            500: {
              // width: 768,
              slidesPerView: 1,
            },
            200: {
              // width: 768,
              slidesPerView: 1,
            },
          }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <VideoCard />
        </SwiperSlide>
        <SwiperSlide>
          <VideoCard />
        </SwiperSlide>
        <SwiperSlide>
          <VideoCard />
        </SwiperSlide>
        <SwiperSlide>
          <VideoCard />
        </SwiperSlide>
        <SwiperSlide>
          <VideoCard />
        </SwiperSlide>
        <SwiperSlide>
          <VideoCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
