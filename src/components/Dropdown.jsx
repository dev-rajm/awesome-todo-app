import { Check, ChevronDown } from 'lucide-react';

const Dropdown = () => {
  return (
    <div className="w-44 font-medium text-sm">
      <button className="flex justify-between items-center w-full border border-slate-200 px-3 py-2 rounded-md">
        <span>No category</span>
        <ChevronDown size={18} strokeWidth={1} />
      </button>
      {/* <div className="select-element border border-slate-300 rounded-md mt-1.5">
        <ul className="list-none m-0 p-1">
          <li className="px-3 py-1.5 rounded bg-gray-100 flex items-center space-x-2">
            <Check size={16} />
            <span>Today</span>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Dropdown;
