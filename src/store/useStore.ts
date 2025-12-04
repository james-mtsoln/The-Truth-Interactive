import { create } from 'zustand';
import { type Topic } from '../types/payload-types';

export type Language = 'en' | 'es' | 'ja' | 'ko' | 'zh';

interface AppState {
    viewMode: 'GLOBE' | 'TIMELINE';
    selectedTopic: Topic | null;
    language: Language;
    setViewMode: (mode: 'GLOBE' | 'TIMELINE') => void;
    setSelectedTopic: (topic: Topic | null) => void;
    setLanguage: (language: Language) => void;
}

export const useStore = create<AppState>((set) => ({
    viewMode: 'GLOBE',
    selectedTopic: null,
    language: 'en',
    setViewMode: (mode) => set({ viewMode: mode }),
    setSelectedTopic: (topic) => set({ selectedTopic: topic }),
    setLanguage: (language) => set({ language }),
}));
