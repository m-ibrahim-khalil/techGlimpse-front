import {
  CheckIcon,
  DocumentCheckIcon,
  EyeIcon,
} from '@heroicons/react/24/outline';
import { useBlog, useGetBlogQuery } from '@tech-glimpse-front/redux-toolkit';
import { Size, Variant } from '@tech-glimpse-front/types';
import { BlogEditor, Button, PageLoader } from '@tech-glimpse-front/ui-shared';
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
  const [coverImage, setCoverImage] = useState<File | string | null>(
    blog?.coverImageURL ?? null
  );
  const [title, setTitle] = useState(blog?.title ?? '');
  const [description, setDescription] = useState(blog?.description ?? '');
  const [errors, setErrors] = useState({ title: '', description: '' });

  const { createBlog, updateBlog, loading } = useBlog();

  const formData = (
    coverImage: File | string | null,
    title: string,
    description: string
  ) => {
    const formData = new FormData();
    if (typeof coverImage === 'string') {
      formData.append('coverImageURL', coverImage);
    }
    formData.append('coverImage', coverImage as File);
    formData.append('title', title);
    formData.append('description', description);
    return formData;
  };

  const onPublish = useCallback(async () => {
    await createBlog(formData(coverImage, title, description));
    console.log('Published: ', coverImage, title, description);
  }, [coverImage, title, description, createBlog]);

  const onUpdateChangesClick = useCallback(async () => {
    await updateBlog(blogId, formData(coverImage, title, description));
    console.log('Updated Changes: ', coverImage, title, description);
  }, [blogId, coverImage, title, description, updateBlog]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted: ', coverImage, title, description);
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

  if (loading) return <PageLoader />;

  return (
    <div className="py-12">
      <div className="max-w-7xl min-h-screen mx-auto sm:px-6 lg:px-8 mt-10">
        <div className="bg-white overflow-hidden p-6">
          <form className="space-y-6" onSubmit={onSubmit}>
            <div className="flex flex-col gap-4 items-center justify-between md:flex-row">
              <h1 className="text-3xl font-semibold">
                {isEditMode ? 'Edit your blog' : 'Write a new blog'}
              </h1>
              <div className="flex items-center gap-4">
                <Button
                  type="button"
                  variant={Variant.SECONDARY}
                  size={Size.PRIMARY}
                  onClick={() => window.history.back()}
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  variant={Variant.SECONDARY}
                  size={Size.PRIMARY}
                >
                  <EyeIcon
                    className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Preview
                </Button>
                <Button
                  variant={Variant.PRIMARY}
                  size={Size.PRIMARY}
                  type="submit"
                >
                  {isEditMode ? (
                    <>
                      <DocumentCheckIcon className="h-5 w-5 mr-2" /> Save
                      Changes
                    </>
                  ) : (
                    <>
                      <CheckIcon className="h-5 w-5 mr-2" /> Publish
                    </>
                  )}
                </Button>
              </div>
            </div>
            <BlogEditor
              coverImage={coverImage}
              setCoverImage={setCoverImage}
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
