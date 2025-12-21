import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock, Phone, MapPin, Home } from 'lucide-react';

export default function SlidingAuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    postalCode: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    return phoneRegex.test(phone);
  };

  const validatePostalCode = (code) => {
    // Nigeria postal code format (6 digits)
    const postalRegex = /^\d{6}$/;
    return postalRegex.test(code);
  };

  const validateSignInForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateSignUpForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters';
    }

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.trim().length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Delivery address is required';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Postal code is required';
    } else if (!validatePostalCode(formData.postalCode)) {
      newErrors.postalCode = 'Please enter a valid 6-digit Nigerian postal code';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else {
      const passwordErrors = [];
      if (formData.password.length < 8) passwordErrors.push('at least 8 characters');
      if (!/[A-Z]/.test(formData.password)) passwordErrors.push('one uppercase letter');
      if (!/[a-z]/.test(formData.password)) passwordErrors.push('one lowercase letter');
      if (!/\d/.test(formData.password)) passwordErrors.push('one number');
      if (!/[@$!%*?&]/.test(formData.password)) passwordErrors.push('one special character (@$!%*?&)');
      
      if (passwordErrors.length > 0) {
        newErrors.password = `Password needs: ${passwordErrors.join(', ')}`;
      }
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    const isValid = isSignUp ? validateSignUpForm() : validateSignInForm();
    
    if (isValid) {
      console.log('Form submitted:', formData);
      alert(`${isSignUp ? 'Sign Up' : 'Sign In'} successful! ✅`);
      // Reset form after successful submission
      setFormData({
        fullName: '',
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        address: '',
        city: '',
        postalCode: ''
      });
      setErrors({});
    } else {
      alert('Please fix the errors in the form ❌');
    }
  };

  const getPasswordStrength = (password) => {
    if (!password) return { strength: 0, label: '', color: '' };
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[@$!%*?&]/.test(password)) strength++;

    if (strength <= 2) return { strength, label: 'Weak', color: 'bg-red-500' };
    if (strength <= 3) return { strength, label: 'Medium', color: 'bg-yellow-500' };
    if (strength <= 4) return { strength, label: 'Good', color: 'bg-blue-500' };
    return { strength, label: 'Strong', color: 'bg-green-500' };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <div className="min-h-screen flex items-center justify-center p-2 sm:p-4">
      <div className="relative w-full max-w-[1000px] min-h-[500px] sm:min-h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Sliding Orange Panel - Hidden on mobile, shown on desktop */}
        <div 
          className={`hidden md:flex absolute top-0 h-full bg-gradient-to-br from-[#FC8A06] to-[#ff9920] text-white flex-col justify-center px-8 lg:px-12 transition-all duration-700 ease-in-out z-20 ${
            isSignUp ? 'left-1/2 w-1/2' : 'left-0 w-1/2'
          }`}
        >
          <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {isSignUp ? 'HELLO, FRIEND!' : 'WELCOME BACK!'}
            </h1>
            <p className="text-white/90 mb-2 leading-relaxed text-sm md:text-base">
              {isSignUp 
                ? 'Register with your details'
                : 'Sign in to order delicious food'
              }
            </p>
            <p className="text-white/90 mb-2 text-sm md:text-base">
              {isSignUp 
                ? 'and get your food delivered fast'
                : 'and continue your culinary journey'
              }
            </p>
            {!isSignUp && (
              <p className="text-white/90 mb-8 text-sm md:text-base">Fresh & Fast Delivery! 🍕</p>
            )}
            
            <button
              onClick={() => {
                setIsSignUp(!isSignUp);
                setErrors({});
              }}
              className="mt-6 px-8 md:px-12 py-3 border-2 border-white rounded-full text-white font-semibold hover:bg-white hover:text-[#FC8A06] transition-all duration-300 transform hover:scale-105"
            >
              {isSignUp ? 'SIGN IN' : 'SIGN UP'}
            </button>
          </div>

          {/* Diagonal Edge */}
          <div 
            className={`absolute top-0 h-full w-20 bg-gradient-to-br from-[#FC8A06] to-[#ff9920] transition-all duration-700 ${
              isSignUp ? '-right-10 rotate-12' : '-right-10 -rotate-12'
            }`}
          />
        </div>

        {/* Sign In Form - Full width on mobile, right side on desktop */}
        <div 
          className={`w-full md:w-1/2 md:absolute md:top-0 md:right-0 md:h-full flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-8 bg-white transition-all duration-700 overflow-y-auto ${
            isSignUp ? 'hidden md:flex md:opacity-0 md:pointer-events-none md:translate-x-full' : 'flex md:opacity-100 md:translate-x-0'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Sign In</h2>
          
          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full pl-8 pr-4 py-3 bg-transparent border-b-2 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:border-[#FC8A06] outline-none transition-colors text-gray-800`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="relative">
              <Lock className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full pl-8 pr-12 py-3 bg-transparent border-b-2 ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                } focus:border-[#FC8A06] outline-none transition-colors text-gray-800`}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-3 mt-4 bg-[#FC8A06] text-white rounded-full font-semibold hover:bg-[#e67e22] transition-colors transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              SIGN IN
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              Don't have an account?{' '}
              <button
                onClick={() => {
                  setIsSignUp(true);
                  setErrors({});
                }}
                className="text-[#FC8A06] font-semibold hover:underline"
              >
                Sign Up
              </button>
            </p>

            {/* Mobile toggle button */}
            <button
              onClick={() => {
                setIsSignUp(true);
                setErrors({});
              }}
              className="md:hidden w-full py-3 mt-4 border-2 border-[#FC8A06] text-[#FC8A06] rounded-full font-semibold hover:bg-[#FC8A06] hover:text-white transition-all"
            >
              Go to Sign Up
            </button>
          </div>
        </div>

        {/* Sign Up Form - Full width on mobile, left side on desktop */}
        <div 
          className={`w-full md:w-1/2 md:absolute md:top-0 md:left-0 md:h-full flex flex-col justify-start px-6 sm:px-8 lg:px-12 py-8 bg-white transition-all duration-700 overflow-y-auto ${
            isSignUp ? 'flex md:opacity-100 md:translate-x-0' : 'hidden md:flex md:opacity-0 md:pointer-events-none md:-translate-x-full'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Sign Up</h2>
          
          <div className="space-y-3">
            {/* Full Name */}
            <div className="relative">
              <User className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`w-full pl-7 pr-4 py-2.5 bg-transparent border-b-2 ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                } focus:border-[#FC8A06] outline-none transition-colors text-gray-800 text-sm`}
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>

            {/* Username */}
            <div className="relative">
              <User className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                className={`w-full pl-7 pr-4 py-2.5 bg-transparent border-b-2 ${
                  errors.username ? 'border-red-500' : 'border-gray-300'
                } focus:border-[#FC8A06] outline-none transition-colors text-gray-800 text-sm`}
              />
              {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full pl-7 pr-4 py-2.5 bg-transparent border-b-2 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:border-[#FC8A06] outline-none transition-colors text-gray-800 text-sm`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full pl-7 pr-4 py-2.5 bg-transparent border-b-2 ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                } focus:border-[#FC8A06] outline-none transition-colors text-gray-800 text-sm`}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            {/* Address */}
            <div className="relative">
              <Home className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                name="address"
                placeholder="Delivery Address"
                value={formData.address}
                onChange={handleInputChange}
                className={`w-full pl-7 pr-4 py-2.5 bg-transparent border-b-2 ${
                  errors.address ? 'border-red-500' : 'border-gray-300'
                } focus:border-[#FC8A06] outline-none transition-colors text-gray-800 text-sm`}
              />
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
            </div>

            {/* City */}
            <div className="relative">
              <MapPin className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                className={`w-full pl-7 pr-4 py-2.5 bg-transparent border-b-2 ${
                  errors.city ? 'border-red-500' : 'border-gray-300'
                } focus:border-[#FC8A06] outline-none transition-colors text-gray-800 text-sm`}
              />
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
            </div>

            {/* Postal Code */}
            <div className="relative">
              <MapPin className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code (e.g., 100001)"
                value={formData.postalCode}
                onChange={handleInputChange}
                className={`w-full pl-7 pr-4 py-2.5 bg-transparent border-b-2 ${
                  errors.postalCode ? 'border-red-500' : 'border-gray-300'
                } focus:border-[#FC8A06] outline-none transition-colors text-gray-800 text-sm`}
              />
              {errors.postalCode && <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>}
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full pl-7 pr-10 py-2.5 bg-transparent border-b-2 ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                } focus:border-[#FC8A06] outline-none transition-colors text-gray-800 text-sm`}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              {formData.password && (
                <div className="mt-2">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${passwordStrength.color} transition-all duration-300`}
                        style={{ width: `${(passwordStrength.strength / 5) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold">{passwordStrength.label}</span>
                  </div>
                </div>
              )}
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <Lock className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={`w-full pl-7 pr-10 py-2.5 bg-transparent border-b-2 ${
                  errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                } focus:border-[#FC8A06] outline-none transition-colors text-gray-800 text-sm`}
              />
              <button
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-3 mt-4 bg-[#FC8A06] text-white rounded-full font-semibold hover:bg-[#e67e22] transition-colors transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              SIGN UP
            </button>

            <p className="text-center text-sm text-gray-600 mt-3">
              Already have an account?{' '}
              <button
                onClick={() => {
                  setIsSignUp(false);
                  setErrors({});
                }}
                className="text-[#FC8A06] font-semibold hover:underline"
              >
                Sign In
              </button>
            </p>

            {/* Mobile toggle button */}
            <button
              onClick={() => {
                setIsSignUp(false);
                setErrors({});
              }}
              className="md:hidden w-full py-3 mt-4 border-2 border-[#FC8A06] text-[#FC8A06] rounded-full font-semibold hover:bg-[#FC8A06] hover:text-white transition-all"
            >
              Go to Sign In
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}