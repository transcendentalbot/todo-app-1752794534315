// /components/Navigation.tsx
import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-white font-bold text-xl">
          Todo App
        </Link>
        <div>
          <Link href="/about" className="text-gray-300 hover:text-white mr-4">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;