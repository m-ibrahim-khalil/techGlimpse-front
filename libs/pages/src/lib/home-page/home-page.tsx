import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <main className="relative py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 min-h-screen flex flex-col justify-center items-center text-content">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6">
            Announcing our next Product LiDAR Classifier.{' '}
            <a
              href="https://github.com/m-ibrahim-khalil/LiDAR-Data-Classification"
              target="_blank"
              className="font-semibold text-indigo-600 dark:text-indigo-400"
              rel="noreferrer"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight  sm:text-6xl">
            Share Your Stories and Ideas on Our Blog
          </h1>
          <p className="mt-6 text-lg leading-8 ">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/blogs"
              className="rounded-md bg-indigo-600 dark:bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </Link>
            <Link
              to="/about"
              className="text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            'linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)',
        }}
      ></div>
    </main>
  );
}

export default HomePage;
