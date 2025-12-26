import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuth = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        toast.error('Authentication failed');
        navigate('/sign-in');
        return;
      }

      if (data.session) {
        toast.success('Email verified successfully!');
        navigate('/dashboard');
      } else {
        navigate('/sign-in');
      }
    };

    handleAuth();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg font-medium">Confirming your email...</p>
    </div>
  );
};

export default AuthCallback;
