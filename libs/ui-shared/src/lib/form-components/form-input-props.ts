export interface FormInputProps {
  type?:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'date'
    | 'time'
    | 'textarea';
  placeholder?: string;
  required?: boolean;
  name: string;
  control: any;
  label: string;
  setValue?: any;
}
