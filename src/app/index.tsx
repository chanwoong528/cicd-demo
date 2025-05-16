import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './providers/router';
import './styles/index.css';

export function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
