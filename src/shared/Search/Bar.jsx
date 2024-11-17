import React, { useState } from 'react';
import './SearchBar.css';
import { useTranslation } from 'react-i18next';
import SearchIcon from '@mui/icons-material/Search';
import "@/i18n";
import { useList } from '@/store/useList';
const SearchBar = () => {
  let {search, setSearch} = useList();

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const {t, i18n} = useTranslation();
  return (
    <div className="search-bar sm:hidden">
      <SearchIcon />
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder={t('Inputs.head')}
        className="search-input bg-background"
      />
      <button className='bg-card-Primary_outlined text-white py-[10px] text-[15px] rounded-[10px] px-[20px]'>Поиск</button>
    </div>
  );
}

export default SearchBar;
