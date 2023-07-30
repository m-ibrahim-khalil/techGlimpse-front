import { render } from '@testing-library/react';

import RichTextEditor from './rich-text-editor';

describe('RichTextEditor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RichTextEditor />);
    expect(baseElement).toBeTruthy();
  });
});
