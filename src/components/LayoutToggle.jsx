import { LayoutGrid, LayoutList } from 'lucide-react';

const LayoutToggle = ({ layout, onToggle }) => {
  const isList = layout === 'list';
  return (
    <button
      onClick={onToggle}
      aria-label={`Switch to ${isList ? 'gird' : 'list'} view`}
      className="border border-slate-200 size-9 rounded flex justify-center items-center hover:bg-slate-100"
    >
      <span>
        {isList ? (
          <LayoutGrid size={16} strokeWidth={2} />
        ) : (
          <LayoutList size={16} strokeWidth={2} />
        )}
      </span>
    </button>
  );
};

export default LayoutToggle;
