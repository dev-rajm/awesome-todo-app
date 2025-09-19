import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useNoteStore = create(
  persist(
    (set, get) => ({
      title: '',
      description: '',
      wordCount: 0,
      viewMode: 'grid',
      categoryName: '',
      selectedColor: '06d6a0',
      showCategoryManager: false,
      notes: [],
      categories: [],
      notificationState: null,

      updateField: (field, value) => set({ [field]: value }),

      // toggle category manager view
      toggleCategoryManager: () => {
        set(state => ({
          showCategoryManager: !state.showCategoryManager,
        }));
      },

      // add category
      saveCategory: () => {
        const { categories, selectedColor, categoryName } = get();

        const exists = categories.some(
          cat => cat.categoryName.toLowerCase() === categoryName.toLowerCase()
        );
        if (exists) {
          get().notify('Duplicate category', 'Category already exists');
          return;
        }

        const newCategory = {
          id: crypto.randomUUID(),
          categoryName,
          selectedColor,
        };

        set(state => ({
          categories: [...state.categories, newCategory],
          categoryName: '',
          selectedColor: '06d6a0',
        }));
        get().notify('Category saved', 'Category has been saved successfully');
      },

      // delete category
      deleteCategory: id => {
        set(state => ({
          categories: state.categories.filter(cat => cat.id !== id),
        }));
        get().notify(
          'Category deleted',
          'Category has been deleted successfully'
        );
      },

      // assign category to note
      assignCategoryToNote: (noteId, categoryId) => {
        set(state => ({
          notes: state.notes.map(note =>
            note.id === noteId ? { ...note, categoryId } : note
          ),
        }));
      },

      // save note
      saveNote: () => {
        const { title, description, notes } = get();
        if (title.trim() || description.trim()) {
          const newNote = {
            id: crypto.randomUUID(),
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
          get().notify('Note saved', 'Your note has been saved successfully');
        }
      },

      // delete note
      deleteNote: id => {
        set(state => ({
          notes: state.notes.filter(note => note.id !== id),
        }));
        get().notify('Note deleted', 'Your note has been deleted');
      },

      // clear all notes
      clearNotes: () => {
        set({ notes: [] });
        get().notify('Notes cleared', 'Cleared all notes');
      },

      // set description
      setDescription: description => {
        const wordCount =
          description.trim() === ''
            ? 0
            : description.trim().split(/\s+/).length;

        set({ description, wordCount });
      },

      // toggle notes view
      toggleView: () => {
        set(state => ({
          viewMode: state.viewMode === 'grid' ? 'list' : 'grid',
        }));
      },

      // add note button
      isSaveDisable: () => {
        const { title, description } = get();
        return title.trim() === '' && description.trim() === '';
      },

      // add category button
      isCategoryDisable: () => get().categoryName.trim() === '',

      // notification
      notify: (title, message, duration = 5000) => {
        set({ notificationState: { title, message } });
        setTimeout(() => set({ notificationState: null }), duration);
      },

      // hide notification popup
      hideNotification: () => set({ notificationState: null }),
    }),
    {
      name: 'notes-storage',
    }
  )
);

export default useNoteStore;
