import { CirclePlus } from 'lucide-react';

import Dropdown from './Dropdown';
import useNoteStore from '../store/useStore';

const FormInputs = () => {
  const {
    title,
    description,
    wordCount,
    setTitle,
    setDescription,
    saveNote,
    isSaveDisable,
  } = useNoteStore();

  return (
    <div className="max-w-3xl mx-auto w-full px-6">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="w-full px-3 py-2.5 rounded-md text-sm font-semibold border border-slate-100 focus:outline-2 focus:outline-black focus:outline-offset-2"
        placeholder="Note title (optional)"
      />
      <div className="mb-5">
        <textarea
          rows={2}
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Start typing your note..."
          className="shadow w-full rounded-md border border-slate-100 focus:outline-black focus:outline-2 focus:outline-offset-2 px-3 py-2.5 mt-3 font-medium resize-none overflow-y-hidden placeholder:text-gray-400/85 focus:bg-slate-50"
        ></textarea>
        <p className="text-xs flex justify-end text-slate-400 font-medium tracking-tight">
          {wordCount} words
        </p>
      </div>

      <div className="flex justify-end w-full space-x-2">
        <Dropdown />
        <button
          onClick={saveNote}
          disabled={isSaveDisable()}
          className="bg-black px-4 py-2 flex gap-3 items-center text-sm rounded-md text-white font-medium cursor-pointer disabled:bg-black/55"
        >
          <CirclePlus size={16} strokeWidth={2} />
          <span>Save Note</span>
        </button>
      </div>
    </div>
  );
};

export default FormInputs;
