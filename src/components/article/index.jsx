"use client"
import {articles} from "@/data";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./style.scss"

import { Autoplay} from 'swiper/modules';


const Article = () => {
    return(
        <>
            <h1 className={"container article-title"}>Статьи для саморазвития</h1>
            <div className={"article-cards"}>
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
                    {articles.map((article, i) => (
                        <SwiperSlide className={"article-card"} key={i}>
                            <p>{article.date}</p>
                            <h2>{article.title}</h2>
                            <span>{article.subtitle}</span>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default Article;