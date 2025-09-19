import { useState } from 'react';
import { EllipsisVertical, Trash2 } from 'lucide-react';

import useNoteStore from '../store/useNoteStore';

const Card = ({ id, title, description, createdAt }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { deleteNote } = useNoteStore();

  return (
    <div className="card relative border shadow border-slate-200 rounded-md px-3 py-4 h-full min-h-80">
      <div className="card-title mb-3">
        <p className="font-medium">{title}</p>
        <p className="text-slate-400 text-xs">{createdAt}</p>
      </div>
      <div className="card-body">
        <p className="text-sm">{description}</p>
      </div>
      <div className="card-footer bg-gray-50 flex justify-end items-center absolute h-14 border-t border-t-slate-200 bottom-0 left-0 right-0">
        <span
          className="hover:bg-slate-100 mr-3 p-1.5 rounded"
          onClick={() => setOpenMenu(prev => !prev)}
        >
          <EllipsisVertical size={18} strokeWidth={1} />
        </span>

        {openMenu && (
          <div
            className="absolute right-3 -bottom-7 bg-white w-32 px-1 py-1 border border-slate-200 text-red-500 text-sm font-medium rounded-md shadow cursor-pointer transition-all duration-300"
            onClick={() => {
              deleteNote(id);
              setOpenMenu(false);
            }}
          >
            <div className="px-2.5 py-1.5 rounded flex items-center space-x-1 hover:bg-gray-100">
              <span>
                <Trash2 size={16} strokeWidth={2} />
              </span>
              <span>Delete</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
