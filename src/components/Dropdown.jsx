import { Check, ChevronDown } from 'lucide-react';
import { useState } from 'react';

import useNoteStore from '../store/useNoteStore';

const Dropdown = () => {
  const { categories, setSelectedCategoryId } = useNoteStore();
  const [selectedValue, setSeletedValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  console.log(categories);

  return (
    <div className="w-44 font-medium text-sm relative">
      <div
        className="flex justify-between items-center w-full border border-slate-200 px-3 py-2 rounded-md cursor-pointer focus:outline-2 outline-offset-2"
        onClick={() => setIsOpen(prev => !prev)}
      >
        {selectedValue ? selectedValue : 'No category'}
        <ChevronDown size={18} strokeWidth={1} />
      </div>
      {isOpen && (
        <ul className="absolute space-y-1 bg-white w-full rounded-md px-2 py-1 transition duration-300 ease-in-out">
          <li
            className="hover:bg-slate-100 p-2 rounded cursor-pointer"
            onClick={() => {
              setSelectedCategoryId(null);
              setSeletedValue(null);
              setIsOpen(false);
            }}
          >
            No category
          </li>
          {categories.map(cat => (
            <li
              className="hover:bg-slate-100 p-2 rounded cursor-pointer flex items-center space-x-2"
              key={cat.id}
              onClick={() => {
                setSelectedCategoryId(cat.id);
                setSeletedValue(cat.categoryName);
                setIsOpen(false);
              }}
            >
              <span
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: `#${cat.selectedColor}` }}
              ></span>
              <span>{cat.categoryName}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
