import { Link } from 'react-router-dom';
/* eslint-disable-next-line */
export interface FormHeaderProps {
  heading: string;
  paragraph: string;
  linkName: string;
  linkUrl: string;
}

export function FormHeader({
  heading,
  paragraph,
  linkName,
  linkUrl,
}: FormHeaderProps) {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        alt="TechGlimpse"
        className="mx-auto h-10 w-auto"
        src="https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649962071315"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600 mt-5">
        {paragraph}{' '}
        <Link
          to={linkUrl}
          className="font-medium text-purple-600 hover:text-purple-500 ml-1"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}

export default FormHeader;
