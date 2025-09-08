import { EllipsisVertical } from "lucide-react";

const Card = () => {
  return (
    <div className="card relative border border-slate-200 rounded-md p-3 h-full min-h-80">
      <div className="card-title mb-3">
        <p className="font-medium">title</p>
        <p className="text-slate-400 text-xs">Aug 12, 10:27 AM</p>
      </div>
      <div className="card-body">
        <p className="text-sm">note description</p>
      </div>
      <div className="card-footer flex justify-end items-center absolute h-14 border-t border-t-slate-200 bottom-0 left-0 right-0">
        <span className="hover:bg-slate-100 mr-3 p-1.5 rounded">
          <EllipsisVertical size={18} strokeWidth={1} />
        </span>
      </div>
    </div>
  );
};

export default Card;
