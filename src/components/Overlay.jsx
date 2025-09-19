import useNoteStore from '../store/useNoteStore';

const Overlay = () => {
  const { showCategoryManager, toggleCategoryManager } = useNoteStore();

  return (
    <>
      {showCategoryManager && (
        <div
          className="fixed inset-0 bg-black/80 bg-opacity-50 transition-opacity duration-500 z-40"
          onClick={toggleCategoryManager}
        ></div>
      )}
    </>
  );
};

export default Overlay;
