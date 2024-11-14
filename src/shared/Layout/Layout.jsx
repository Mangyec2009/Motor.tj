import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import SearchBar from '../Search/Bar';
import PhoneIcon from '@mui/icons-material/Phone';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toogle';
import { useTranslation } from 'react-i18next';
import "@/i18n";

const Layout = () => {
  const {t, i18n} = useTranslation();
  function TranslateClick(lang) {
      i18n.changeLanguage(lang);
  }
  return <>
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <div className="max-w-[1280px] m-auto py-[20px] px-[10px] flex items-center justify-between ">
      <Link to={"/"}><img src="public/lgo.png" className="w-[150px]" /></Link>
        <SearchBar />
        <PhoneIcon />
        <div className=" flex items-center gap-[20px]">
          <Link to={"/about"}>
            <h1>{t('Example.1')}</h1>
          </Link>
        </div>
        <ModeToggle  />
        <select>
          <option value="">
            <button onClick={()=>TranslateClick('en')}>en</button>
          </option>
          <option>
            <button onClick={()=>TranslateClick('ru')}>ru</button>
          </option>
          <option value="">
            <button onClick={()=>TranslateClick('tj')}>tj</button>
          </option>
        </select>
    </div>
    <div className='max-w-[1280px] m-auto'>
        <Outlet></Outlet>
    </div>
  </ThemeProvider>
  </>
}

export default Layout