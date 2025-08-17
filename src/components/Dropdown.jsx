import { ChevronDown } from "lucide-react";

const Dropdown = () => {
  return (
    <div className="w-40 font-[Inter] text-[13px] outline outline-slate-300 px-3 rounded-md">
      <button className="flex justify-between items-center w-full h-full">
        <span>No category</span>
        <ChevronDown size={18} strokeWidth={1} />
      </button>
    </div>
  );
};

export default Dropdown;
