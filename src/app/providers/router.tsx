import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/app/layouts/MainLayout';
import { HomePage } from '@/pages/home';
import { AboutPage } from '@/pages/about';
import { NotFoundPage } from '@/pages/not-found';

export const routes = [
  {
    path: '/',
    element: <HomePage />,
    name: 'Home',
  },
  {
    path: '/about',
    element: <AboutPage />,
    name: 'About',
  },
];

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: routes,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
