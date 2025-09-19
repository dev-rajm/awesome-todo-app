import { X } from 'lucide-react';

import useNoteStore from '../store/useNoteStore.js';

const Notification = () => {
  const { notificationState, hideNotification } = useNoteStore();

  if (!notificationState) return null;

  return (
    <div className="z-50 notification fixed bottom-6 right-6 min-w-96 border border-slate-200 bg-white p-6 rounded text-black transition-opacity duration-300 text-sm space-y-1">
      <button
        className="absolute right-3 top-3 cursor-pointer"
        onClick={hideNotification}
      >
        <X strokeWidth={2} size={16} />
      </button>
      <p className="font-semibold">{notificationState.title}</p>
      <p className="font-light">{notificationState.message}</p>
    </div>
  );
};

export default Notification;
