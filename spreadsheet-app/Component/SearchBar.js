// /components/SearchBar.js
import React from 'react';

import useSpreadsheetStore from './Spread';

const SearchBar = () => {
  const { setSearchQuery } = useSpreadsheetStore();

  return (
    <div className="p-2">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default SearchBar;



