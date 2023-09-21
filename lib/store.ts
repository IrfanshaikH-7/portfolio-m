import { create } from 'zustand';
type FeatureStore = {
    inViewF: string | null,
    setInViewF: (f: string | null) => void
}

export const useFeatureStore = create<FeatureStore>((set) => ({
    inViewF: null,
    setInViewF : (f: string | null) => set({inViewF: f})
}))