import { hex } from 'color-convert';
import { Dispatch } from 'react';
import LabeledInput from '../shared/labeled-input';

type HexToRGBProps = {
  hexColor: string;
  dispatch: Dispatch<ColorActions>;
};

const HexToRGB = ({ hexColor, dispatch }: HexToRGBProps) => {
  const color = hex.rgb(hexColor);
  const [r, g, b] = color;

  const updateRGB = ({ red = r, green = g, blue = b }) => {
    dispatch({
      type: 'update-rgb-color',
      payload: { rgb: [red, green, blue] },
    });
  };

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="R"
        type="number"
        value={r}
        onChange={(e) => updateRGB({ red: +e.target.value })}
      />
      <LabeledInput
        label="G"
        type="number"
        value={g}
        onChange={(e) => updateRGB({ green: +e.target.value })}
      />
      <LabeledInput
        label="B"
        type="number"
        value={b}
        onChange={(e) => updateRGB({ blue: +e.target.value })}
      />
    </section>
  );
};

export default HexToRGB;
