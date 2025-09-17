import { LayoutGrid, LayoutList } from 'lucide-react';
import useNoteStore from '../store/useStore';

const LayoutToggle = () => {
  const { viewMode, toggleView } = useNoteStore();
  return (
    <button
      onClick={toggleView}
      aria-label={`Switch to ${viewMode ? 'gird' : 'list'} view`}
      className="border border-slate-200 size-9 rounded flex justify-center items-center hover:bg-slate-100"
    >
      <span>
        {viewMode === 'list' ? (
          <LayoutGrid size={16} strokeWidth={2} />
        ) : (
          <LayoutList size={16} strokeWidth={2} />
        )}
      </span>
    </button>
  );
};

export default LayoutToggle;
