import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'secondary' | 'destructive';
  size?: 'small' | 'normal' | 'large';
};

const Button = ({
  variant = 'secondary',
  size = 'normal',
  className,
  ...props
}: ButtonProps) => {
  return <button {...props} className={clsx(variant, size, className)} />;
};

export default Button;
