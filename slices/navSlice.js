import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
  home: null,
  work: null,
  favOne: null,
  favTwo: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
    setHome: (state, action) => {
      state.home = action.payload;
    },
    setWork: (state, action) => {
      state.work = action.payload;
    },
    setFavOne: (state, action) => {
      state.favOne = action.payload;
    },
    setFavTwo: (state, action) => {
      state.favTwo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setOrigin,
  setDestination,
  setTravelTimeInformation,
  setHome,
  setWork,
  setFavOne,
  setFavTwo,
} = navSlice.actions;

//selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;
export const selectHome = (state) => state.nav.home;
export const selectWork = (state) => state.nav.work;
export const selectFavOne = (state) => state.nav.favOne;
export const selectFavTwo = (state) => state.nav.favTwo;

export default navSlice.reducer;
