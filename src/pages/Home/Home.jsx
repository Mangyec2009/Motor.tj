import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useList } from '@/store/useList';
import { useTranslation } from 'react-i18next';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import 'swiper/css';
import "@/i18n";
import AOS from "aos";
import "aos/dist/aos.css";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Link } from 'react-router-dom';
import Card from '@/components/Card/Card';

const Home = () => {
  
  const {t, i18n} = useTranslation();
  let lang = localStorage.getItem("lang");
  const [activeTab, setActiveTab] = useState(null);
  let {data, getUsers, cat, getCat, sortCat} = useList();

  useEffect(() => {
    getUsers();
    getCat();
  },[]);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
}, []);
  return <>
  <div className="w-[100%] p-[10px] m-auto text-[20px] md:text-[15px] mt-[10px]" data-aos="zoom-in">
    <Swiper
        autoplay={{
          delay: 4500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        >
        <SwiperSlide>
          <div
            className="rounded-[20px] md:h-[500px] flex w-[100%] h-[630px] text-[20px] md:text-[15px] bg-cover bg-center relative"
            style={{ backgroundImage: "url('/Swiper4.png')", backgroundRepeat: "no-repeat"}}
            >
            <div className="w-1/2 ml-[50px] mt-[100px]">
              <h1 className="text-4xl md:text-xl font-bold text-black">
                {t('Example.3')}
              </h1>
              <Link to={"products"}>
                <button className="bg-slate-400 px-[20px] py-[10px] mt-[50px] rounded text-white">{t('btn.1')}</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="rounded-[20px] md:h-[500px] flex items-baseline w-[100%] h-[630px] text-[20px] md:text-[15px] bg-cover bg-center relative"
            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/Swiper1.jpg')", backgroundSize: "cover" }}
            >
            <div className="w-1/2 md:w-[70%] ml-[50px] mt-[100px] p-[15px]">
              <h1 className="text-4xl md:text-xl font-bold text-white ">
                {t('Example.4')}
              </h1>
              <Link to={"/"}>
              <button className="bg-[#FF2700] px-[20px] py-[10px] mt-[50px] rounded text-white">{t('btn.2')}</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="rounded-[20px] flex items-baseline md:h-[500px] w-[100%] h-[630px] text-[20px] md:text-[13px] bg-cover bg-center relative"
            style={{ backgroundImage: "url('/Swiper3.jpg')", backgroundSize: "cover" }}
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
              backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/Swiper2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
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

          // qweqweqweqwe
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
      {data?.map((el) => (
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
      {cat?.slice(0,8)?.map((el) => (
        <Link to={`/products/${el.id}`}>
        <div
            data-aos="fade-right"
            key={el.id}
            className="w-[250px] cursor-pointer flex flex-col mt-[10px] bg-white dark:bg-[#191919] rounded-lg shadow-md dark:shadow-blue-400 transition-transform duration-300 overflow-hidden hover:shadow-lg hover:!scale-105"
          >
          <img
            src={el.img}
            alt={el.name[lang]}
            className="w-full h-[200px] object-cover"
          />
          <div className="p-[10px]">
            <h3 className="text-lg font-semibold text-gray-800">
              {el.name[lang]?.length <= 13 ? el.name[lang] : el.name[lang]?.slice(0, 13) + "..."}
            </h3>
            <p className="text-sm text-gray-600">
              {el.desc[lang]?.length <= 35 ? el.desc?.[lang] : el.desc[lang]?.slice(0, 35) + "..."}
            </p>
          </div>
        </div>
        </Link>
      ))}
    </div>

        <h1 className="mb-[40px] p-[15px] text-[40px] font-semibold">{t('Example.plus')}</h1>

    <div className="flex justify-between md:justify-around mb-[100px] flex-wrap">
  <Card>
    <img
      src="https://www.jacanawarranty.com/wp-content/uploads/2023/06/Warranty-01-1024x651-1.webp"
      className="w-[400px] mb-[0px] rounded"
    />
    <div className="p-[20px]">
      <Accordion className="w-[100%] mt-[20px] dark:bg-slate-800 dark:text-white border-[2px] border-black">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {t('Cards.war.1')}
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <p>
              {t('Cards.war.2')}
            </p>
            <ul className="list-disc pl-5 my-2">
              <li>
                <ol className="list-decimal pl-5 mt-1">
                  <li>{t('Cards.war.3')}</li>
                  <li>
                    {t('Cards.war.4')}{" "}
                    <a href="https://t.me/WardenMin" className="text-blue-500">
                      Telegram
                    </a>{" "}
                    {t('Cards.war.5')}
                  </li>
                  <li>
                  {t('Cards.war.6')}
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  </Card>
  <Card>
    <img
      src="https://pictures.autods.com/OfficialSite/New/20231009123226/20-Best-Selling-Auto-Parts-To-Start-Dropshipping-Today.png"
      className="w-[400px] mb-[0px] rounded"
    />
    <div className="p-[20px]">
      <h3 className="text-lg font-semibold mb-2">
      {t('Cards.Parts.1')}
      </h3>
      <p className="text-sm text-gray-600">
      {t('Cards.Parts.2')}  
      </p>
    </div>
  </Card>
  <Card>
    <img
      src="https://www.dhl.com/discover/content/dam/global-master/4-logistics-advice/import-and-export-advice/wec0805-last-mile-delivery--solutions-for-your-business-(refresh)/991x558_Mobile.jpg"
      className="w-[400px] mb-[0px] rounded"
    />
    <div className="p-[20px]">
      <h3 className="text-lg font-semibold mb-2">{t('Cards.Parts.3')}</h3>
      <p className="text-sm text-gray-600">
      {t('Cards.Parts.4')}
      </p>
    </div>
  </Card>
</div>
      {/* {carts.map((el) => {
        return <div>
            <h1>{el?.name?.[lang]}</h1>
            <p>{el.desc?.[lang]}</p>
        </div>
      })} */}
  </>
}
// function getCart(data) {
// cart.innerHTML = ""
// data.forEach((el) => {
// const productName = document.createElement("p")
// const cnt = document.createElement("p")
// cnt.innerHTML = el.cnt
// productName.innerHTML = el.name
// cart.append(productName, cnt)
// })
// }
export default Home