// /components/Toolbar.js
import React from 'react';
import useSpreadsheetStore from './Spread';

const Toolbar = () => {
  const { undo, redo } = useSpreadsheetStore();

  return (
    <div className="flex justify-between p-2 bg-gray-100">
      <button onClick={undo} className="bg-blue-500 text-white px-2 py-1 rounded">Undo</button>
      <button onClick={redo} className="bg-green-500 text-white px-2 py-1 rounded">Redo</button>
    </div>
  );
};

export default Toolbar;


