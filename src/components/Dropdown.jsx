import { Check, ChevronDown } from 'lucide-react';
import { useState } from 'react';

import useNoteStore from '../store/useNoteStore';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { categories, selectedCategoryId, setSelectedCategoryId } =
    useNoteStore();

  const selectedCategory = categories.find(
    cat => cat.id === selectedCategoryId,
  );

  const handleSelect = id => {
    setSelectedCategoryId(id);
    setIsOpen(false);
  };

  return (
    <div className="w-44 font-medium text-sm relative">
      <button
        className="flex justify-between items-center w-full border border-slate-200 px-3 py-2 rounded-md cursor-pointer"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span>
          {selectedCategory ? selectedCategory.categoryName : 'No category'}
        </span>
        <ChevronDown size={18} strokeWidth={1} />
      </button>
      {isOpen && (
        <div
          className={`absolute top-11 left-0 z-50 bg-white w-full rounded-md transition-transform origin-top duration-300 shadow-md border border-slate-200 overflow-hidden ${isOpen ? '-translate-y-1' : 'translate-y-0'}`}
        >
          <ul className="list-none m-0 p-1 space-y-1">
            <li
              className="hover:bg-slate-100 p-2 rounded cursor-pointer flex items-center space-x-2"
              onClick={() => handleSelect('')}
            >
              {selectedCategoryId === '' && <Check size={14} />}
              <span>No category</span>
            </li>

            {categories.map(cat => (
              <li
                className="hover:bg-slate-100 p-2 rounded cursor-pointer flex items-center space-x-2"
                key={cat.id}
                onClick={() => handleSelect(cat.id)}
              >
                {selectedCategoryId === cat.id && <Check size={14} />}
                <span
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: `#${cat.selectedColor}` }}
                ></span>
                <span>{cat.categoryName}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
