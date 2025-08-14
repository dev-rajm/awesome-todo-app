const Body = () => {
  return (
    <main className="max-w-5xl flex flex-col w-full mx-auto py-1">
      <div className="max-w-3xl mx-auto w-full px-6">
        <form>
          <input
            type="text"
            name="title"
            className="w-full font-[Inter] p-2.5 rounded-md text-xs font-bold outline outline-slate-100 focus:outline-2 focus:outline-black focus:outline-offset-2"
            placeholder="Note title (optional)"
          />
          <textarea
            name="description"
            id="desc"
            placeholder="Start typing your note..."
            className="h-16 font-[Inter] shadow w-full rounded-md outline outline-slate-100 focus:outline-black focus:outline-2 focus:outline-offset-2 p-2.5 mt-3 text-[15px] resize-none placeholder:text-gray-500/55"
          ></textarea>
          <label
            htmlFor="desc"
            className="text-[11px] flex justify-end text-slate-400 font-medium tracking-tight"
          >
            0 words
          </label>
        </form>
      </div>
    </main>
  );
};

export default Body;
