import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useList } from '@/store/useList';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import "@/i18n";
import Loading from '@/shared/Loading/Loading';
import { Link } from 'react-router-dom';

const Home = () => {
  const {t, i18n} = useTranslation();
  let lang = localStorage.getItem("lang");
  const [activeTab, setActiveTab] = useState(null);
  let {data, getUsers, cat, getCat, sortCat} = useList();
  useEffect(() => {
    getUsers();
    getCat(3);
  },[]);
  return <>
  <div className="w-[90%] m-auto mt-[10px]">
    <Swiper
        // autoplay={{
        //   delay: 4500,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        >
        <SwiperSlide>
          <div
            className="rounded-[20px] md:h-[500px] w-[100%] h-[630px] md:text-[20px] bg-cover bg-center relative"
            style={{ backgroundImage: "url('public/Lexuses.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
            >
            <h1 className="text-4xl  font-bold text-white absolute top-10 left-10">
              {t('Example.3')}
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="rounded-[20px] md:h-[500px] w-[100%] h-[630px] md:text-[20px] bg-cover bg-center relative"
            style={{ backgroundImage: "url('public/tuning.jpg')", backgroundSize: "cover" }}
            >
            <h1 className="text-4xl  font-bold text-yellow-400 absolute top-10 left-10">
              {t('Example.4')}
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="rounded-[20px] md:h-[500px] w-[100%] h-[630px] md:text-[20px] bg-cover bg-center relative"
            style={{ backgroundImage: "url('public/Top-5-German-Car-Brands1564100408.png')", backgroundSize: "cover" }}
          >
            <h1 className="text-4xl  font-bold text-green-700 absolute top-10 left-10">
              {t('Example.5')}
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="rounded-[20px] md:h-[500px] w-[100%] h-[630px] md:text-[20px] bg-cover bg-center relative"
            style={{ backgroundImage: "url('public/elegance.jpg')", backgroundSize: "cover" }}
            >
            <h1 className="text-4xl  font-bold text-white absolute top-10 left-10">
              {t('Example.6')}
            </h1>
          </div>
        </SwiperSlide>
    </Swiper>
    </div>

      <h1 className="text-[50px] mt-[30px]">{t("Example.cat")}</h1>
    <div className="mt-[50px] flex gap-[20px] justify-center">
    <div
          className={`group relative cursor-pointer text-gray-700 ${
            activeTab === 0 ? "text-blue-500" : ""
          }`}
          onClick={() => {
            setActiveTab(0);
            getCat();
          }}
        >
          <p
            className={`text-lg transition-all duration-300 ${
              activeTab === 0 ? "text-blue-500" : "group-hover:text-blue-500"
            }`}
          >
            Все
          </p>
          <span
            className={`absolute left-0 bottom-0 h-[2px] bg-blue-500 transition-all duration-300 ${
              activeTab === 0 ? "w-full" : "w-0 group-hover:w-full"
            }`}
          ></span>
        </div>
      {data.map((el) => (
        <div
          key={el.id}
          className={`group relative cursor-pointer text-gray-700 ${
            activeTab === el.id ? "text-blue-500" : ""
          }`}
          onClick={() => {
            setActiveTab(el.id);
            sortCat(el.id);
          }}
        >
          <p
            className={`text-lg transition-all duration-300 ${
              activeTab === el.id ? "text-blue-500" : "group-hover:text-blue-500"
            }`}
          >
            {el.name[lang]}
          </p>
          <span
            className={`absolute left-0 bottom-0 h-[2px] bg-blue-500 transition-all duration-300 ${
              activeTab === el.id ? "w-full" : "w-0 group-hover:w-full"
            }`}
          ></span>
        </div>
      ))}
    </div>    

    <div className="flex items-center mt-[30px] justify-between flex-wrap gap-[15px] mb-[50px]">
      {cat.map((el) => (
        <div
          key={el.id}
          className="w-[250px] cursor-pointer flex flex-col bg-white dark:bg-black rounded-lg shadow-md dark:shadow-white transition-all overflow-hidden hover:shadow-2xl hover:scale-105  transform duration-300"
        >
          <img
            src={el.img}
            alt={el.name[lang]}
            className="w-full h-[200px] object-cover"
          />
          <div className="p-[10px]">
            <h3 className="text-lg font-semibold text-gray-800">
              {el.name[lang].length <= 13 ? el.name[lang] : el.name[lang].slice(0, 13) + "..."}
            </h3>
            <p className="text-sm text-gray-600">
              {el.desc[lang].length <= 35 ? el.desc[lang] : el.desc[lang].slice(0, 35) + "..."}
            </p>
          </div>
        </div>
      ))}
    </div>
      {/* <Loading /> */}
  </>
}

export default Home