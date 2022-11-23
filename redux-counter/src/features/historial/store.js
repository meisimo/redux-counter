import create from "zustand";

function createResultWithTimestamp(result) {
    return {
        result,
        timestamp: new Date().toISOString(),
    };
}

export const historialStore = create((set) => ({
    historial: [],
    addResult: (result) => set((state) => ({ historial: [...state.historial, createResultWithTimestamp(result)] })),
}))