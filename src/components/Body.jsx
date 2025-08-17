import { CirclePlus, LayoutList, Tag, Trash2 } from "lucide-react";
import Dropdown from "./Dropdown";

const Body = () => {
  return (
    <main className="max-w-5xl flex flex-col w-full mx-auto py-1">
      {/* Input area */}
      <div className="max-w-3xl mx-auto w-full px-6">
        <div className="form-element">
          <input
            type="text"
            name="title"
            className="w-full font-[Inter] p-2.5 rounded-md text-xs font-bold outline outline-slate-100 focus:outline-2 focus:outline-black focus:outline-offset-2"
            placeholder="Note title (optional)"
          />
          <div className="mb-6">
            <textarea
              name="description"
              id="desc"
              placeholder="Start typing your note..."
              className="h-16 font-[Inter] shadow w-full rounded-md outline outline-slate-100 focus:outline-black focus:outline-2 focus:outline-offset-2 p-2.5 mt-3 text-[15px] resize-none placeholder:text-gray-400 focus:bg-slate-50"
            ></textarea>
            <label
              htmlFor="desc"
              className="text-[11px] flex justify-end text-slate-400 font-medium tracking-tight"
            >
              0 words
            </label>
          </div>

          <div className="flex justify-end w-full space-x-2">
            <Dropdown />
            <button className="bg-black px-3.5 h-9 flex gap-2.5 items-center font-[Inter] text-[13px] rounded-md text-white">
              <CirclePlus size={15} strokeWidth={2} />
              <span>Save Note</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto w-full px-6 mt-12">
        <div className="flex justify-between">
          <div className="flex space-x-3 items-center">
            <h2 className="text-lg font-medium">Your Notes</h2>
            <div className="border border-slate-200 size-9 rounded flex justify-center items-center">
              <LayoutList size={15} strokeWidth={2} />
            </div>
            <div className="flex items-center rounded-md border border-slate-200 h-9 px-3 space-x-1">
              <Tag size={15} strokeWidth={2} />
              <span className="text-xs font-medium">Categories</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="text-xs font-medium text-red-500 rounded-md border border-slate-200 flex items-center px-4 h-9 space-x-1">
              <Trash2 size={15} strokeWidth={2} />
              <span>Clear notes</span>
            </button>
            <Dropdown />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Body;
