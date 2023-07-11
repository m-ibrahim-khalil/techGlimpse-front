import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { EyeIcons, EyeOffIcons } from '../../icons/icons';

/* eslint-disable-next-line */
export interface InputProps {
  className: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  helperText: string;
  error: string | null;
}

export function Input(props: InputProps) {
  const {
    className,
    label,
    name,
    type,
    placeholder,
    helperText,
    error,
    ...rest
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      {label && (
        <label htmlFor={label} className="input-label">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={label}
          name={name}
          type={showPassword ? 'text' : type}
          placeholder={placeholder}
          {...rest}
          className={twMerge(
            'peer input-base',
            className,
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
        <p className={twMerge('text-sm', error && 'text-error')}>
          {helperText}
        </p>
      )}
    </div>
  );
}

export default Input;
