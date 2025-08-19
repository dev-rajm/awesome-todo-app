import FormInputs from './FormInputs';
import NotesGrid from './NotesGrid';

const Body = () => {
  return (
    <main className="max-w-5xl flex flex-col w-full mx-auto py-1">
      <FormInputs />
      <NotesGrid />
    </main>
  );
};

export default Body;
