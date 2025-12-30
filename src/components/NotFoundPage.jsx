import React from 'react';
import { Home, ArrowLeft, Compass } from 'lucide-react';

function NotFoundPage() {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-100 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-slate-100 opacity-50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-200">
          
          <div className="px-8 py-16 text-center">
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-slate-200 select-none leading-none">404</h1>
            </div>

            <div className="flex items-center justify-center gap-3 mb-4">
              <Compass className="text-slate-600" size={28} />
              <h2 className="text-3xl font-semibold text-slate-800">Page Not Found</h2>
            </div>
            
            <p className="text-slate-600 text-base mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved to a different location.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={handleGoHome}
                className="px-8 py-3 bg-slate-800 text-white rounded-lg font-medium flex items-center gap-2 hover:bg-slate-700 transition-colors duration-200"
              >
                <Home size={20} />
                Return Home
              </button>
              
              <button
                onClick={handleGoBack}
                className="px-8 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium flex items-center gap-2 hover:bg-slate-50 transition-colors duration-200"
              >
                <ArrowLeft size={20} />
                Go Back
              </button>
            </div>

            <div className="pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-3">Helpful links:</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="/" className="text-sm text-slate-600 hover:text-slate-900 hover:underline transition-colors">Home</a>
                <span className="text-slate-300">•</span>
                <a href="/" className="text-sm text-slate-600 hover:text-slate-900 hover:underline transition-colors">Contact</a>
                <span className="text-slate-300">•</span>
                <a href="/" className="text-sm text-slate-600 hover:text-slate-900 hover:underline transition-colors">Support</a>
                <span className="text-slate-300">•</span>
                <a href="/" className="text-sm text-slate-600 hover:text-slate-900 hover:underline transition-colors">Site Map</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;