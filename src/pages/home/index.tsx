import type { FC } from 'react';
import { LoginWidget } from '@/widgets/auth/LoginWidget';

export const HomePage: FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-8">Welcome to React FSD App</h1>
      <LoginWidget />
    </>
  );
};
