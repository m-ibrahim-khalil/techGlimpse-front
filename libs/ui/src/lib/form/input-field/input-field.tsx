import { ChangeEvent } from 'react';

const fixedInputClass =
  'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';
/* eslint-disable-next-line */
export interface InputFieldProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  labelText: string;
  labelFor: string;
  id: string;
  name: string;
  type: string;
  isRequired: boolean;
  placeholder?: string;
  customClass?: string;
}

export function InputField({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass = '',
}: InputFieldProps) {
  return (
    <div>
      <label
        htmlFor={labelFor}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {labelText}
      </label>
      <div className="mt-2">
        <input
          onChange={handleChange}
          value={value}
          id={id}
          name={name}
          type={type}
          required={isRequired}
          className={fixedInputClass + customClass}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default InputField;
