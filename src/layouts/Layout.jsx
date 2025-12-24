// import { Toaster } from '@/components/ui/sonner';
import { ScrollRestoration } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen w-full">
      {/* <Toaster /> */}
      {/* Main content */}
      <div className="h-full">
        <ScrollRestoration />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
