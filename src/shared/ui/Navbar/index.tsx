import { routes } from '@/app/providers/router';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="flex gap-4">
      {routes.map((link) => {
        return (
          <Link
            to={link.path}
            key={link.path}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};
