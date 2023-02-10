import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { GameState } from 'entities/GameState/type'

type Store = {
  gameState: GameState
  start: VoidFunction
  finish: VoidFunction
}

export const useGameStateStore = create<Store>()(
  immer((set) => ({
    gameState: {
      isGameStarted: false,
      isGameFinished: false
    },
    start: () =>
      set((state) => {
        state.gameState.isGameStarted = true
        state.gameState.isGameFinished = false
      }),
    finish: () =>
      set((state) => {
        state.gameState.isGameStarted = false
        state.gameState.isGameFinished = true
      })
  }))
)

export const selectors = {
  gameState: (state: Store) => state.gameState,
  startGame: (state: Store) => state.start,
  finishGame: (state: Store) => state.finish
}
