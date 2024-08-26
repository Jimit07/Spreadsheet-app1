

// /components/Spreadsheet.js
import React, { useState, useEffect, useMemo } from 'react';


import useSpreadsheetStore from './Spread';

import Cell from './Cell';
import ColumnHeader from './ColumnHeader';
import RowHeader from './RowHeader';
import Toolbar from './Toolbar';
import SearchBar from './SearchBar';

const ROWS = 1000;
const COLS = 20;

const Spreadsheet = () => {
  const { cellData, setCellData, searchQuery } = useSpreadsheetStore();
  const [visibleRows, setVisibleRows] = useState(20); // Start by showing 20 rows
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  
  const handleScroll = () => {
    setScrollPosition({ x: window.scrollX, y: window.scrollY });
  };

  const loadMoreRows = () => {
    setVisibleRows(visibleRows + 20); // Load more rows when the button is clicked
  };

  const filteredCells = useMemo(() => {
    if (!searchQuery) return cellData.slice(0, visibleRows);
    return cellData.slice(0, visibleRows).map((row) =>
      row.filter((cell) => cell.includes(searchQuery))
    );
  }, [searchQuery, visibleRows, cellData]);

  return (
    <div className="overflow-auto h-screen" onScroll={handleScroll}>
      <Toolbar />
      <SearchBar />
      <div className="grid" style={{ gridTemplateColumns: `50px repeat(${COLS}, 100px)`, gridTemplateRows: `30px repeat(${visibleRows}, 30px)` }}>
        <Cell isHeader content="" />
        {Array.from({ length: COLS }).map((_, col) => (
          <ColumnHeader key={`header-${col}`} col={col} />
        ))}
        {Array.from({ length: visibleRows }).map((_, row) => (
          <React.Fragment key={`row-${row}`}>
            <RowHeader key={`row-header-${row}`} row={row} />
            {Array.from({ length: COLS }).map((_, col) => (
              <Cell key={`${row}-${col}`} row={row} col={col} content={filteredCells[row][col]} onChange={setCellData} />
            ))}
          </React.Fragment>
        ))}
      </div>
      <button onClick={loadMoreRows} className="mt-2 bg-blue-500 text-white p-2 rounded">Load More Rows</button>
    </div>
  );
};

export default Spreadsheet;





