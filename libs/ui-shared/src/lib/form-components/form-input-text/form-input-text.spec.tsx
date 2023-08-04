import { render } from '@testing-library/react';
import * as formController from 'react-hook-form';
import * as textField from '../../common/text-field/text-field';
import { FormInputProps } from '../form-input-props';
import FormInputText from './form-input-text';

vi.mock('react-hook-form', async () => {
  const actual: any = await vi.importActual('react-hook-form');
  return {
    ...actual,
    Controller: vi.fn(),
  };
});

const props: FormInputProps = {
  name: 'FormInputText',
  control: undefined,
  label: 'FormInputText',
  required: false,
  type: 'text',
  placeholder: 'FormInputText',
};

describe('FormInputText', () => {
  const TextFieldSpy = vi.spyOn(textField, 'TextField');
  const ControllerSpy = vi.spyOn(formController, 'Controller');
  it('should render successfully', () => {
    ControllerSpy.mockReturnValue(<div>Controller textfield</div>);
    TextFieldSpy.mockReturnValue(<div>TextField</div>);
    const { baseElement } = render(<FormInputText {...props} />);
    expect(baseElement).toBeTruthy();
  });
});

it('should render successfully', () => {
  expect(true).toBeTruthy();
});
