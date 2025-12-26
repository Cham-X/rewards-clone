import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Layout from './layouts/Layout';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import { Toaster } from 'react-hot-toast';
import AuthCallback from './pages/Auth/AuthCallback';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import HomePage from './pages/DashBoard/Home';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={<Layout />}
          // errorElement={<ErrorPage />}
          key="root-layout"
        >
          <Route index element={<LandingPage />} key="landing-page" />

          {/* Authentication Routes */}
          <Route path="/" element={<AuthLayout />} key="auth-layout">
            <Route path="sign-in" element={<SignIn />} key="sign-in" />
            <Route path="sign-up" element={<SignUp />} key="sign-up" />
            <Route path="/auth/callback" element={<AuthCallback />} key="auth-callback" />
            <Route path="forgot-password" element={<ForgotPassword />} key="forgot-password" />
            <Route path="reset-password" element={<ResetPassword />} key="reset-password" />
          </Route>

          <Route path="/dashboard" element={<DashboardLayout />} key="dashboard-layout">
            <Route path="/dashboard" element={<HomePage />} key="dashboard-home" />
          </Route>
        </Route>
      </>
    )
  );

  return (
    <>
      <Toaster position="top-right" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
