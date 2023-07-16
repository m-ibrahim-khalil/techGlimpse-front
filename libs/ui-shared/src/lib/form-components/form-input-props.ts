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
  name: string;
  control: any;
  label: string;
  setValue?: any;
}
