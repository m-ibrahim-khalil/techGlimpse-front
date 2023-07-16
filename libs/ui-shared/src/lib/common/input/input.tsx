// eslint-disable-next-line @nx/enforce-module-boundaries

import { Ref, forwardRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import {
  EyeOffIcons as InvisibleIcon,
  EyeIcons as VisibleIcon,
} from '../../icons/icons';

const inputBaseStyles =
  'block w-full border p-3 text-sm rounded outline-none transition-all focus:ring-1 placeholder:text-slate-300 dark:placeholder:text-neutral-500 bg-slate-50 border-slate-300 focus:ring-slate-400 focus:border-slate-400 dark:bg-neutral-800 dark:border-neutral-600 dark:focus:ring-slate-500 dark:focus:border-slate-500';

interface InputProps {
  name: string;
  type?: string;
  label: string;
  placeholder?: string;
  helperText?: string;
  error?: any;
  style?: string;
}

export const Input = forwardRef(
  (
    {
      name,
      type = 'text',
      label,
      placeholder = '',
      helperText,
      error = null,
      style = '',
    }: InputProps,
    ref: Ref<HTMLInputElement>
  ) => {
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
            name={name}
            type={showPassword ? 'text' : type}
            placeholder={placeholder}
            ref={ref}
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
                {showPassword ? <VisibleIcon /> : <InvisibleIcon />}
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
);
export default Input;

// interface InputProps {
//   type?: string;
//   label: Path<IFormValues>;
//   styles?: string;
//   register: UseFormRegister<IFormValues>;
//   validationProps?: {
//     required?: string | boolean;
//     minLength?: { value: number; message: string };
//     maxLength?: { value: number; message: string };
//     pattern?: { value: RegExp; message: string };
//   };
// }

// export const Input = ({
//   type = 'text',
//   label,
//   styles = '',
//   register,
//   validationProps = {},
// }: InputProps) => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div>
//       {label && (
//         <label
//           className="block uppercase text-sm font-bold mb-2"
//           htmlFor={label}
//         >
//           {label}
//         </label>
//       )}
//       <div className="relative">
//         <input
//           type={showPassword ? 'text' : type}
//           {...register(label, validationProps)}
//           className={twMerge(
//             inputBaseStyles,
//             styles,
//             type === 'password' && 'pr-12'
//           )}
//         />

//         {type === 'password' && (
//           <span className="p-1 absolute inset-y-0 right-0 inline-flex items-center mr-1">
//             <button
//               type="button"
//               className="icon-btn p-2 rounded-full"
//               onClick={() => setShowPassword((prev) => !prev)}
//             >
//               {showPassword ? <VisibleIcon /> : <InvisibleIcon />}
//             </button>
//           </span>
//         )}
//       </div>
//     </div>
//   );
// };
// export default Input;
