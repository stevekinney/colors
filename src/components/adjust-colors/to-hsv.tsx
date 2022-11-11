import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';

type HexToHSVProps = {
  hexColor: string;
};

const HexToHSV = ({ hexColor }: HexToHSVProps) => {
  const color = hex.hsv(hexColor);
  const [h, s, v] = color;

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput label="H" type="number" value={h} />
      <LabeledInput label="S" type="number" value={s} />
      <LabeledInput label="V" type="number" value={v} />
    </section>
  );
};

export default HexToHSV;
