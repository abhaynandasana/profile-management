import { createSlice } from "@reduxjs/toolkit";
import { FiltersType } from "./types";
const initialState: FiltersType = {
  filters: {
    name: '',
    status: '',
    gender: '',
  },
};

const filtersSlice = createSlice({
  name: "filtersSlice",
  initialState,
  reducers: {
    manageFilters: (state, payload) => {
        return { ...state, filters: payload.payload };
    },
  },
});

export const {
    manageFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
