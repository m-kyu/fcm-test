"use client";

import Footer from "@/comp/Footer";
import Header from "@/comp/Header";

import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay } from 'swiper/modules';
import 'swiper/css';


function company() {
    return (
        <>
             <Header/>
            <div style={{height:'4000px'}}>
                회사소개
            
                <div>
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                        
                        navigation={true}
                        modules={[Autoplay]}
                        className="mySwiper"
                        style={{height:700}}
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default company;