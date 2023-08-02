import { render } from '@testing-library/react';

import BlogEditor, { BlogEditorProps } from './blog-editor';

const props: BlogEditorProps = {
  title: 'BlogEditorTitle',
  description: 'BlogEditorDescription',
  setTitle: vi.fn(),
  setDescription: vi.fn(),
  errors: { title: '', description: '' },
};

describe('BlogEditor', () => {
  it('should render successfully', () => {
    const { baseElement, findAllByLabelText, findAllByText } = render(
      <BlogEditor {...props} />
    );
    expect(baseElement).toBeTruthy();
    expect(findAllByLabelText(/BlogEditorTitle/i)).toBeTruthy();
    expect(findAllByText(/BlogEditorDescription/i)).toBeTruthy();
  });
});
