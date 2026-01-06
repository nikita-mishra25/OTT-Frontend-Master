import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import movieData from "../components/movvie.json";

const MovieList = (props) => {
  const list = movieData.movie;
  return (
    <>
      <section className="movieListSection commonContainer">
        <h6 className="pageHeading">{props.title}</h6>
        <div className="movieListContainer">
          {/* <div className="commonOverlayLeft"></div>
          <div className="commonOverlayRight"></div> */}
          <Swiper
            className="movieList"
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            spaceBetween={10}
            slidesPerView={8.5}
          >
            {list.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="movieCard">
                  <img src={item.image} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default MovieList;
