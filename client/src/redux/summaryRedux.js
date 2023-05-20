import { createSlice, current } from "@reduxjs/toolkit";

const summarySlice = createSlice({
  name: "summary",
  initialState: {
    list: [],
    length: 0,
  },
  reducers: {
    addItem: (state, action) => {
      console.log("payload", action.payload);
      state.list.push(action.payload);
      state.length += 1;
    },
    clearAll: (state, action) => {
      while (state.list.length > 0) {
        state.list.pop();
      }
      state.length = 0;
    },
    removeItem: (state, action) => {
      state.list.splice(action.payload, 1);
      state.length--;
    },
  },
});

export const { addItem, clearAll, removeItem } = summarySlice.actions;
export default summarySlice.reducer;
