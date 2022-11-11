import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';

type HexToRGBProps = {
  hexColor: string;
};

const HexToRGB = ({ hexColor }: HexToRGBProps) => {
  const color = hex.rgb(hexColor);
  const [r, g, b] = color;

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput label="R" type="number" value={r} />
      <LabeledInput label="G" type="number" value={g} />
      <LabeledInput label="B" type="number" value={b} />
    </section>
  );
};

export default HexToRGB;
