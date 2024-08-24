"use client"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {articles, trainerCard} from "@/data";
import TrainerCard from "@/components/trainer-card";
import 'swiper/css';
 
const TrainSlider = () => {
    return(
        <Swiper
            spaceBetween={5}
            centeredSlides={false}
            slidesPerView={1.07}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
        >
            {trainerCard.map((trainer , i) => (
                <SwiperSlide key={i}>
                    <TrainerCard trainer={trainer} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default TrainSlider;