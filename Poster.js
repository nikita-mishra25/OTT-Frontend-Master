import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import posterData from "../components/poster.json";

const Poster = (props) => {
    const list = posterData.movie;
  return (
    <>
      <section class="commonContainer posterSection">
      <h6 className="pageHeading">{props.title}</h6>
        <Swiper
          className=""
          modules={[Autoplay]}
        //   autoplay={{
        //     delay: 3000,
        //     disableOnInteraction: false,
        //     pauseOnMouseEnter: true,
        //   }}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
        >
          {list.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="posterDiv">
                <img src={item.image} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Poster;
