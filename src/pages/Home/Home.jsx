import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useList } from '@/store/useList';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import "@/i18n";
import Loading from '@/shared/Loading/Loading';

const Home = () => {
  const {t, i18n} = useTranslation();
  let lang = localStorage.getItem("lang");
  let {data, getUsers} = useList();
  useEffect(() => {
    getUsers();
  },[]); 
  return <>
  <div className="w-[1200px] m-auto mt-[10px]">
    <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide>
          <div
            className="rounded-[20px] w-[1200px] h-[630px] bg-cover bg-center relative"
            style={{ backgroundImage: "url('public/Lexuses.jpg')" }}
            >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white absolute top-10 left-10">
              {t('Example.3')}
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="rounded-[20px] w-[1200px] h-[630px] bg-cover bg-center relative"
            style={{ backgroundImage: "url('public/tuning.jpg')" }}
            >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 absolute top-10 left-10">
              {t('Example.4')}
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="rounded-[20px] w-[1200px] h-[630px] bg-cover bg-center relative"
            style={{ backgroundImage: "url('public/Top-5-German-Car-Brands1564100408.png')" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-700 absolute top-10 left-10">
              {t('Example.5')}
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="rounded-[20px] w-[1200px] h-[630px] bg-cover bg-center relative"
            style={{ backgroundImage: "url('public/elegance.jpg')" }}
            >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white absolute top-10 left-10">
              {t('Example.6')}
            </h1>
          </div>
        </SwiperSlide>
    </Swiper>
    </div>

      <div>

      </div>
      <div>
        {data.map((el) => {
          return <>
            <h1>{el.name[lang]}</h1>
          </> 
        })}
      </div>
  </>
}

export default Home