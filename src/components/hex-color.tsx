type HexColorProps = {
  hexColor: string;
};

const HexColor = ({ hexColor }: HexColorProps) => {
  return <section className="font-semibold information">{hexColor}</section>;
};

export default HexColor;
