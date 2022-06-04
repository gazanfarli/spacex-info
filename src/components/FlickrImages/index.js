import React from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./index.css";

function FlickrImages({ images }) {
  return (
    <div style={{width: "55%", margin: "5rem auto 0 auto", background: "#111", borderRadius: "0.5rem"}}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {images.map((item) => {
          return (
            <SwiperSlide key={item}>
              <img className="flickr_image" src={item} alt="flickr_image" key={item} />
            </SwiperSlide>
          );
        })}
        ...
      </Swiper>
    </div>
  );
}

export default FlickrImages;
