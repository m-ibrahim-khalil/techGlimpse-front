import { BlogCard } from '@tech-glimpse-front/ui';

const posts = [
  {
    id: '1',
    title: 'What is SaaS? Software as a Service Explained',
    desc: 'Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.',
    imgUrl:
      'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    createdAt: 'Jan 4 2022',
    updatedAt: 'Jan 4 2022',
    tags: ['saas', 'software', 'service'],
  },
  {
    id: '2',
    title: 'A Quick Guide to WordPress Hosting',
    desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations.",
    imgUrl:
      'https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    createdAt: 'Jan 4 2022',
    updatedAt: 'Jan 4 2022',
  },
  {
    id: '3',
    title: '7 Promising VS Code Extensions Introduced in 2022',
    desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
    imgUrl:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    createdAt: 'Jan 4 2022',
    updatedAt: 'Jan 4 2022',
  },
  {
    id: '4',
    title: 'How to Use Root C++ Interpreter Shell to Write C++ Programs',
    desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational.",
    imgUrl:
      'https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    createdAt: 'Jan 4 2022',
    updatedAt: 'Jan 4 2022',
  },
];
/* eslint-disable-next-line */
export interface BlogListPageProps {}

export function BlogListPage(props: BlogListPageProps) {
  return (
    <section className="py-32">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
          <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
            Latest blog posts
          </h1>
          <p className="text-gray-600">
            Blogs that are loved by the community. Updated every hour.
          </p>
        </div>
        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((items, key) => (
            <li className="w-full mx-auto group sm:max-w-sm" key={key}>
              <BlogCard {...items} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BlogListPage;
