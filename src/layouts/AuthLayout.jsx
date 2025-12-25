import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import { useEffect, useState } from 'react';

const AuthLayout = () => {
  return (
    <>
      <ScrollToTop />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
