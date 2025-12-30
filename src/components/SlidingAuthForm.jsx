import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock, Phone, MapPin, Home, CheckCircle, AlertCircle, Shield, Sparkles, Heart, Star } from 'lucide-react';

export default function SlidingAuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);
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
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
  };

  const toggleForm = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsSignUp(!isSignUp);
      setErrors({});
      setTouched({});
      setTimeout(() => setIsAnimating(false), 300);
    }, 300);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    return phoneRegex.test(phone);
  };

  const validatePostalCode = (code) => {
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
      setFormData({
        fullName: '', username: '', email: '', phone: '',
        password: '', confirmPassword: '', address: '', city: '', postalCode: ''
      });
      setErrors({});
      setTouched({});
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

  const InputField = ({ icon: Icon, type, name, placeholder, value, showToggle, onToggleShow, error, showSuccess }) => (
    <div className="relative group">
      <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
        error ? 'border-red-400 bg-red-50' : 
        showSuccess ? 'border-green-400 bg-green-50' :
        'border-gray-200 bg-white focus-within:border-[#FC8A06] focus-within:bg-orange-50/30'
      }`}>
        <Icon className={`${error ? 'text-red-500' : showSuccess ? 'text-green-500' : 'text-gray-400'} transition-colors`} size={20} />
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          onBlur={() => handleBlur(name)}
          className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 text-sm font-medium"
        />
        {showToggle && (
          <button onClick={onToggleShow} type="button" className="text-gray-400 hover:text-gray-600 transition-colors">
            {showToggle === 'password' ? (showPassword ? <EyeOff size={20} /> : <Eye size={20} />) :
             (showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />)}
          </button>
        )}
        {showSuccess && <CheckCircle className="text-green-500" size={20} />}
      </div>
      {error && (
        <div className="flex items-center gap-1.5 mt-2 text-red-600">
          <AlertCircle size={14} />
          <p className="text-xs font-medium">{error}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-linear-to-br from-gray-50 via-orange-50/20 to-gray-50 overflow-hidden">
      <div className="relative w-full max-w-275 bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Animated Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Sign In Shapes (Pizza slices and food items) */}
          <div className={`absolute transition-all duration-1000 ${isSignUp ? 'opacity-0 -translate-x-full rotate-180' : 'opacity-100 translate-x-0 rotate-0'}`}>
            <div className="absolute top-20 right-20 w-16 h-16 animate-float">
              <div className="text-6xl">🍕</div>
            </div>
            <div className="absolute top-40 right-40 w-12 h-12 animate-float-delayed">
              <div className="text-5xl">🍔</div>
            </div>
            <div className="absolute bottom-32 right-32 w-14 h-14 animate-float-slow">
              <div className="text-5xl">🍟</div>
            </div>
            <div className="absolute top-1/2 right-24 w-10 h-10 animate-bounce-slow">
              <div className="text-4xl">🥤</div>
            </div>
          </div>

          {/* Sign Up Shapes (Stars, hearts, sparkles) */}
          <div className={`absolute transition-all duration-1000 ${isSignUp ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-full -rotate-180'}`}>
            <Star className="absolute top-24 left-24 text-yellow-400 animate-spin-slow" size={40} fill="currentColor" />
            <Heart className="absolute top-48 left-48 text-pink-400 animate-pulse-slow" size={36} fill="currentColor" />
            <Sparkles className="absolute bottom-40 left-36 text-purple-400 animate-bounce-slow" size={32} />
            <div className="absolute top-1/3 left-20 w-3 h-3 bg-blue-400 rounded-full animate-ping-slow"></div>
            <div className="absolute bottom-1/3 left-32 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            <Star className="absolute bottom-24 left-16 text-orange-400 animate-spin-reverse" size={28} fill="currentColor" />
          </div>
        </div>

        <div className="relative flex flex-col lg:flex-row min-h-175">
          
          {/* Left Panel - Info Section with Flip Animation and Curved Edge */}
          <div className={`w-full lg:w-[45%] bg-linear-to-br from-[#FC8A06] via-[#ff9920] to-[#FC8A06] p-8 lg:p-12 flex flex-col justify-center text-white relative overflow-hidden transition-all duration-700 ${
            isSignUp ? 'lg:order-2 lg:rounded-tl-[150px]' : 'lg:order-1 lg:rounded-tr-[150px]'
          }`}>
            
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className={`absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full transition-all duration-1000 ${isAnimating ? 'scale-150 rotate-180' : 'scale-100 rotate-0'}`}></div>
              <div className={`absolute bottom-20 right-10 w-40 h-40 border-4 border-white rounded-full transition-all duration-1000 ${isAnimating ? 'scale-0 -rotate-180' : 'scale-100 rotate-0'}`}></div>
              <div className={`absolute top-1/2 right-1/4 w-24 h-24 border-4 border-white rounded-full transition-all duration-1000 ${isAnimating ? 'scale-200 rotate-360' : 'scale-100 rotate-0'}`}></div>
            </div>

            <div className={`relative z-10 transition-all duration-500 ${isAnimating ? 'opacity-0 scale-90 translate-y-10' : 'opacity-100 scale-100 translate-y-0'}`}>
              {/* Logo/Brand */}
              <div className="mb-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 transform hover:rotate-12 transition-transform duration-300">
                  <Shield className="text-white" size={32} />
                </div>
                <h2 className="text-xl font-bold">Order.uk</h2>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {isSignUp ? 'Join Our Community!' : 'Welcome Back!'}
              </h1>
              
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                {isSignUp 
                  ? 'Create your account and start enjoying delicious meals delivered to your doorstep'
                  : 'Sign in to continue your food journey with us and explore amazing restaurants'
                }
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 transform hover:translate-x-2 transition-transform">
                  <CheckCircle size={20} />
                  <span className="text-white/90">Fast & Reliable Delivery</span>
                </div>
                <div className="flex items-center gap-3 transform hover:translate-x-2 transition-transform">
                  <CheckCircle size={20} />
                  <span className="text-white/90">Secure Payment Options</span>
                </div>
                <div className="flex items-center gap-3 transform hover:translate-x-2 transition-transform">
                  <CheckCircle size={20} />
                  <span className="text-white/90">24/7 Customer Support</span>
                </div>
              </div>

              <button
                onClick={toggleForm}
                className="px-8 py-3 bg-white text-[#FC8A06] rounded-full font-bold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isSignUp ? 'Already have an account? Sign In' : 'New here? Create Account'}
              </button>
            </div>
          </div>

          {/* Right Panel - Form Section with Curved Edge */}
          <div className={`w-full lg:w-[55%] p-8 lg:p-12 flex flex-col justify-center transition-all duration-700 ${
            isSignUp ? 'lg:order-1 lg:rounded-tr-[150px]' : 'lg:order-2 lg:rounded-tl-[150px]'
          }`}>
            
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'}`}>
              {!isSignUp ? (
                // Sign In Form
                <div className="max-w-md mx-auto w-full">
                  <div className="mb-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Sign In</h2>
                    <p className="text-gray-600">Enter your credentials to access your account</p>
                  </div>

                  <div className="space-y-5">
                    <InputField
                      icon={Mail}
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      error={errors.email}
                      showSuccess={touched.email && formData.email && !errors.email && validateEmail(formData.email)}
                    />

                    <InputField
                      icon={Lock}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      showToggle="password"
                      onToggleShow={() => setShowPassword(!showPassword)}
                      error={errors.password}
                    />

                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#FC8A06] focus:ring-[#FC8A06]" />
                        <span className="text-gray-600">Remember me</span>
                      </label>
                      <button type="button" className="text-[#FC8A06] font-semibold hover:underline">
                        Forgot Password?
                      </button>
                    </div>

                    <button
                      onClick={handleSubmit}
                      type="button"
                      className="w-full py-4 bg-linear-to-r from-[#FC8A06] to-[#ff9920] text-white rounded-xl font-bold hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    >
                      Sign In
                    </button>

                    <div className="text-center text-sm text-gray-600">
                      Don't have an account?{' '}
                      <button
                        type="button"
                        onClick={toggleForm}
                        className="text-[#FC8A06] font-bold hover:underline"
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                // Sign Up Form
                <div className="max-w-md mx-auto w-full">
                  <div className="mb-6">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Create Account</h2>
                    <p className="text-gray-600">Fill in your details to get started</p>
                  </div>

                  <div className="space-y-4 max-h-125 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    <InputField icon={User} type="text" name="fullName" placeholder="Full Name" value={formData.fullName} error={errors.fullName} showSuccess={touched.fullName && formData.fullName && !errors.fullName && formData.fullName.length >= 3} />
                    <InputField icon={User} type="text" name="username" placeholder="Username" value={formData.username} error={errors.username} showSuccess={touched.username && formData.username && !errors.username && formData.username.length >= 3} />
                    <InputField icon={Mail} type="email" name="email" placeholder="Email Address" value={formData.email} error={errors.email} showSuccess={touched.email && formData.email && !errors.email && validateEmail(formData.email)} />
                    <InputField icon={Phone} type="tel" name="phone" placeholder="Phone Number" value={formData.phone} error={errors.phone} showSuccess={touched.phone && formData.phone && !errors.phone && validatePhone(formData.phone)} />
                    <InputField icon={Home} type="text" name="address" placeholder="Delivery Address" value={formData.address} error={errors.address} showSuccess={touched.address && formData.address && !errors.address} />
                    <InputField icon={MapPin} type="text" name="city" placeholder="City" value={formData.city} error={errors.city} showSuccess={touched.city && formData.city && !errors.city} />
                    <InputField icon={MapPin} type="text" name="postalCode" placeholder="Postal Code (6 digits)" value={formData.postalCode} error={errors.postalCode} showSuccess={touched.postalCode && formData.postalCode && !errors.postalCode && validatePostalCode(formData.postalCode)} />
                    
                    <div>
                      <InputField icon={Lock} type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={formData.password} showToggle="password" onToggleShow={() => setShowPassword(!showPassword)} error={errors.password} />
                      {formData.password && (
                        <div className="mt-3 px-2">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-semibold text-gray-600">Password Strength</span>
                            <span className={`text-xs font-bold ${passwordStrength.color.replace('bg-', 'text-')}`}>{passwordStrength.label}</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className={`h-full ${passwordStrength.color} transition-all duration-300 rounded-full`} style={{ width: `${(passwordStrength.strength / 5) * 100}%` }} />
                          </div>
                        </div>
                      )}
                    </div>

                    <InputField icon={Lock} type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} showToggle="confirm" onToggleShow={() => setShowConfirmPassword(!showConfirmPassword)} error={errors.confirmPassword} showSuccess={touched.confirmPassword && formData.confirmPassword && !errors.confirmPassword && formData.password === formData.confirmPassword} />
                  </div>

                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="w-full py-4 mt-6 bg-linear-to-r from-[#FC8A06] to-[#ff9920] text-white rounded-xl font-bold hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  >
                    Create Account
                  </button>

                  <div className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{' '}
                    <button type="button" onClick={toggleForm} className="text-[#FC8A06] font-bold hover:underline">
                      Sign In
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-10deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}