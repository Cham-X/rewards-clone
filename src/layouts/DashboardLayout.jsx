import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Bell } from 'lucide-react';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <main className="w-full bg-gray-50 px-4 lg:px-8 lg:pt-8 min-h-screen grow md:overflow-y-auto">
        <div className="relative bg-gray-50">
          {/* Header */}
          <div className="sticky top-0 z-20 bg-gray-50 pb-2 flex py-2 pt-3 lg:pt-0">
            <div className="bg-gray-50 flex justify-between items-center w-full">
              <div className="flex items-center gap-3">
                <button onClick={toggleSidebar} className="lg:hidden">
                  <Menu size={28} />
                </button>
                <div className="flex items-center gap-1">
                  <h1 className="whitespace-nowrap text-xl md:text-2xl font-medium">
                    Good afternoon,
                  </h1>
                  <span className="text-purple-600 text-xl md:text-2xl truncate max-w-30 md:max-w-52.5 font-medium">
                    Hjjjj
                  </span>
                </div>
              </div>
              <div className="mt-2">
                <button className="relative group" aria-label="Notifications">
                  <Bell size={24} className="text-gray-700 group-hover:text-purple-600" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    1
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:h-[calc(100vh-85px)] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
