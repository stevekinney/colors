import clsx from 'clsx';
import { ChangeEventHandler, useId } from 'react';

type LabeledInputProps = {
  id?: string;
  label: string;
  value: string | number;
  type?: string;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const LabeledInput = ({
  label,
  value,
  id,
  className,
  type = 'text',
  onChange,
}: LabeledInputProps) => {
  id = useId() + id;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        className={clsx('w-full', className)}
        readOnly={!onChange}
      />
    </div>
  );
};

export default LabeledInput;
