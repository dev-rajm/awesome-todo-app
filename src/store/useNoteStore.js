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
      selectedCategoryId: '',
      selectedColor: '06d6a0',
      showCategoryManager: false,
      notes: [],
      categories: [],

      setSelectedCategoryId: (id) => set({selectedCategoryId: id}),

      isShowCategoryManager: () => {
        set(state => ({
          showCategoryManager: !state.showCategoryManager,
        }));
      },

      saveCategory: () => {
        const { categories, selectedColor, categoryName } = get();

        const exists = categories.some(
          cat => cat.categoryName.toLowerCase() === categoryName.toLowerCase()
        );
        if (exists) {
          get().showNotification(
            'Duplicate category',
            'Category already exists'
          );
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
        get().showNotification(
          'Category saved',
          'Category has been saved successfully'
        );
      },

      deleteCategory: id => {
        set(state => ({
          categories: state.categories.filter(cat => cat.id !== id),
        }));
        get().showNotification(
          'Category deleted',
          'Category has been deleted successfully'
        );
      },

      assignCategoryToNote: (noteId, categoryId) => {
        set(state => ({
          notes: state.notes.map(note =>
            note.id === noteId ? { ...note, categoryId } : note
          ),
        }));
      },

      setCategoryName: categoryName => set({ categoryName }),

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

      isCategoryDisable: () => {
        const { categoryName } = get();
        return categoryName.trim() == '';
      },
    }),
    {
      name: 'notes-storage', // key in localstorage
    }
  )
);

export default useNoteStore;
