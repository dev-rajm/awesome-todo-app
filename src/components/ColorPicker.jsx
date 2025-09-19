import useNoteStore from '../store/useNoteStore';

const colors = [
  'green',
  'black',
  'purple',
  'pink',
  'yellow',
  'orange',
  'red',
  'blue',
  'green',
  'black',
  'purple',
  'pink',
  'yellow',
  'orange',
  'red',
  'blue',
];

const ColorPicker = () => {
  const { selectedColor, setSelectedColor } = useNoteStore();

  return (
    <>
      <p className="text-sm text-gray-500">Select color:</p>
      <div className="flex flex-wrap gap-2.5">
        {colors.map(color => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            style={{ backgroundColor: color }}
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
