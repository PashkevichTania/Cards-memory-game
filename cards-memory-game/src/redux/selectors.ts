// Other code such as selectors can use the imported `RootState` type
import {RootState} from "redux/store";

export const gameStateSelector = (state: RootState) => state.app.gameState;
export const timeSelector = (state: RootState) => state.app.time;
export const scoreSelector = (state: RootState) => state.app.score;
