import { createSlice } from "@reduxjs/toolkit";
import { ProfileHistory } from "./types";
const initialState: ProfileHistory = {
  profileVisitedHistory: [],
};

const profileHistorySlice = createSlice({
  name: "profileHistory",
  initialState,
  reducers: {
    manageHistory: (state, payload) => {
        const history = [payload.payload, ...state.profileVisitedHistory]
        const recentHistory = new Set(history)
        return { ...state, profileVisitedHistory: Array.from(recentHistory).slice(0, 10) };
    },
  },
});

export const {
    manageHistory,
} = profileHistorySlice.actions;

export default profileHistorySlice.reducer;
