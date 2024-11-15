import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import LanguageIcon from '@mui/icons-material/Language';
import SearchBar from '../Search/Bar';
import PhoneIcon from '@mui/icons-material/Phone';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toogle';
import { useTranslation } from 'react-i18next';
import "@/i18n";
import { useList } from '@/store/useList';

const Layout = () => {
  const {t, i18n} = useTranslation();
  function TranslateClick(lang) {
      i18n.changeLanguage(lang);
  }
  let {setLang} = useList();
  return <>
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <div className="max-w-[1280px] m-auto py-[20px] px-[10px] flex items-center justify-between ">
      <Link to={"/"}><img src="public/logo.png" className="w-[150px]" /></Link>
        <SearchBar />
        <Link to={"/contact"}>
          <div className="w-[35px] h-[35px] bg-card-Primary_outlined rounded-[20px] flex items-center justify-center">
            <PhoneIcon />
          </div>
        </Link>
        <div className=" flex items-center gap-[20px]">
          <Link to={"/about"}>
            <h1>{t('Example.about')}</h1>
          </Link>
        </div>
        <ModeToggle  />
        <select onChange={(e) => {TranslateClick(e.target.value), setLang(e.target.value)}} value={i18n.language}>
          <option value="en">English</option>
          <option value="ru">Русский</option>
          <option value="tj">Тоҷики</option>
        </select>

    </div>
    <div className='max-w-[1280px] m-auto'>
        <Outlet></Outlet>
    </div>
  </ThemeProvider>
  </>
}

export default Layout