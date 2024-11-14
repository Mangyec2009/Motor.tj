import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import SearchBar from '../Search/Bar';
import PhoneIcon from '@mui/icons-material/Phone';

const Layout = () => {
  return <>
    <div className="max-w-[1280px] m-auto py-[20px] px-[10px] flex items-center justify-between ">
      <Link to={"/"}><img src="public/logo.png" className="w-[150px]" /></Link>
        <SearchBar />
        <div className=" flex items-center gap-[20px]">
          <Link to={"/about"}>About</Link>
        </div>
    </div>
    <div className='max-w-[1280px] m-auto'>
        <Outlet></Outlet>
    </div>
  </>
}

export default Layout