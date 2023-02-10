import { create } from 'zustand'

type Store = {
  score: number
  setScore: (newScore: number) => void
  reset: VoidFunction
}

export const useScoreStore = create<Store>(
  (set) => ({
    score: 0,
    setScore: (newScore) =>
      set({ score: newScore }),
    reset: () => set({ score: 0 })
  })
)

export const selectors = {
  score: (state: Store) => state.score,
  setScore: (state: Store) => state.setScore,
  reset: (state: Store) => state.reset
}
