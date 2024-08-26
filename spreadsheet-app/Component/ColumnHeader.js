// /components/ColumnHeader.js
import React from 'react';

const ColumnHeader = ({ col }) => {
  return (
    <div className="column-header bg-gray-200 font-bold text-center border border-gray-300">
      {String.fromCharCode(65 + col)}
    </div>
  );
};

export default ColumnHeader;


