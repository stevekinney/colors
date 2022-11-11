import colorNames from 'color-name-list';

type ColorNameProps = {
  hexColor: string;
};

const ColorName = ({ hexColor }: ColorNameProps) => {
  const color = colorNames.find((color) => {
    return color.hex === hexColor.toLowerCase();
  });

  if (!color) return null;

  return (
    <p className="information">
      This color is called{' '}
      <span style={{ color: color.hex }}>{color.name}</span>.
    </p>
  );
};

export default ColorName;
