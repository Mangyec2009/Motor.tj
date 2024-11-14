import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import SearchBar from '../Search/Bar';
import PhoneIcon from '@mui/icons-material/Phone';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toogle';

const Layout = () => {
  return <>
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <div className="max-w-[1280px] m-auto py-[20px] px-[10px] flex items-center justify-between ">
      <Link to={"/"}><img src="public/logo.png" className="w-[150px]" /></Link>
        <SearchBar />
        <PhoneIcon />
        <div className=" flex items-center gap-[20px]">
          <Link to={"/about"}>About</Link>
        </div>
        <ModeToggle  />
    </div>
    <div className='max-w-[1280px] m-auto'>
        <Outlet></Outlet>
    </div>
  </ThemeProvider>
  </>
}

export default Layout