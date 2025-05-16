import type { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@/shared/ui/Navbar';

interface MainLayoutProps extends PropsWithChildren {
  className?: string;
}

export const MainLayout: FC<MainLayoutProps> = ({ className = '' }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900">React FSD App</h1>
            <div className="flex gap-4">
              <Navbar />
            </div>
          </nav>
        </div>
      </header>

      <main className={`container mx-auto px-4 py-8 ${className}`}>
        <Outlet />
      </main>

      <footer className="bg-white border-t mt-auto">
        <div className="container mx-auto px-4 py-4 text-center text-gray-600">
          © {new Date().getFullYear()} React FSD App
        </div>
      </footer>
    </div>
  );
}; 