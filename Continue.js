import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import movieData from "../components/continue.json";

const Continue = (props) => {
  const list = movieData.movie;
  return (
    <>
      <section className="movieListSection commonContainer">
        <h6 className="pageHeading">{props.title}</h6>
        <div className="movieListContainer">
          {/* <div className="commonOverlayLeft"></div>
             <div className="commonOverlayRight"></div> */}
          <Swiper
            className="ContinueList"
            modules={[Autoplay]}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            //   pauseOnMouseEnter: true,
            // }}
            loop={true}
            spaceBetween={10}
            slidesPerView={5.5}
          >
            {list.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="continueImg">
                  <img src={item.image} alt="" />
                </div>  
                <h6>{item.title}</h6>
                <span>{item.remain}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Continue;
