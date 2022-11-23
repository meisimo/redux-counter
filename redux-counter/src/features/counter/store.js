import create from "zustand";

export const counterStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    incrementByAmount: (amount) => set((state) => ({ count: state.count + amount })),
    clearStore: () => set({ count: 0 }),
}));

export const historialStore = create((set) => ({
    historial: [],
    addCounterResult: () => set((state) => ({ historial: [...state.historial, counterStore.getState().count] })),
}))
