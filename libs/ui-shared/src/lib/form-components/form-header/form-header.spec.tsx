import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import FormHeader, { FormHeaderProps } from './form-header';

const props: FormHeaderProps = {
  heading: 'FormHeader',
  paragraph: 'FormParagraph',
  linkName: 'FormLinkName',
  linkUrl: 'FormLinkUrl',
};

describe('FormHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormHeader {...props} />, {
      wrapper: BrowserRouter,
    });
    expect(baseElement).toBeTruthy();
  });
});
