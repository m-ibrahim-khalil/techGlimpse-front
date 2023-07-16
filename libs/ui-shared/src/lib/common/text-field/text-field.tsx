import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { EyeIcons, EyeOffIcons } from '../../icons/icons';

export interface TextFieldProps {
  onChange: (e: any) => void;
  type?: string;
  label: string;
  value?: string;
  placeholder?: string;
  helperText?: string | null;
  error?: any;
  style?: string;
}

const inputBaseStyles =
  'block w-full border p-3 text-sm rounded outline-none transition-all focus:ring-1 placeholder:text-slate-300 dark:placeholder:text-neutral-500 bg-slate-50 border-slate-300 focus:ring-slate-400 focus:border-slate-400 dark:bg-neutral-800 dark:border-neutral-600 dark:focus:ring-slate-500 dark:focus:border-slate-500';

export function TextField({
  onChange,
  type = 'text',
  label,
  placeholder = '',
  helperText = '',
  value = '',
  error = null,
  style = '',
}: TextFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      {label && (
        <label
          className="block uppercase text-sm font-bold mb-2"
          htmlFor={label}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          onChange={onChange}
          value={value}
          type={showPassword ? 'text' : type}
          placeholder={placeholder}
          className={twMerge(
            inputBaseStyles,
            style,
            type === 'password' && 'pr-12',
            error && 'is-invalid input-error'
          )}
        />

        {type === 'password' && (
          <span className="p-1 absolute inset-y-0 right-0 inline-flex items-center mr-1">
            <button
              type="button"
              className="icon-btn p-2 rounded-full"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeIcons /> : <EyeOffIcons />}
            </button>
          </span>
        )}
      </div>
      {helperText && (
        <p className={twMerge('text-sm', error && 'error-message')}>
          {helperText}
        </p>
      )}
    </div>
  );
}

export default TextField;
