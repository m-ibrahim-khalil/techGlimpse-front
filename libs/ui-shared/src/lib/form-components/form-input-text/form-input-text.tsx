import { FormInputProps } from '@tech-glimpse-front/types';
import { Controller } from 'react-hook-form';
import TextField from '../../common/text-field/text-field';

export function FormInputText({
  name,
  control,
  label,
  required = false,
  type = 'text',
  placeholder = '',
  customClass,
}: FormInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          type={type}
          required={required}
          placeholder={placeholder}
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value}
          label={label}
          customClass={customClass}
          autoComplete={name}
        />
      )}
    />
  );
}

export default FormInputText;
