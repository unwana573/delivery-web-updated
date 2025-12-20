import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock } from 'lucide-react';

export default function SlidingAuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Sliding Black Panel */}
        <div 
          className={`absolute top-0 w-1/2 h-full bg-black text-white flex flex-col justify-center px-12 transition-all duration-700 ease-in-out z-10 ${
            isSignUp ? 'left-1/2' : 'left-0'
          }`}
          style={{
            clipPath: isSignUp 
              ? 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' 
              : 'polygon(0 0, 85% 0, 100% 100%, 0% 100%)'
          }}
        >
          <h1 className="text-5xl font-bold mb-4">
            {isSignUp ? 'HELLO, FRIEND!' : 'WELCOME BACK!'}
          </h1>
          <p className="text-gray-300 mb-2 leading-relaxed">
            {isSignUp 
              ? 'Enter your personal details'
              : 'Lorem ipsum dolor sit amet'
            }
          </p>
          <p className="text-gray-300 mb-2">
            {isSignUp 
              ? 'and start your journey with us'
              : 'consectetur adipiscing elit'
            }
          </p>
          <p className="text-gray-300 mb-8">
            {isSignUp ? '' : 'Delerisunt?'}
          </p>
          
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="self-start px-12 py-3 border-2 border-white rounded-full text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </div>

        {/* Sign In Form - Left Side */}
        <div 
          className={`absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center px-12 transition-opacity duration-500 ${
            isSignUp ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Sign In</h2>
          
          <div className="space-y-6">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 bg-gray-100 border-b-2 border-gray-300 focus:border-black outline-none transition-colors"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 bg-gray-100 border-b-2 border-gray-300 focus:border-black outline-none transition-colors"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-12 pr-12 py-3 bg-gray-100 border-b-2 border-gray-300 focus:border-black outline-none transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Sign In
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setIsSignUp(true)}
                className="text-black font-semibold hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        </div>

        {/* Sign Up Form - Right Side */}
        <div 
          className={`absolute top-0 right-0 w-1/2 h-full flex flex-col justify-center px-12 transition-opacity duration-500 ${
            isSignUp ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Sign Up</h2>
          
          <div className="space-y-6">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 bg-gray-100 border-b-2 border-gray-300 focus:border-black outline-none transition-colors"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 bg-gray-100 border-b-2 border-gray-300 focus:border-black outline-none transition-colors"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-12 pr-12 py-3 bg-gray-100 border-b-2 border-gray-300 focus:border-black outline-none transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Sign Up
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setIsSignUp(false)}
                className="text-black font-semibold hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}