import React from 'react';
import { FaFilter, FaSort } from 'react-icons/fa';

const FilterBar = ({ category, setCategory, categories, sort, setSort }) => {
  return (
    <div className='flex gap-[10vw]'>
      {/* Category Filter */}
      <div className="relative flex items-center">
        <select
          className="p-2 pl-8 border border-gray-300 rounded-lg appearance-none"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <FaFilter className="absolute left-2 text-gray-500 pointer-events-none" />
      </div>

      {/* Sort By */}
      <div className="relative flex items-center">
        <select
          className="p-2 pl-8 border border-gray-300 rounded-lg appearance-none"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="rate">Rating</option>
          <option value="price">Price</option>
        </select>
        <FaSort className="absolute left-2 text-gray-500 pointer-events-none" />
      </div>
    </div>
  );
};

export default FilterBar;
