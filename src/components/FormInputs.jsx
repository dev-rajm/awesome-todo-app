import { CirclePlus } from 'lucide-react';
import Dropdown from './Dropdown';
import { useMemo, useRef, useState } from 'react';
import useAutoResizedTextArea from '../hooks/useAutoResizedTextArea';

const FormInputs = () => {
  const textAreaRef = useRef(null);
  const [desc, setDesc] = useState('');
  const [title, setTitle] = useState('');

  // Button disable logic
  const isDisable = useMemo(
    () => title.trim() === '' && desc.trim() === '',
    [title, desc]
  );

  // Word counter
  const wordCount = useMemo(
    () => desc.trim().split(/\s+/).filter(Boolean).length,
    [desc]
  );

  // Auto-resizer textarea
  useAutoResizedTextArea(textAreaRef, desc);

  return (
    <div className="form-element">
      <input
        type="text"
        name="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="w-full p-2.5 rounded-md text-sm font-semibold border border-slate-100 focus:outline-2 focus:outline-black focus:outline-offset-2"
        placeholder="Note title (optional)"
      />
      <div className="mb-6">
        <textarea
          ref={textAreaRef}
          value={desc}
          onChange={e => setDesc(e.target.value)}
          rows={2}
          name="description"
          id="desc"
          placeholder="Start typing your note..."
          className="shadow w-full rounded-md border border-slate-100 focus:outline-black focus:outline-2 focus:outline-offset-2 p-2.5 mt-3 font-medium resize-none overflow-y-hidden placeholder:text-gray-400/85 focus:bg-slate-50"
        ></textarea>
        <label
          htmlFor="desc"
          className="text-[11px] flex justify-end text-slate-400 font-medium tracking-tight"
        >
          {wordCount} words
        </label>
      </div>

      <div className="flex justify-end w-full space-x-2">
        <Dropdown />
        <button
          className="bg-black px-4 py-2 flex gap-3 items-center text-sm rounded-md text-white font-medium cursor-pointer disabled:bg-black/55 disabled:cursor-not-allowed"
          disabled={isDisable}
        >
          <CirclePlus size={16} strokeWidth={2} />
          <span>Save Note</span>
        </button>
      </div>
    </div>
  );
};

export default FormInputs;
