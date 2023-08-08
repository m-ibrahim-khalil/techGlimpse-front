import { useState } from 'react';
import FileDropInput from '../../common/file-drop-input/file-drop-input';
import RichTextEditor from '../../common/rich-text-editor/rich-text-editor';

export interface BlogEditorProps {
  coverImage: File | null;
  setCoverImage: (value: File | null) => void;
  title: string;
  setTitle: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  errors: { title: string; description: string };
}

export function BlogEditor({
  coverImage,
  setCoverImage,
  title,
  setTitle,
  description,
  setDescription,
  errors,
}: BlogEditorProps) {
  const [imageUploadError, setImageUploadError] = useState<string>('');
  const onCoverImageChange = (file: File | null) => {
    console.log('Cover Image set: ', file);
    setCoverImage(file);
  };
  return (
    <>
      <div className="mb-4">
        <label className="text-xl text-gray-600">Cover Image</label>
        <FileDropInput
          value={coverImage}
          onChange={onCoverImageChange}
          setImageUploadError={setImageUploadError}
        />
        {imageUploadError && (
          <span className="text-red-500">{imageUploadError}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="text-xl text-gray-600">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="border-2 border-gray-300 p-2 w-full"
          placeholder="Write Title of your blog"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && (
          <span className="text-red-500">Title is required</span>
        )}
      </div>
      <div className="mb-4">
        <label className="text-xl text-gray-600">
          Description <span className="text-red-500">*</span>
        </label>
        <RichTextEditor value={description} setValue={setDescription} />
        {errors.description && (
          <span className="text-red-500">Description is required</span>
        )}
      </div>
    </>
  );
}

export default BlogEditor;
