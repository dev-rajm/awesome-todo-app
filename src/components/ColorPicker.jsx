import useNoteStore from '../store/useNoteStore';

const colors = [
  '06d6a0',
  'ffd166',
  '62b6cb',
  'ff8fab',
  'a7c957',
  'faa307',
  'c77dff',
  'e5383b',
  'b8c0ff',
];

const ColorPicker = () => {
  const { selectedColor, updateField } = useNoteStore();

  return (
    <>
      <p className="text-sm text-gray-500">Select color:</p>
      <div className="flex flex-wrap gap-2.5">
        {colors.map(color => (
          <button
            key={color}
            onClick={() => updateField('selectedColor', color)}
            style={{ backgroundColor: `#${color}` }}
            className={`w-6 h-6 rounded-full outline-2 outline-offset-2 ${
              selectedColor === color ? 'outline-black' : 'outline-transparent'
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default ColorPicker;
