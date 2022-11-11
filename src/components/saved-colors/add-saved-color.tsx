import { PropsWithChildren, useState } from 'react';
import Button from '../shared/button';
import LabeledInput from '../shared/labeled-input';

type AddSavedColorProps = {
  onSave: (color: string) => void;
};

const AddSavedColor = ({ onSave }: PropsWithChildren<AddSavedColorProps>) => {
  const [savedColorName, setSavedColorName] = useState('');

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        onSave(savedColorName);
      }}
    >
      <LabeledInput
        label="Color Name"
        value={savedColorName}
        onChange={(e) => setSavedColorName(e.target.value)}
      />
      <Button variant="primary" className="w-full">
        💾 Save Color
      </Button>
    </form>
  );
};

export default AddSavedColor;
