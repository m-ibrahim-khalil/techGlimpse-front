import { InputHTMLAttributes, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { EyeIcons, EyeOffIcons } from '../../icons/icons';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  label: string;
  required?: boolean;
  value?: string;
  placeholder?: string;
  helperText?: string | null;
  error?: any;
  customClass?: string;
}

export function TextField({
  type = 'text',
  label,
  required = false,
  helperText = '',
  value = '',
  error = null,
  customClass = '',
  ...rest
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
          value={value}
          type={showPassword ? 'text' : type}
          required
          className={twMerge(
            'input-base w-full',
            customClass,
            type === 'password' && 'pr-12',
            error && 'is-invalid error'
          )}
          {...rest}
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
