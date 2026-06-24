import { create } from 'zustand';

export type PresentationMode = 'banca' | 'observatorio';

type PresentationState = {
  activeStop: number;
  mode: PresentationMode;
  setActiveStop: (activeStop: number) => void;
  setMode: (mode: PresentationMode) => void;
};

export const usePresentationStore = create<PresentationState>((set) => ({
  activeStop: 0,
  mode: 'banca',
  setActiveStop: (activeStop) => set({ activeStop }),
  setMode: (mode) => set({ mode })
}));
