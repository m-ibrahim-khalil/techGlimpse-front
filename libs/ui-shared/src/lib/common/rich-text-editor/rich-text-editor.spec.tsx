import { render } from '@testing-library/react';

import RichTextEditor, { RichTextEditorProps } from './rich-text-editor';

const props: RichTextEditorProps = {
  name: 'RichTextEditor',
  value: 'RichTextEditor',
  setValue: vi.fn(),
};

describe('RichTextEditor', () => {
  it('should render successfully', () => {
    const { baseElement, findAllByText } = render(
      <RichTextEditor {...props} />
    );
    expect(baseElement).toBeTruthy();
    expect(findAllByText(/RichTextEditor/i)).toBeTruthy();
  });
});
