import { Plus, Trash2 } from 'lucide-react';

import ColorPicker from './ColorPicker';
import useNoteStore from '../store/useNoteStore';

const CategoryManager = () => {
  const {
    updateField,
    showCategoryManager,
    categories,
    categoryName,
    saveCategory,
    deleteCategory,
    isCategoryDisable,
  } = useNoteStore();

  return (
    <div
      className={`fixed top-0 right-0 bg-white h-full w-sm p-6 transform transition-transform duration-500 z-50 ease-in-out ${
        showCategoryManager ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <h2 className="font-semibold text-lg">Manage Categories</h2>
      <div className="space-y-2">
        <p className="font-semibold text-sm mt-4">Add New Category</p>
        <div className="flex space-x-2 w-full">
          <input
            type="text"
            value={categoryName}
            onChange={e => updateField('categoryName', e.target.value)}
            className="border border-slate-200 rounded-md h-10 px-3 w-full placeholder:text-sm placeholder:font-medium"
            placeholder="New category name"
          />
          <button
            className="rounded-md bg-black text-white p-3 disabled:bg-black/50"
            onClick={saveCategory}
            disabled={isCategoryDisable()}
          >
            <Plus size={16} />
          </button>
        </div>
        <ColorPicker />
      </div>
      <p className="text-sm font-semibold mt-8">Your Categories</p>
      <ul className="space-y-2 my-2">
        {categories.map(cat => (
          <li
            key={cat.id}
            className="w-full bg-slate-100/50 px-3 py-2 rounded-lg flex justify-between items-center"
          >
            <div className="flex gap-2 items-center">
              <span
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: `#${cat.selectedColor}` }}
              ></span>
              <span>{cat.categoryName}</span>
            </div>
            <div className="flex items-center">
              <button
                className="text-red-500 cursor-pointer p-1 hover:bg-gray-100 rounded"
                onClick={() => deleteCategory(cat.id)}
              >
                <Trash2 size={16} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CategoryManager;
