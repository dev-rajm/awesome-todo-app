import FormInputs from './FormInputs';
import NotesGrid from './NotesGrid';
import NotificationPopUp from './NotificationPopUp';

const Body = () => {
  return (
    <main className="max-w-5xl flex flex-col w-full mx-auto py-1">
      <FormInputs />
      <NotesGrid />
      <NotificationPopUp />
    </main>
  );
};

export default Body;
