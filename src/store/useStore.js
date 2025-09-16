import { create } from 'zustand';

export const useWordCounterStore = create(set => ({
  text: '',
  wordCount: 0,
  setText: newText => {
    const count = newText.trim().split(/\s+/).filter(Boolean).length;
    set({
      text: newText,
      wordCount: newText ? count : 0,
    });
  },
}));

export const useNoteTitleStore = create(set => ({
  title: '',
  setTitle: newTitle => {
    set({ title: newTitle });
  },
}));
