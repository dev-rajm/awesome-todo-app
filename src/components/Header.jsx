import { FilePenLine } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full mx-auto max-w-3xl flex-wrap gap-2 px-6 py-4">
      <div className="flex items-center gap-2">
        <FilePenLine size={18} strokeWidth={1} />
        <h1 className="font- tracking-tight">Awesome React Notes</h1>
      </div>
      <div>
        <p className="text-xs text-slate-600">
          Sponsored by:{" "}
          <a href="#" className="text-blue-600">
            {"(No One)"}
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;
