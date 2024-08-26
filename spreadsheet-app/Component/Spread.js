
// /store/useSpreadsheetStore.js
import create from 'zustand';

const useSpreadsheetStore = create((set) => ({
  // grid data with 1000 rows and 20 columns
  cellData: Array.from({ length: 1000 }, () => Array(20).fill('')),
  history: [], // To keep track of changes for undo
  redoStack: [], // To keep track of undone changes for redo
  searchQuery: '', // For searching within the grid

  setCellData: (row, col, value) => set((state) => {
    const newData = state.cellData.map((r, rowIndex) =>
      rowIndex === row ? r.map((c, colIndex) => (colIndex === col ? value : c)) : r
    );
    return { cellData: newData, history: [...state.history, state.cellData] };
  }),

  undo: () => set((state) => {
    if (state.history.length > 0) {
      const lastState = state.history.pop();
      return { cellData: lastState, redoStack: [...state.redoStack, state.cellData] };
    }
  }),

  redo: () => set((state) => {
    if (state.redoStack.length > 0) {
      const nextState = state.redoStack.pop();
      return { cellData: nextState, history: [...state.history, state.cellData] };
    }
  }),

  setSearchQuery: (query) => set({ searchQuery: query }), // For setting the search query
}));

export default useSpreadsheetStore;



