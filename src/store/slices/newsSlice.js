import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.json";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    categories: data.dashboard.categories,
    banners: data.dashboard.banners,
    breakingNews: data.dashboard.breaking_news,
    trendingNews: data.dashboard.trending_news,
    newsSummary: null,
    isNewsSummaryLoading: true
  },
  reducers: {
    setNewsSummary: (state, { payload }) => {
      state.newsSummary = data.dashboard[payload.type].find(i => i.id === payload.id);
      state.isNewsSummaryLoading = false;
    },
    unsetNewsSummary: (state) => {
      state.isNewsSummaryLoading = true;
      state.newsSummary = null;
    },
    updateNewsSummaryLoading: (state, { payload }) => {
      state.isNewsSummaryLoading = payload;
    }
  },
})

export const { setNewsSummary, unsetNewsSummary, updateNewsSummaryLoading } = newsSlice.actions;

export default newsSlice.reducer;