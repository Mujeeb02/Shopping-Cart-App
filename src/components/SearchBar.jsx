import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="relative w-full max-w-xs">
      <input
        type="text"
        placeholder="Search products..."
        className="p-2 pl-10 border border-gray-300 rounded-lg w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
    </div>
  );
};

export default SearchBar;
