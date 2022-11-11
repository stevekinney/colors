import { MouseEventHandler } from 'react';
import Button from '../shared/button';
import ColorChangeSwatch from '../shared/color-change-swatch';

type SavedColorProps = {
  name: string;
  hexColor: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onRemove?: () => void;
};

const SavedColor = ({ name, hexColor, onClick, onRemove }: SavedColorProps) => {
  return (
    <article className="flex items-center gap-2 place-content-between">
      <ColorChangeSwatch hexColor={hexColor} onClick={onClick} />
      <h3 className="text-sm whitespace-nowrap">{name}</h3>
      <Button variant="destructive" size="small" onClick={onRemove}>
        Remove
      </Button>
    </article>
  );
};

export default SavedColor;
