// /components/Cell.js
import React, { memo } from 'react';

const Cell = memo(({ row, col, isHeader, content, onChange }) => (
  <div className={`border border-gray-300 p-2 text-center ${isHeader ? 'bg-gray-200 font-bold' : ''}`} style={{ width: '100px', height: '30px' }}>
    {isHeader ? content : (
      <input
        type="text"
        value={content}
        onChange={(e) => onChange(row, col, e.target.value)}
        className="w-full h-full border-none focus:outline-none"
      />
    )}
  </div>
));

Cell.displayName = 'Cell';

export default Cell;


