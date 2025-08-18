import { CirclePlus } from "lucide-react";
import Dropdown from "./Dropdown";

const FormInputs = () => {
  return (
    <div className="form-element">
      <input
        type="text"
        name="title"
        className="w-full p-2.5 rounded-md text-sm font-bold border border-slate-100 focus:outline-2 focus:outline-black focus:outline-offset-2"
        placeholder="Note title (optional)"
      />
      <div className="mb-6">
        <textarea
          name="description"
          id="desc"
          placeholder="Start typing your note..."
          className="h-auto min-h-16 shadow w-full rounded-md border border-slate-100 focus:outline-black focus:outline-2 focus:outline-offset-2 p-2.5 mt-3 font-medium resize-none placeholder:text-gray-400/85 focus:bg-slate-50"
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
        <button className="bg-black px-3.5 h-9 flex gap-2 items-center text-[13px] rounded-md text-white font-medium">
          <CirclePlus size={15} strokeWidth={2} />
          <span>Save Note</span>
        </button>
      </div>
    </div>
  );
};

export default FormInputs;
