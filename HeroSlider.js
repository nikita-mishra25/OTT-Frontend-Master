import React, { useState } from "react";
import { BannerLogo1, BannerLogo2 } from "../components/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/pagination";

const HeroSlider = () => {
  return (
    <>
      <section className="heroSection">
        <Swiper
          className="mySwiper swiperSection"
          modules={[Autoplay]}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          //   pauseOnMouseEnter: true,
          // }}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
        >
         
          <SwiperSlide>
            <div className="bannerContainer heroBanner1">
              <div className="bannerOverlay">
                <div className="bannerHead col-md-4">
                  <img src={BannerLogo2} alt="Banner Img" />
                  <span className="lable">Newly Added</span>
                  <div className="keypoint">
                    <span>2025</span>
                    <span className="keypointLable">U/A 13+</span>
                    <span>1h 58m</span>
                    <span>4 Languages</span>
                  </div>
                  <div className="bannerDescription">
                    Captain America must unravel a nefarious global plot and
                    stop the Red Hulk.
                  </div>
                  <div className="keypoint2">
                    <span>Action</span>
                    <span>Adventure</span>
                    <span>Science Fiction</span>
                    <span>Super Hero</span>
                  </div>
                  <div className="showLanguages">
                    <div className="languageCard">
                      <input
                        name="hindi"
                        id="hindi"
                        value="hindi"
                        type="radio"
                        defaultChecked
                      />
                      <label for="hindi">Hindi</label>
                    </div>
                    <div className="languageCard">
                      <input
                        name="english"
                        id="english"
                        value="english"
                        type="radio"
                      />
                      <label for="english">English</label>
                    </div>
                    <div className="languageCard">
                      <input
                        name="Tamil"
                        id="Tamil"
                        value="Tamil"
                        type="radio"
                      />
                      <label for="Tamil">Tamil</label>
                    </div>
                    <div className="languageCard">
                      <input
                        name="Telugu"
                        id="Telugu"
                        value="Telugu"
                        type="radio"
                      />
                      <label for="Telugu">Telugu</label>
                    </div>
                  </div>
                  <div className="watchDiv">
                    <button className="watchBtn">
                      <span class="material-symbols-outlined">play_arrow</span>
                      Watch now
                    </button>
                    <button className="addWishlist">
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bannerContainer heroBanner1">
              <div className="bannerOverlay">
                <div className="bannerHead col-md-4">
                  <img src={BannerLogo2} alt="Banner Img" />
                  <span className="lable">Newly Added</span>
                  <div className="keypoint">
                    <span>2025</span>
                    <span className="keypointLable">U/A 13+</span>
                    <span>1h 58m</span>
                    <span>4 Languages</span>
                  </div>
                  <div className="bannerDescription">
                    Captain America must unravel a nefarious global plot and
                    stop the Red Hulk.
                  </div>
                  <div className="keypoint2">
                    <span>Action</span>
                    <span>Adventure</span>
                    <span>Science Fiction</span>
                    <span>Super Hero</span>
                  </div>
                  <div className="showLanguages">
                    <div className="languageCard">
                      <input
                        name="hindi1"
                        id="hindi1"
                        value="hindi1"
                        type="radio"
                        defaultChecked
                      />
                      <label for="hindi1">Hindi</label>
                    </div>
                    <div className="languageCard">
                      <input
                        name="english"
                        id="english"
                        value="english"
                        type="radio"
                      />
                      <label for="english">English</label>
                    </div>
                    <div className="languageCard">
                      <input
                        name="Tamil"
                        id="Tamil"
                        value="Tamil"
                        type="radio"
                      />
                      <label for="Tamil">Tamil</label>
                    </div>
                    <div className="languageCard">
                      <input
                        name="Telugu"
                        id="Telugu"
                        value="Telugu"
                        type="radio"
                      />
                      <label for="Telugu">Telugu</label>
                    </div>
                  </div>
                  <div className="watchDiv">
                    <button className="watchBtn">
                      <span class="material-symbols-outlined">play_arrow</span>
                      Watch now
                    </button>
                    <button className="addWishlist">
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default HeroSlider;
