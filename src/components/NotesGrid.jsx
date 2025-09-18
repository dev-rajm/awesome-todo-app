import { Tag, Trash2 } from 'lucide-react';

import Dropdown from './Dropdown';
import Card from './Card.jsx';
import LayoutToggle from './LayoutToggle.jsx';
import useNoteStore from '../store/useStore.js';

const NotesGrid = () => {
  const { viewMode, notes, clearNotes } = useNoteStore();

  function handleClear() {
    confirm('Are you sure you want to delete all notes?') && clearNotes();
  }

  return (
    <div className="max-w-5xl mx-auto w-full px-6 mt-12">
      <div className="flex justify-between">
        <div className="flex space-x-3 items-center">
          <h2 className="text-xl font-medium">Your Notes</h2>
          <LayoutToggle />
          <div className="flex items-center rounded-md border border-slate-200 h-9 px-3 space-x-1">
            <Tag size={16} strokeWidth={2} />
            <span className="text-sm font-semibold">Categories</span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={handleClear}
            className="text-sm font-medium text-red-500 rounded-md border border-slate-200 flex items-center px-4 h-9 space-x-1 cursor-pointer hover:bg-red-100/50"
          >
            <Trash2 size={16} strokeWidth={2} />
            <span>Clear notes</span>
          </button>
          <Dropdown />
        </div>
      </div>
      <div
        className={`notes-list mt-9 mb-16 min-h-36 relative ${
          viewMode === 'grid'
            ? 'grid grid-cols-3 gap-4'
            : 'flex flex-col space-y-4'
        }`}
      >
        {notes.length > 0 ? (
          notes.map(note => (
            <Card
              key={note.id}
              title={note.title}
              description={note.description}
              createdAt={note.createdAt}
            />
          ))
        ) : (
          <div className="text-gray-400 text-center my-8 absolute left-0 right-0">
            No saved notes yet. Create your first note above!
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesGrid;
