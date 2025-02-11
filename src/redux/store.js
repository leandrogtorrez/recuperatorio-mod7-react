// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./form/formSlice";
import dictionaryReducer from "./dictionary/dictionarySlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    dictionary: dictionaryReducer,
  },
});

export default store;
