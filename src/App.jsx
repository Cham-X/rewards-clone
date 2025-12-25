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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Toaster position="top-right" />
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
          </Route>
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
