import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export interface RichTextEditorProps {
  name?: string;
  value: string;
  setValue: (value: string) => void;
}

export function RichTextEditor({ value, setValue, name }: RichTextEditorProps) {
  return (
    <ReactQuill theme="snow" id={name} value={value} onChange={setValue} />
  );
}

export default RichTextEditor;
