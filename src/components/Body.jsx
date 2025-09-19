import CategoryManager from './CategoryManager';
import FormInputs from './FormInputs';
import NotesGrid from './NotesGrid';
import Notification from './Notification';

const Body = () => {
  return (
    <main className="max-w-5xl flex flex-col w-full mx-auto py-1">
      <FormInputs />
      <NotesGrid />
      <CategoryManager />
      <Notification />
    </main>
  );
};

export default Body;
