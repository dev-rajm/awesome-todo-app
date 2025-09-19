import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useNoteStore = create(
  persist(
    (set, get) => ({
      title: '',
      description: '',
      wordCount: 0,
      viewMode: 'grid',
      selectedColor: null,
      notes: [],
      categories: [],

      addCategories: (name, color) => {
        const newCategory = {
          id: new Date().toLocaleDateString(),
          name,
          color,
        };

        set(state => ({
          categories: [...state.categories, newCategory],
        }));
      },

      deleteCategory: id => {
        set(state => ({
          categories: state.categories.filter(cat => cat.id !== id),
        }));
      },

      assignCategoryToNote: (noteId, categoryId) => {
        set(state => ({
          notes: state.notes.map(note =>
            note.id === noteId ? { ...note, categoryId } : note
          ),
        }));
      },

      setSelectedColor: color => set({ selectedColor: color }),

      notificationState: null,
      showNotification: (title, message) => {
        set({ notificationState: { title, message } });
        setTimeout(() => set({ notificationState: null }), 5000);
      },
      hideNotification: () => set({ notificationState: null }),

      setTitle: title => set({ title }),

      setDescription: description => {
        const wordCount =
          description.trim() === ''
            ? 0
            : description.trim().split(/\s+/).length;

        set({ description, wordCount });
      },

      toggleView: () => {
        set(state => ({
          viewMode: state.viewMode === 'grid' ? 'list' : 'grid',
        }));
      },

      saveNote: () => {
        const { title, description, notes, showNotification } = get();
        if (title.trim() || description.trim()) {
          const newNote = {
            id: new Date().toLocaleTimeString(),
            title,
            description,
            createdAt: new Intl.DateTimeFormat('en-US', {
              dateStyle: 'medium',
              timeStyle: 'short',
            }).format(new Date()),
          };

          set({
            notes: [...notes, newNote],
            title: '',
            description: '',
            wordCount: 0,
          });
          showNotification(
            'Note saved',
            'Your note has been saved successfully'
          );
        }
      },

      clearNotes: () => {
        set({ notes: [] });
        get().showNotification('Notes cleared', 'Cleared all notes');
      },

      deleteNote: id => {
        set(state => ({
          notes: state.notes.filter(note => note.id !== id),
        }));
        get().showNotification('Note deleted', 'Your note has been deleted');
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
