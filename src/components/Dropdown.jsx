import { Check, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import useNoteStore from '../store/useNoteStore';

const Dropdown = () => {
  const [toggle, setToggle] = useState(false);
  const { categories } = useNoteStore();

  return (
    <div className="w-44 font-medium text-sm relative">
      <button
        onClick={() => setToggle(prev => !prev)}
        className="flex justify-between items-center w-full border border-slate-200 px-3 py-2 rounded-md"
      >
        <span>No category</span>
        <ChevronDown size={18} strokeWidth={1} />
      </button>
      <div
        className={`select-element absolute top-10 w-full border border-slate-300 rounded-md mt-1.5 transform transition-all duration-500 ${
          toggle
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <ul className="list-none m-0 p-1 space-y-1">
          {categories.map(cat => (
            <li
              key={cat.id}
              className="px-3 py-1.5 rounded bg-gray-100 flex items-center space-x-2"
            >
              <Check size={16} />
              <span
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: `#${cat.selectedColor}` }}
              ></span>
              <span>{cat.categoryName}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
