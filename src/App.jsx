import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Layout from './layouts/Layout';
import AuthLayout from './layouts/AuthLayout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { Toaster } from 'react-hot-toast';
import AuthCallback from './pages/AuthCallback';

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
