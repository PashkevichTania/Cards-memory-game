import { create } from 'zustand'

type Store = {
  time: string
  setTime: (newTime: string) => void
  reset: VoidFunction
}

export const useTimerStore = create<Store>((set) => ({
  time: '',
  setTime: (newTime) => set({ time: newTime }),
  reset: () => set({ time: '' })
}))

export const selectors = {
  time: (state: Store) => state.time,
  setTime: (state: Store) => state.setTime,
  reset: (state: Store) => state.reset
}
