import { ChangeEvent } from 'react';

export interface DropdownProps {
  options: number[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export function Dropdown({ options, onChange }: DropdownProps) {
  return (
    <div className="relative mt-8 mb-4">
      <select
        onChange={onChange}
        className="w-full h-10 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-500"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
