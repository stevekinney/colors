import ColorName from './color-name';
import HexToCMYK from './to-cmyk';
import HexToHSL from './to-hsl';
import HexToHSV from './to-hsv';
import HexToRGB from './to-rgb';

type AdjustColorsProps = {
  hexColor: string;
};

const AdjustColors = ({ hexColor }: AdjustColorsProps) => {
  return (
    <div className="flex flex-col w-full gap-4">
      <h3>Adjust Colors</h3>
      <HexToRGB hexColor={hexColor} />
      <HexToHSL hexColor={hexColor} />
      <HexToHSV hexColor={hexColor} />
      <HexToCMYK hexColor={hexColor} />
      <ColorName hexColor={hexColor} />
    </div>
  );
};

export default AdjustColors;
