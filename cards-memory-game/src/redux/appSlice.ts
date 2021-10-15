import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
  gameState: {
    isGameStarted: false,
    isGameFinished: false,
  },
  score: 0,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    startGame: (state) => {
      state.gameState.isGameStarted = true
    },
    finishGame: (state) => {
      state.gameState.isGameStarted = false
    },
    setScore: (state,  action: PayloadAction<number>) => {
        state.score = action.payload
    },
  },
})


export const {startGame, finishGame} = appSlice.actions

export default appSlice.reducer
