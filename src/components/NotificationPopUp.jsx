import { useStore } from 'zustand';

const NotificationPopUp = () => {
  const { notification } = useStore();

  if (!notification) return null;

  return (
    <div className="notification fixed bottom-6 right-6 px-6 py-3 rounded shadow text-black transition-opacity duration-300">
      <p>{notification.title}</p>
      <p>{notification.message}</p>
    </div>
  );
};

export default NotificationPopUp;
