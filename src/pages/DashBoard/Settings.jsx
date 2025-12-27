import { useEffect, useState, useMemo } from 'react';
import { supabase } from '../../lib/supabase';
import { toast } from 'react-hot-toast';
import { useAuth } from '../../hooks/useAuth';
import { UserIcon } from 'lucide-react';
import { File } from 'lucide-react';

const Settings = () => {
  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(null);

  // Get logged-in user
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setUser(user);
        setFirstName(user.user_metadata?.first_name || '');
        setLastName(user.user_metadata?.last_name || '');
        setUrl(user.user_metadata?.avatar_url || null);
      }
    };

    getUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      data: {
        first_name: firstName,
        last_name: lastName,
      },
    });

    setLoading(false);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Profile updated successfully');
    }
  };

  if (!user) return null;

  return (
    <div className="lg:h-[calc(100vh-99px)] my-3 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none]">
      <div className="grid md:grid-cols-[1fr_1fr] gap-6">
        <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm">
          <div className="flex ">
            <UserIcon className="h-6 w-6 text-[#9013FE] mr-2" />
            <h2 className="font-semibold text-lg mb-6">Profile Information</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="w-10 h-10 relative overflow-hidden rounded-full font-semibold mr-3 flex items-center justify-center text-purple-600 bg-purple-100">
                {url ? (
                  <img
                    src={url}
                    alt="User avatar"
                    className="h-full w-full rounded-full object-cover"
                  />
                ) : (
                  <span className="uppercase">{firstName?.trim() ? firstName.charAt(0) : ''}</span>
                )}
              </div>
            </div>
            {/* Email */}
            <div>
              <label className="text-sm block mb-1">Email Address</label>
              <input
                value={user.email}
                disabled
                className="w-full rounded-lg p-3 text-sm border border-[#E2E8F0]"
              />
            </div>

            {/* First + Last name */}
            <div className="flex gap-4">
              <div className="w-full">
                <label className="text-sm block mb-1">First Name</label>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full rounded-lg p-3 text-sm border border-[#E2E8F0] focus:border-[#9013fe] outline-none"
                />
              </div>

              <div className="w-full">
                <label className="text-sm block mb-1">Last Name</label>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full rounded-lg p-3 text-sm border border-[#E2E8F0] focus:border-[#9013fe] outline-none"
                />
              </div>
            </div>

            <button
              disabled={loading}
              className="px-4 py-3 rounded-lg text-sm font-medium text-white bg-[#9013FE] hover:bg-[#7c0fe0] disabled:opacity-60 w-full"
            >
              {loading ? (
                'Saving Change...'
              ) : (
                <span className="flex items-center justify-center">
                  <File className="h-4 font-bold" /> Save Changes
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
