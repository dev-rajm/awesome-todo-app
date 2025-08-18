import { LayoutList, Tag, Trash2 } from "lucide-react";
import Dropdown from "./Dropdown";
import Card from "./Card";
import FormInputs from "./FormInputs";

const Body = () => {
  return (
    <main className="max-w-5xl flex flex-col w-full mx-auto py-1">
      <div className="max-w-3xl mx-auto w-full px-6">
        <FormInputs />
      </div>
      <div className="max-w-5xl mx-auto w-full px-6 mt-12">
        <div className="flex justify-between">
          <div className="flex space-x-3 items-center">
            <h2 className="text-lg font-medium">Your Notes</h2>
            <div className="border border-slate-200 size-9 rounded flex justify-center items-center">
              <LayoutList size={15} strokeWidth={2.5} />
            </div>
            <div className="flex items-center rounded-md border border-slate-200 h-9 px-3 space-x-1">
              <Tag size={15} strokeWidth={2} />
              <span className="text-sm font-semibold">Categories</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="text-sm font-medium text-red-500 rounded-md border border-slate-200 flex items-center px-4 h-9 space-x-1">
              <Trash2 size={15} strokeWidth={2} />
              <span>Clear notes</span>
            </button>
            <Dropdown />
          </div>
        </div>
        <div className="notes-list mt-9 mb-16 grid grid-cols-3 gap-4">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  );
};

export default Body;
