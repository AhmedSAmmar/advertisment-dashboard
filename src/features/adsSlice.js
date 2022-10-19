import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

const adsSlice = createSlice({
  name: "ads",
  initialState,
  reducers: {
    newAds: (state, action) => {
      state.value = action.payload;
    },
    createAd: (state, action) => {
      state.value.push(action.payload);
    },
    removeAd: (state, action) => {
      state.value = state.value.filter((ad, index) => index !== action.payload);
    },
    editAd: (state, action) => {
      state.value[action.payload.id] = action.payload.value;
    },
  },
});

export const { newAds, createAd, removeAd, editAd } = adsSlice.actions;

export default adsSlice.reducer;
