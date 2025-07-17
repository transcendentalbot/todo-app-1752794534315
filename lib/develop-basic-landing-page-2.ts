// /components/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Todo App</h1>
        <p className="text-gray-700 mb-8">
          Organize your tasks and boost your productivity with our simple and
          intuitive todo app.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;