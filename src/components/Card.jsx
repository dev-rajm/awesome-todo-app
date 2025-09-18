import { EllipsisVertical } from 'lucide-react';

const Card = ({ title, description, createdAt }) => {
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
        <span className="hover:bg-slate-100 mr-3 p-1.5 rounded">
          <EllipsisVertical size={18} strokeWidth={1} />
        </span>
      </div>
    </div>
  );
};

export default Card;
