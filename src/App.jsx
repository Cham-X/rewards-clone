import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Layout from './layouts/Layout';

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
        </Route>
        <Route index element={<LandingPage />} key="landing-page" />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
