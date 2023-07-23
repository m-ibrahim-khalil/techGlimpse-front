/* eslint-disable-next-line */
export interface PageLoaderProps {}

export function PageLoader(props: PageLoaderProps) {
  const circleCommonClasses = 'h-5 w-5 bg-blue-600 rounded-full';

  return (
    <div className="h-screen p-4 flex flex-row items-center justify-center">
      <div className="gap-4">
        <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
        <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
        <div className={`${circleCommonClasses} animate-bounce400`}></div>
      </div>
    </div>
  );
}

export default PageLoader;
