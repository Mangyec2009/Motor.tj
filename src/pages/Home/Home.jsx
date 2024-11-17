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
    getCat();
  },[]);
  return <>
  <div className="w-[100%] p-[10px] m-auto text-[20px] md:text-[15px] mt-[10px]">
    <Swiper
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        >
        <SwiperSlide>
          <div
            className="rounded-[20px] md:h-[500px] flex w-[100%] h-[630px] text-[20px] md:text-[15px] bg-cover bg-center relative"
            style={{ backgroundImage: "url('public/Swiper4.png')", backgroundRepeat: "no-repeat"}}
            >
            <div className="w-1/2 ml-[50px] mt-[100px]">
              <h1 className="text-4xl md:text-xl font-bold text-black">
                {t('Example.3')}
              </h1>
              <button className="bg-slate-400 px-[20px] py-[10px] mt-[50px] rounded text-white">{t('btn.1')}</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="rounded-[20px] md:h-[500px] flex items-baseline w-[100%] h-[630px] text-[20px] md:text-[15px] bg-cover bg-center relative"
            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('public/Swiper1.jpg')", backgroundSize: "cover" }}
            >
            <div className="w-1/2 md:w-[70%] ml-[50px] mt-[100px] p-[15px]">
              <h1 className="text-4xl md:text-xl font-bold text-white ">
                {t('Example.4')}
              </h1>
              <button className="bg-[#FF2700] px-[20px] py-[10px] mt-[50px] rounded text-white">{t('btn.2')}</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="rounded-[20px] flex items-baseline md:h-[500px] w-[100%] h-[630px] text-[20px] md:text-[13px] bg-cover bg-center relative"
            style={{ backgroundImage: "url('public/Swiper3.jpg')", backgroundSize: "cover" }}
          >
            <div className="w-1/2 md:w-[70%] ml-[50px] mt-[100px] bg-black p-[15px] bg-opacity-65 rounded-[10px]">
              <h1 className="text-4xl md:text-xl font-bold text-blue-400 ">
                {t('Example.5')}
              </h1>
              <button className="bg-blue-400 px-[20px] py-[10px] mt-[50px] rounded text-white">{t('btn.3')}</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="rounded-[20px] flex items-baseline md:h-[500px] w-[100%] h-[630px] text-[20px] md:text-[15px] bg-cover bg-center relative"
            style={{
              backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('public/Swiper2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}            
            >
            <div className="w-1/2 ml-[50px] mt-[100px] p-[15px] ">
              <h1 className="text-4xl md:text-xl font-bold text-white ">
                {t('Example.6')}
              </h1>
              <button className="bg-black px-[20px] py-[10px] mt-[50px] rounded text-white">{t('btn.4')}</button>
            </div>
          </div>
        </SwiperSlide>
    </Swiper>
    </div>

      <h1 className="text-[50px] mt-[30px] p-[10px]">{t("Example.cat")}</h1>

    <div className="w-[100%] m-auto flex px-[20px] gap-[20px] my-[30px] items-center justify-start md:overflow-x-auto">
    <div
          className={`group relative cursor-pointer text-gray-700 dark:text-white ${
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
          className={`group relative cursor-pointer text-gray-700  dark:text-white ${
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

    <div className="flex w-[90%] m-auto items-center mt-[60px] justify-around flex-wrap gap-[15px] mb-[50px]">
      {cat.slice(0,8).map((el) => (
        <Link to={`/products/${el.id}`}>
        <div
          key={el.id}
          className="w-[250px] cursor-pointer flex flex-col mt-[10px] bg-white dark:bg-[#191919] rounded-lg shadow-md dark:shadow-blue-400 transition-all overflow-hidden hover:shadow-2xl hover:scale-105  transform duration-300"
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
        </Link>
      ))}
    </div>
      {/* <Loading /> */}
  </>
}

export default Home