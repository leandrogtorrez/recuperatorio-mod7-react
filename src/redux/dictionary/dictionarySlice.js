// src/store/dictionary/dictionarySlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  words: [],
};

const dictionarySlice = createSlice({
  name: "dictionary",
  initialState,
  reducers: {
    saveWord: (state, action) => {
      state.words = [...state.words, action.payload];
    },
    deleteWord: (state, action) => {
      const newWords = state.words.filter((wordVariant) => {
        const wordVariantArray = Object.values(wordVariant);
        return !wordVariantArray.includes(action.payload);
      });

      state.words = newWords;
    },
  },
});

export const { saveWord, deleteWord } = dictionarySlice.actions;
export default dictionarySlice.reducer;
