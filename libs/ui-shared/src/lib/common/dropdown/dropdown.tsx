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
        className="w-full h-10 text-gray-800 bg-white dark:bg-gray-800 dark:text-white border rounded-md shadow-sm outline-none appearance-none"
        data-testid="dropdown"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
