import { useState } from 'react';
import SavedColors from './saved-colors';
import RelatedColors from './related-colors';
import AdjustColors from './adjust-colors';
import ColorPicker from './color-picker';

const Application = () => {
  const [hexColor, setHexColor] = useState('#e56e24');

  return (
    <div className="grid max-w-3xl grid-cols-1 gap-8 p-8 pb-40 mx-auto dark:bg-slate-900 dark:text-white sm:grid-cols-2">
      <ColorPicker
        hexColor={hexColor}
        onChange={(e) => setHexColor(e.target.value)}
      />
      <AdjustColors hexColor={hexColor} />
      <RelatedColors hexColor={hexColor} />
      <SavedColors hexColor={hexColor} />
    </div>
  );
};

export default Application;
