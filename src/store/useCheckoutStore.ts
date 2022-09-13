import create from 'zustand'

type State = {
  complete: boolean
}

type Actions = {
  isComplete: () => void
  reset: () => void
}

const useCheckoutStore = create<State & Actions>((set) => ({
  complete: false,
  isComplete: () => set({ complete: true }),
  reset: () => set({ complete: false }),
}))

export default useCheckoutStore
