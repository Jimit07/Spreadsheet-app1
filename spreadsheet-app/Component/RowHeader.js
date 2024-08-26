// /components/RowHeader.js
import React from 'react';

const RowHeader = ({ row }) => {
  return (
    <div className="row-header bg-gray-200 font-bold text-center border border-gray-300">
      {row + 1}
    </div>
  );
};

export default RowHeader;



