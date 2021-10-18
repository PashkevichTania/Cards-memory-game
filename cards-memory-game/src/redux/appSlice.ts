import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
  gameState: {
    isGameStarted: false,
    isGameFinished: false,
  },
  score: 0,
  time: '',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    startGame: (state) => {
      state.gameState.isGameStarted = true
      state.gameState.isGameFinished = false
    },
    finishGame: (state) => {
      state.gameState.isGameStarted = false
      state.gameState.isGameFinished = true
    },
    setScore: (state,  action: PayloadAction<number>) => {
        state.score = action.payload
    },
    setTime: (state,  action: PayloadAction<string>) => {
      state.time = action.payload
    },
  },
})


export const {startGame, finishGame, setScore, setTime} = appSlice.actions

export default appSlice.reducer
