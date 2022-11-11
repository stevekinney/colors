import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';

type HexToCMYKProps = {
  hexColor: string;
};

const HexToCMYK = ({ hexColor }: HexToCMYKProps) => {
  const color = hex.cmyk(hexColor);
  const [c, m, y, k] = color;

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput label="C" type="number" value={c} />
      <LabeledInput label="M" type="number" value={m} />
      <LabeledInput label="Y" type="number" value={y} />
      <LabeledInput label="K" type="number" value={k} />
    </section>
  );
};

export default HexToCMYK;
