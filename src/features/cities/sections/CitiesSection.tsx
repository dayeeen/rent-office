"use client";

import CityCard from "@/components/CityCard";
import { cities } from "../data/cities.mock";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CitiesSection() {
    return (
        <section className="flex flex-col gap-[30px] mt-[100px]" id="Cities">
            <div className="w-full max-w-[1130px] mx-auto flex items-center justify-between">
                <h2 className="font-bold text-[32px] leading-[48px] text-nowrap">
                    You Can Choose <br />
                    Our Favorite Cities
                </h2>
                <a
                    className="rounded-full rounded-full py-3 px-5 bg-white font-bold"
                    href="#">
                    Explore All City
                </a>
            </div>
            <Swiper
                spaceBetween={30}
                slidesOffsetBefore={30}
                slidesOffsetAfter={30}
                slidesPerView="auto"
                grabCursor={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    1280: {
                        slidesPerView: 5,
                    },
                }}
                className="swiper w-full">
                <div className="swiper-wrapper">
                    {cities.map((city) => (
                        <SwiperSlide key={city.id} className="swiper-slide !w-fit first-of-type:pl-[calc((100%-1130px-60px)/2)] last-of-type:pr-[calc((100%-1130px-60px)/2)]">
                            <CityCard city={city} />
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </section>
    );
}