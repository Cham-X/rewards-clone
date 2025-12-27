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
import Discover from './pages/DashBoard/Discover';
import Library from './pages/DashBoard/Library';
import TechStack from './pages/DashBoard/TechStack';
import Subdcription from './pages/DashBoard/Subdcription';
import Settings from './pages/DashBoard/Settings';
import RewardsHub from './pages/DashBoard/RewardsHub';
import { ErrorPage } from './components/error-component';
import ProtectedRoute from './layouts/ProtectedRoute';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />} key="root-layout">
          <Route index element={<LandingPage />} key="landing-page" />

          {/* Authentication Routes */}
          <Route path="/" element={<AuthLayout />} key="auth-layout">
            <Route path="sign-in" element={<SignIn />} key="sign-in" />
            <Route path="sign-up" element={<SignUp />} key="sign-up" />
            <Route path="/auth/callback" element={<AuthCallback />} key="auth-callback" />
            <Route path="forgot-password" element={<ForgotPassword />} key="forgot-password" />
            <Route path="reset-password" element={<ResetPassword />} key="reset-password" />
          </Route>

          {/* Dashboard Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardLayout />} key="dashboard-layout">
              <Route path="/dashboard" element={<HomePage />} key="dashboard-home" />
              <Route path="/dashboard/discover" element={<Discover />} key="dashboard-discover" />
              <Route path="/dashboard/library" element={<Library />} key="dashboard-library" />
              <Route
                path="/dashboard/tech-stack"
                element={<TechStack />}
                key="dashboard-techstack"
              />
              <Route
                path="/dashboard/subscriptions"
                element={<Subdcription />}
                key="dashboard-subscription"
              />
              <Route
                path="/dashboard/earn-rewards"
                element={<RewardsHub />}
                key="dashboard-earn-rewards"
              />
              <Route path="/dashboard/settings" element={<Settings />} key="dashboard-settings" />
            </Route>
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
