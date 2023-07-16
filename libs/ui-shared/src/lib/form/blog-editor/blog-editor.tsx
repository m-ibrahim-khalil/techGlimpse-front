import { FormEvent } from 'react';
import RichTextEditor from '../../common/rich-text-editor/rich-text-editor';
import FormHeader from '../../form-components/form-header/form-header';

/* eslint-disable-next-line */
export interface BlogEditorProps {}

export function BlogEditor(props: BlogEditorProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <FormHeader
            heading="Write your blog"
            paragraph="Put your thoughts into words. "
            linkName="Browse Blogs"
            linkUrl="/blogs"
          />
          <div className="p-6 bg-white border-b border-gray-200">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="text-xl text-gray-600">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="border-2 border-gray-300 p-2 w-full"
                  name="title"
                  id="title"
                  placeholder="Write Title of your blog"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="text-xl text-gray-600">
                  Description <span className="text-red-500">*</span>
                </label>
                <RichTextEditor />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogEditor;
