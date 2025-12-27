import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import GoogleIcon from '../../components/GoogleIcon';
import InputField from '../../components/InputField';
import { toast } from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [response, setResponse] = useState({ type: '', message: '' });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setResponse({ type: 'error', message: 'Please fix the errors in the form' });
      toast.error('Please fix the errors in the form');
      return;
    }

    setLoading(true);
    setErrors({});
    setResponse({ type: '', message: '' });

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setResponse({ type: 'error', message: error.message || 'Failed to sign in' });
        toast.error(error.message || 'Failed to sign in');
      } else {
        setResponse({ type: 'success', message: 'Successfully signed in!' });
        toast.success('Successfully signed in!');
        // Redirect or handle successful login
        window.location.href = '/dashboard';
      }
    } catch (err) {
      setResponse({ type: 'error', message: 'An unexpected error occurred' });
      toast.error('An unexpected error occurred');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        setResponse({ type: 'error', message: error.message || 'Failed to sign in with Google' });
        toast.error(error.message || 'Failed to sign in with Google');
      }
    } catch (err) {
      setResponse({ type: 'error', message: 'An unexpected error occurred' });
      toast.error('An unexpected error occurred');
      console.error('Google sign-in error:', err);
    }
  };

  return (
    <div className="min-h-dvh flex justify-center py-5 px-3 items-center bg-linear-to-br from-[#9013fe] to-[#6D28D9]">
      <div
        className={`transition-all duration-700 ease-out
        ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      >
        <div className="flex justify-center w-full max-w-105">
          <div className="w-full shadow-[0_4px_6px_rgba(0,0,0,0.1)] py-7.5 px-5 lg:p-10 bg-white rounded-[10px] h-fit">
            {/* Header */}
            <div className="mb-7.5">
              <h1 className="text-2xl text-[#6D28D9] font-semibold mb-2 text-center w-full">
                Log in to flowva
              </h1>
              <p className="text-sm text-[#6B7280] text-center w-full">
                Log in to receive personalized recommendations
              </p>
            </div>

            {/* Response Message */}
            {response.message && (
              <div
                className={`mb-5 p-4 rounded-lg flex items-start gap-3 ${
                  response.type === 'success'
                    ? 'bg-green-50 border border-green-200'
                    : 'bg-red-50 border border-red-200'
                }`}
              >
                <svg
                  className={`w-5 h-5 shrink-0 ${
                    response.type === 'success' ? 'text-green-500' : 'text-red-500'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <p
                  className={`text-sm font-medium ${
                    response.type === 'success' ? 'text-green-800' : 'text-red-800'
                  }`}
                >
                  {response.message}
                </p>
              </div>
            )}

            {/* Form */}
            <div className="w-full">
              <div className="w-full text-[#111827]">
                {/* Email Field */}
                <InputField
                  id="email"
                  type="email"
                  label="Email"
                  placeholder="user@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  error={errors.email}
                />

                {/* Password Field */}
                <label htmlFor="password" className="block text-sm font-medium mb-2 text-[#111827]">
                  Password
                </label>
                <div className="relative mb-5">
                  <div className="relative group w-full">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      placeholder="••••••••"
                      className={`peer w-full border py-2.5 text-base px-3.5 ${
                        errors.password ? 'border-red-500' : 'border-[#EDE9FE]'
                      } transition-all ease-linear duration-200 rounded-md outline-none focus:border-[#9013fe]`}
                      required
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (errors.password) setErrors({ ...errors, password: '' });
                      }}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-md peer-focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]" />
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 border-none text-[#A78BFA] h-fit font-medium text-xs top-0 bottom-0 m-auto bg-transparent cursor-pointer"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                  )}
                </div>

                <div className="flex justify-end items-center w-full mb-2">
                  <a
                    className="mt-2 text-[#9013fe] no-underline text-sm font-medium hover:underline cursor-pointer"
                    href="/forgot-password"
                  >
                    Forgot Password?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full h-13.75 gap-2 flex justify-center text-base items-center p-2.75 text-center bg-[#9013FE] text-white font-medium border-none transition-colors ease-linear duration-200 rounded-[100px] hover:bg-[#6D28D9] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Signing In</span>
                    </>
                  ) : (
                    'Sign in'
                  )}
                </button>
              </div>

              {/* Divider */}
              <div className="relative flex items-center w-full my-5">
                <div className="grow h-px bg-[#EDE9FE]" />
                <span className="text-[13px] text-[#A78BFA] font-medium bg-white px-3">or</span>
                <div className="grow h-px bg-[#EDE9FE]" />
              </div>

              {/* Google Sign In */}
              <button
                onClick={handleGoogleSignIn}
                className="border py-3 px-3.5 text-sm w-full gap-2 text-[#111827] border-[#EDE9FE] rounded-md hover:bg-[#F5F3FF] transition-colors flex items-center justify-center relative cursor-pointer"
              >
                <GoogleIcon />
                <span>Sign in with Google</span>
              </button>

              {/* Sign Up Link */}
              <div className="text-center mt-5 text-sm">
                <p className="text-[#6B7280]">
                  Don't have an account?{' '}
                  <a
                    href="/sign-up"
                    className="text-[#9013fe] no-underline font-medium hover:underline cursor-pointer"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
