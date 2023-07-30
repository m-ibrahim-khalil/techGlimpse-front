import RichTextEditor from '../../common/rich-text-editor/rich-text-editor';

export interface BlogEditorProps {
  title: string;
  setTitle: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  errors: { title: string; description: string };
}

export function BlogEditor({
  title,
  setTitle,
  description,
  setDescription,
  errors,
}: BlogEditorProps) {
  return (
    <>
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
