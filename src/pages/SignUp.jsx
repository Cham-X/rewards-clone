import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import GoogleIcon from '../components/GoogleIcon';
import InputField from '../components/InputField';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      alert('Check your email to confirm your account');
    }

    setLoading(false);
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
    console.log('Google sign-in clicked');
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

            {/* Form */}
            <div className="w-full">
              <div className="w-full text-[#111827]">
                <InputField
                  id="email"
                  type="email"
                  label="Email"
                  placeholder="user@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password" className="block text-sm font-medium mb-2 text-[#111827]">
                  Password
                </label>
                <div className="relative">
                  <div className="relative group w-full">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      placeholder="••••••••"
                      className="peer w-full border py-2.5 text-base px-3.5 border-[#EDE9FE] transition-all ease-linear duration-200 rounded-md outline-none focus:border-[#9013fe]"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                </div>

                <label htmlFor="password" className="block text-sm font-medium mb-2 text-[#111827]">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="relative group w-full">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      placeholder="••••••••"
                      className="peer w-full border py-2.5 text-base px-3.5 border-[#EDE9FE] transition-all ease-linear duration-200 rounded-md outline-none focus:border-[#9013fe]"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                </div>

                <div className="flex justify-end items-center w-full mb-2">
                  <a
                    className="mt-2 text-[#9013fe] no-underline text-sm font-medium hover:underline cursor-pointer"
                    href="/forgot-password"
                  >
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full h-13.75 gap-2 flex justify-center text-base items-center p-2.75 text-center bg-[#9013FE] text-white font-medium border-none transition-colors ease-linear duration-200 rounded-[100px] hover:bg-[#6D28D9] cursor-pointer"
                >
                  {loading ? 'Creating account...' : 'Sign Up Account'}
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
                  Already have an account?{' '}
                  <a
                    href="/sign-in"
                    className="text-[#9013fe] no-underline font-medium hover:underline cursor-pointer"
                  >
                    Log In
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

export default SignUp;
