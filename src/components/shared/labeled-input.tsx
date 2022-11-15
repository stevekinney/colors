import clsx from 'clsx';
import { ChangeEventHandler, ComponentPropsWithoutRef, useId } from 'react';

type LabeledInputProps = ComponentPropsWithoutRef<'input'> & {
  label: string;
};

const LabeledInput = ({ label, ...props }: LabeledInputProps) => {
  const id = useId() + props.id;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        {...props}
        id={id}
        readOnly={!props.onChange}
        className={clsx('w-full', props.className)}
      />
    </div>
  );
};

export default LabeledInput;
