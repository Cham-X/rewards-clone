import { useLocation, Link } from 'react-router-dom';
import { Home, Compass, Box, Layers, CreditCard, Gem, Settings } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useMemo } from 'react';

// Sidebar Component
const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const { user } = useAuth();

  const menuItems = [
    { icon: Home, label: 'Home', href: '/dashboard' },
    { icon: Compass, label: 'Discover', href: '/dashboard/discover' },
    { icon: Box, label: 'Library', href: '/dashboard/library' },
    { icon: Layers, label: 'Tech Stack', href: '/dashboard/tech-stack' },
    { icon: CreditCard, label: 'Subscriptions', href: '/dashboard/subscriptions' },
    { icon: Gem, label: 'Rewards Hub', href: '/dashboard/earn-rewards' },
    { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const avatarUrl = useMemo(() => {
    if (!user) return null;

    return user.user_metadata?.avatar_url;
  }, [user]);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-72 bg-white shadow-md border-r border-black/10
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col h-screen
      `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-2 px-7 my-2 flex justify-start">
            <img src="/assets/flowva_logo-xVpZI3-U.png" alt="Flowva Logo" className="h-15" />
          </div>

          {/* Navigation */}
          <nav className="grow px-4">
            <ul>
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <li key={index}>
                    <Link
                      to={item.href}
                      onClick={() => toggleSidebar && toggleSidebar()}
                      className={`
                        flex items-center gap-3 px-4 p-3 mb-2 rounded-lg cursor-pointer
                        transition-all duration-200
                        ${
                          active
                            ? 'bg-purple-100 text-purple-600'
                            : 'text-black hover:bg-purple-50 hover:text-purple-600'
                        }
                      `}
                    >
                      <Icon size={20} />
                      <span className="tracking-wide truncate">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* User Profile */}
          <div className="mt-auto py-3 relative flex justify-center">
            <div className="absolute top-0 left-4 right-4 border-t border-gray-400" />
            <div className="w-full flex items-center justify-between px-4">
              <button className="flex items-center border-none">
                <div className="w-10 h-10 relative overflow-hidden rounded-full font-semibold mr-3 flex items-center justify-center text-purple-600 bg-purple-100">
                  {avatarUrl ? (
                    <img
                      src={avatarUrl}
                      alt="User avatar"
                      className="h-full w-full rounded-full object-cover"
                    />
                  ) : (
                    <span className="uppercase">
                      {user?.user_metadata?.first_name?.trim()
                        ? user?.user_metadata?.first_name.charAt(0)
                        : user?.email?.charAt(0) || '?'}
                    </span>
                  )}
                </div>

                <div className="text-start">
                  <span className="text-sm font-semibold block">
                    {user?.user_metadata?.first_name || 'User'}
                  </span>
                  <p className="text-xs text-gray-500 truncate max-w-38.25">{user?.email || ''}</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
