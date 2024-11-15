import React, { useState } from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="search-bar">
      <SearchIcon />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="search-input bg-background"
      />
      <button className='bg-black text-white py-[10px] text-[15px] rounded-[10px] px-[20px]'>Поиск</button>
    </div>
  );
}

export default SearchBar;
