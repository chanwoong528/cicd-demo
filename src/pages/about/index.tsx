import type { FC } from 'react';

export const AboutPage: FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-gray-600 mb-4">
          Welcome to our React application built with Feature-Sliced Design architecture.
          This modern approach to structuring React applications helps us maintain a clean
          and scalable codebase.
        </p>
        <p className="text-gray-600">
          Our application demonstrates best practices in React development, including
          TypeScript for type safety, modern routing with React Router, and a
          component-based architecture that promotes reusability and maintainability.
        </p>
      </div>
    </>
  );
};