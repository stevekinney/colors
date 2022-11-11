import clsx from 'clsx';
import { MouseEventHandler } from 'react';
import Button from './button';

type ColorChangeSwatchProps = {
  hexColor: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const ColorChangeSwatch = ({
  hexColor,
  className,
  onClick,
}: ColorChangeSwatchProps) => {
  return (
    <Button
      className={clsx(
        'border-2 border-slate-900 transition-shadow duration-200 ease-in hover:shadow-xl',
        className,
      )}
      style={{ backgroundColor: hexColor }}
      onClick={onClick}
    >
      {hexColor}
    </Button>
  );
};

export default ColorChangeSwatch;
