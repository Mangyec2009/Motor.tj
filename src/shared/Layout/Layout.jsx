import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ThemeProvider } from '@/components/theme-provider';
import LanguageIcon from '@mui/icons-material/Language';
import { ModeToggle } from '@/components/mode-toogle';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link, Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useList } from '@/store/useList';
import SearchBar from '../Search/Bar';
import Menu from './Drawer';
import React from 'react'
import "@/i18n";

const Layout = () => {
  const {t, i18n} = useTranslation();
  function TranslateClick(lang) {
      i18n.changeLanguage(lang);
  }
  let {setLang} = useList();
  if(!localStorage.getItem("i18nextLng")){
    TranslateClick("ru");
  }
  if(!localStorage.getItem("lang")){
    setLang("ru");
  }
  return <>
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <header className="max-w-[1280px]  m-auto py-[20px] px-[10px] flex items-center justify-between ">
      <div className="flex items-center gap-[30px]">
        <Link to={"/"}><img src="/logo.png" className="w-[150px] md:relative md:z-10 md:w-[300px] md:scale-150 md:left-3" /></Link>
          <div className="sm:hidden">
            <SearchBar  />
          </div>
      </div>
      <div className="flex items-center gap-[30px]">
        <Link to={"/products"}><h1 className="md:hidden">{t('Example.7')}</h1></Link>
        <Link to={"https://t.me/WardenMin" }target="_blank">
          <div className="flex md:hidden items-center gap-[10px] font-semibold text-[20px]">
        <div className="w-[35px] h-[35px] bg-card-Primary_outlined rounded-[20px] flex items-center justify-center">
            <PhoneIcon />
          </div>
          1234
          </div>
        </Link>
          <Link to={"/about"}>
            <h1 className="md:hidden">{t('Example.about')}</h1>
          </Link>
          <div className='md:hidden'>
            <Link to={"/cart"}>
              <ShoppingCartIcon />
            </Link>
          </div>
        <div className="flex items-center border-[2px] rounded p-[2px] border-transparent dark:border-blue-400">
          <div className="dark:text-blue-400">
            <LanguageIcon />
          </div>
          <select className='dark:bg-black ' onChange={(e) => {TranslateClick(e.target.value), setLang(e.target.value)}} value={localStorage.getItem("i18nextLng")}>
            <option value="ru">Русский</option>
            <option value="en">English</option>
            <option value="tj">Тоҷики</option>
          </select>
        </div>
        <ModeToggle  />
      </div>
        <div className="hidden md:block">
          <Menu />
        </div>
    </header>
    <div className='max-w-[1280px] m-auto'>
        <Outlet></Outlet>
    </div>
    <footer className="bg-card-Primary_outlined text-white py-4">
      <div className="flex justify-between items-center px-6 max-w-[1280px] m-auto">
        <h1 className="text-sm">© 2024 Motor. {t('Example.footer')}</h1>
        <div className="flex items-center gap-4">
          <Link to={"https://www.instagram.com/drifter_2022/"}>
            <img
              src="https://www.iconpacks.net/icons/2/free-instagram-logo-icon-3497-thumb.png"
              alt="Instagram"
              className="w-6 h-6 transition-transform duration-300 hover:scale-110"
              />
          </Link>
          <Link to={"https://t.me/WardenMin"} target='_blanket'>
          <img
            src="https://beeyor.tj/img/ic-telegram.svg"
            alt="Telegram"
            className="w-6 h-6 transition-transform duration-300 hover:scale-110"
            />
          </Link>
          <Link to={""}>
          <img
          src="https://beeyor.tj/img/ic-facebook.svg"
          alt="Facebook"
          className="w-6 h-6 transition-transform duration-300 hover:scale-110"
          />
          </Link>
        </div>
      </div>
    </footer>

  </ThemeProvider>

  </>
}

export default Layout