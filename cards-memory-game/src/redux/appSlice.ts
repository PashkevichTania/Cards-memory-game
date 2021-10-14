import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isGameStarted: false,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        startGame: (state) => {
            state.isGameStarted = true
        },
        finishGame: (state) => {
            state.isGameStarted = false
        },
    },
})


export const { startGame, finishGame } = appSlice.actions

export default appSlice.reducer