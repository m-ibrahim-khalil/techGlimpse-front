import { twMerge } from 'tailwind-merge';

const fixedBtnClass =
  'focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2';

export interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  bgColor?: string;
  textColor?: string;
  icon?: JSX.Element | null;
  customClass?: string;
}

export function Button({
  text,
  type = 'button',
  bgColor = 'blue',
  textColor = 'white',
  icon = null,
  customClass = '',
}: ButtonProps) {
  console.log(
    twMerge(
      fixedBtnClass,
      'text-' + textColor,
      'bg-' + bgColor + '-700',
      'hover:bg-' + bgColor + '-800',
      customClass
    )
  );
  return (
    <button
      key={'btn-' + text}
      type={type}
      className={twMerge(
        fixedBtnClass,
        'text-' + textColor,
        'bg-' + bgColor + '-700',
        'hover:bg-' + bgColor + '-800',
        customClass
      )}
    >
      {icon} {text}
    </button>
  );
}

export default Button;
