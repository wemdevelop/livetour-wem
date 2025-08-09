import React from 'react';
import { ArrowLeft, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <div className="py-20 flex flex-col justify-center items-center bg-white p-6 relative overflow-hidden">
      {/* Background Blur Circles */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="z-10  text-center max-w-xl p-10 bg-white rounded-3xl shadow-2xl">
        <div className="mb-3 animate-bounce">
          <Clock className="mx-auto text-red-500 stroke-1" size={64} />
        </div>
        <h2 className="mb-3">
          Coming Soon
        </h2>
        <p className="text-gray-600 text-sm mb-8 leading-relaxed">
          We're building something amazing for you. This feature is under development and will be available shortly.
        </p>
        <div className="flex w-full justify-center">
          <Link
            to="/features"
            className="btn-icon-hover-red  w-fit"
          >
            <ArrowLeft /> Go Back Features
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
