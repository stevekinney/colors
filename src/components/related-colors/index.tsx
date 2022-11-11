import {
  getComplementColors,
  getTriadColors,
} from '../../lib/get-related-colors';
import RelatedColorPalette from './related-color-palette';

type RelatedColorsProps = {
  hexColor: string;
};

const RelatedColors = ({ hexColor }: RelatedColorsProps) => {
  const triadColors = getTriadColors(hexColor);
  const complementColors = getComplementColors(hexColor);

  return (
    <>
      <RelatedColorPalette title="Triad Colors" hexColors={triadColors} />
      <RelatedColorPalette
        title="Complimentary Colors"
        hexColors={complementColors}
      />
    </>
  );
};

export default RelatedColors;
