import { create } from 'zustand';

const useNoteStore = create((set, get) => ({
  title: '',
  description: '',
  wordCount: 0,

  setTitle: title => set({ title }),

  setDescription: description => {
    const wordCount =
      description.trim() === '' ? 0 : description.trim().split(/\s+/).length;

    set({ description, wordCount });
  },

  isSaveDisable: () => {
    const { title, description } = get();
    return title.trim() === '' || description.trim() === '';
  },
}));

export default useNoteStore;
