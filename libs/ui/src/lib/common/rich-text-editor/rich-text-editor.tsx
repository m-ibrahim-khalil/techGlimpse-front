import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

/* eslint-disable-next-line */
export interface RichTextEditorProps {}

export function RichTextEditor(props: RichTextEditorProps) {
  const [value, setValue] = useState('');

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}

export default RichTextEditor;
