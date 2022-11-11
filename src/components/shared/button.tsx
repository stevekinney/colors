import clsx from 'clsx';
import { CSSProperties, MouseEventHandler, PropsWithChildren } from 'react';

type ButtonProps = {
  variant?: string;
  size?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  variant,
  size,
  className,
  style,
  children,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={clsx(variant, size, className)}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
