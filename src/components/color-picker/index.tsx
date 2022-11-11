import { ChangeEventHandler } from 'react';
import ColorSelect from './color-select';
import ColorSwatch from './color-swatch';

type ColorPickerProps = {
  hexColor: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const ColorPicker = ({ hexColor, onChange }: ColorPickerProps) => {
  return (
    <div className="flex w-full flex-col gap-4">
      <h3>Select Color</h3>
      <ColorSelect hexColor={hexColor} onChange={onChange} />
      <ColorSwatch hexColor={hexColor} />
    </div>
  );
};

export default ColorPicker;
