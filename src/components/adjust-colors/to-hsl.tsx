import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';

type HexToHSLProps = {
  hexColor: string;
};

const HexToHSL = ({ hexColor }: HexToHSLProps) => {
  const color = hex.hsl(hexColor);
  const [h, s, l] = color;

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput label="H" type="number" value={h} />
      <LabeledInput label="S" type="number" value={s} />
      <LabeledInput label="L" type="number" value={l} />
    </section>
  );
};

export default HexToHSL;
