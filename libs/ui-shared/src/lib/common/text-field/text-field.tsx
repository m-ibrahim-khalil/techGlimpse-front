import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { EyeIcons, EyeOffIcons } from '../../icons/icons';

export interface TextFieldProps {
  onChange: (e: any) => void;
  type?: string;
  label: string;
  required?: boolean;
  value?: string;
  placeholder?: string;
  helperText?: string | null;
  error?: any;
  style?: string;
}

export function TextField({
  onChange,
  type = 'text',
  label,
  required = false,
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
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          onChange={onChange}
          value={value}
          type={showPassword ? 'text' : type}
          required
          placeholder={placeholder}
          className={twMerge(
            'input-base w-full',
            style,
            type === 'password' && 'pr-12',
            error && 'is-invalid error'
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
