import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useNoteStore = create(
  persist(
    (set, get) => ({
      title: '',
      description: '',
      wordCount: 0,
      notes: [],

      setTitle: title => set({ title }),

      setDescription: description => {
        const wordCount =
          description.trim() === ''
            ? 0
            : description.trim().split(/\s+/).length;

        set({ description, wordCount });
      },

      saveNote: () => {
        const { title, description, notes } = get();
        if (title.trim() && description.trim()) {
          const newNote = {
            id: Date().now(),
            title,
            description,
          };

          set({
            notes: [...notes, newNote],
            title: '',
            description: '',
            wordCount: 0,
          });
        }
      },

      isSaveDisable: () => {
        const { title, description } = get();
        return title.trim() === '' && description.trim() === '';
      },
    }),
    {
      name: 'notes-storage', // key in localstorage
    }
  )
);

export default useNoteStore;
