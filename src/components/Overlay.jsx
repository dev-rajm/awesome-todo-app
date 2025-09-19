import useNoteStore from '../store/useNoteStore';

const Overlay = () => {
  const { showCategoryManager, isShowCategoryManager } = useNoteStore();

  return (
    <>
      {showCategoryManager && (
        <div
          className="fixed inset-0 bg-black/80 bg-opacity-50 transition-opacity duration-300"
          onClick={isShowCategoryManager}
        ></div>
      )}
    </>
  );
};

export default Overlay;
