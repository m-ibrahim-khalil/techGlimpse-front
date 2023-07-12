import {
  BlogListPage,
  BlogPage,
  NotFoundPage,
} from '@tech-glimpse-front/pages';
import { BlogEditor } from '@tech-glimpse-front/ui';
import { Route, Routes } from 'react-router-dom';

export default function BlogRoutes() {
  const blog = {
    id: '1',
    title: '7 Promising VS Code Extensions Introduced in 2022',
    desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
    imgUrl:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    createdAt: 'Jan 4 2022',
    updatedAt: 'Jan 4 2022',
    tags: ['saas', 'software', 'service'],
  };

  return (
    <Routes>
      <Route index element={<BlogListPage />} />
      <Route path=":id" element={<BlogPage {...blog} />} />
      <Route path="write" element={<BlogEditor />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
