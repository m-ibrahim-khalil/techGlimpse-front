import { useBlog, useGetBlogQuery } from '@tech-glimpse-front/redux-toolkit';
import { Size, Variant } from '@tech-glimpse-front/types';
import { BlogEditor, Button } from '@tech-glimpse-front/ui-shared';
import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';

export interface BlogCreateUpdatePageProps {
  isEditMode?: boolean;
}

export function BlogCreateUpdatePage({
  isEditMode = false,
}: BlogCreateUpdatePageProps) {
  const params = useParams();
  const blogId = params.blogId ?? '';
  const { data: blog } = useGetBlogQuery({ id: blogId });
  const [title, setTitle] = useState(blog?.title ?? '');
  const [description, setDescription] = useState(blog?.description ?? '');
  const [errors, setErrors] = useState({ title: '', description: '' });

  const { createBlog, updateBlog } = useBlog();

  const onPublish = useCallback(async () => {
    await createBlog({
      title,
      description,
    });
    console.log('Published: ', title, description);
  }, [title, description, createBlog]);

  const onUpdateChangesClick = useCallback(async () => {
    await updateBlog(blogId, { title, description });
    console.log('Updated Changes: ', title, description);
  }, [blogId, title, description, updateBlog]);

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setErrors({
        title: !title.trim() ? 'Title is required' : '',
        description: !description.trim() ? 'Description is required' : '',
      });
      return;
    }
    if (isEditMode) {
      onUpdateChangesClick();
      return;
    }
    onPublish();
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden p-6">
          <form className="space-y-6" onSubmit={onSubmit}>
            <div className="flex flex-col gap-4 items-center justify-between md:flex-row">
              <h1 className="text-3xl font-semibold">
                {isEditMode ? 'Edit your blog' : 'Write a new blog'}
              </h1>
              <Button variant={Variant.INFO} size={Size.LARGE} type="submit">
                {isEditMode ? 'Update Changes' : 'Publish'}
              </Button>
            </div>
            <BlogEditor
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
              errors={errors}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default BlogCreateUpdatePage;
