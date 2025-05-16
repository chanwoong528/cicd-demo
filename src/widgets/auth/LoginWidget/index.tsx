import type { FC } from 'react';
import { LoginForm } from '@/features/auth/ui/LoginForm';

export const LoginWidget: FC = () => {
  const handleLogin = async (email: string, password: string) => {
    // Here you would typically handle the login logic
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Log in to your account</h2>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};
