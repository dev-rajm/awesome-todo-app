import { Plus } from 'lucide-react';
import ColorPicker from './ColorPicker';

const CategoryManager = () => {
  return (
    <div className="fixed top-0 right-0 bg-white h-full w-sm p-6">
      <h2 className="font-semibold text-lg">Manage Categories</h2>
      <div className="space-y-2">
        <p className="font-medium text-sm mt-4">Add New Category</p>
        <div className="flex space-x-2 w-full">
          <input
            type="text"
            className="border border-slate-200 rounded-md h-10 px-3 w-full placeholder:text-sm placeholder:font-medium"
            placeholder="New category name"
          />
          <button className="rounded-md bg-black text-white p-3">
            <Plus size={16} />
          </button>
        </div>
        <ColorPicker />
      </div>
      <p>Your Categories</p>
      <ul>
        <li>Test</li>
      </ul>
    </div>
  );
};

export default CategoryManager;
