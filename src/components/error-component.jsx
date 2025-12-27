import React from 'react';
import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';
import { AlertTriangle, RefreshCw, Home, Zap, Search } from 'lucide-react';

/* =========================
   FLOWVA LOADING SCREEN
========================= */
const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center min-h-[100svh]">
      <div className="logo-loader-container">
        <div className="logo-glow-wrapper animate-pulse">
          <img src="/assets/flowva_logo-xVpZI3-U.png" alt="Flowva Logo" className="logo-image" />
          <div className="lightning-sweep"></div>
        </div>
      </div>
    </div>
  );
};

/* =========================
   NOT FOUND PAGE
========================= */
const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center rounded-tl-3xl bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="mx-4 w-full max-w-md relative">
        {/* Animated 404 */}
        <div className="mb-8 text-center">
          <div className="relative">
            <div className="text-8xl font-bold text-slate-200 select-none">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 animate-pulse items-center justify-center rounded-full bg-linear-to-r from-emerald-400 to-teal-500">
                <Search className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-slate-800">Page Not Found</h1>
            <p className="text-slate-600">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link to="/" className="w-full">
              <button className="w-full rounded-lg bg-linear-to-r from-emerald-500 to-teal-600 py-3 font-medium text-white shadow-lg transition-all duration-200 hover:from-emerald-600 hover:to-teal-700 hover:shadow-xl">
                <Home className="mr-2 h-4 w-4 inline" />
                Back to Dashboard
              </button>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="w-fit rounded-lg border border-slate-300 py-3 px-4 text-slate-700 hover:bg-slate-50"
            >
              Go Back
            </button>
          </div>
        </div>

        {/* Decorative dots */}
        <div className="absolute top-20 left-10 h-2 w-2 animate-ping rounded-full bg-emerald-400 opacity-60"></div>
        <div className="absolute right-10 bottom-20 h-3 w-3 animate-pulse rounded-full bg-teal-400 opacity-40"></div>
        <div className="absolute top-1/3 right-20 h-1 w-1 animate-bounce rounded-full bg-emerald-300 opacity-80"></div>
      </div>
    </div>
  );
};

/* =========================
   ERROR PAGE
========================= */
const ErrorPage = () => {
  const error = useRouteError();
  const isDev = import.meta.env.DEV;

  const errorMessage = isRouteErrorResponse(error)
    ? error.statusText || error.data
    : error instanceof Error
    ? error.message
    : 'Unknown error occurred';

  const isChunkLoadError =
    error?.message?.includes('Failed to fetch dynamically imported module') ||
    error?.message?.includes('Loading chunk') ||
    error?.message?.includes('Loading CSS chunk') ||
    error?.message?.toLowerCase()?.includes('loading failed');

  React.useEffect(() => {
    if (isChunkLoadError) {
      const timeout = setTimeout(() => {
        window.location.reload();
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [isChunkLoadError]);

  if (isChunkLoadError) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
      <div className="mx-4 w-full max-w-lg">
        {/* Icon */}
        <div className="mb-8 text-center">
          <div className="relative inline-block">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-r from-red-400 to-orange-500 shadow-lg">
              <AlertTriangle className="h-12 w-12 animate-pulse text-white" />
            </div>
            <div className="absolute -top-2 -right-2 h-6 w-6 animate-ping rounded-full bg-red-500 opacity-75"></div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-center">
          <div className="space-y-3">
            <h1 className="text-2xl font-semibold text-slate-800">Something went wrong</h1>
            <p className="text-slate-600">
              An unexpected error occurred while processing your request.
            </p>
          </div>

          {isDev && (
            <div className="rounded-lg border border-slate-200 bg-slate-100 p-4 text-left">
              <h3 className="mb-2 font-medium text-slate-800">Error Details:</h3>
              <code className="text-sm break-all text-red-600">{errorMessage}</code>
            </div>
          )}

          <div className="space-y-3">
            <button
              onClick={() => window.location.reload()}
              className="w-full rounded-lg bg-linear-to-r from-emerald-500 to-teal-600 py-3 font-medium text-white shadow-lg transition-all duration-200 hover:from-emerald-600 hover:to-teal-700 hover:shadow-xl"
            >
              <RefreshCw className="mr-2 h-4 w-4 inline" />
              Reload Page
            </button>

            <Link to="/" className="block">
              <button className="w-full rounded-lg border border-slate-300 py-3 text-slate-700 hover:bg-slate-50">
                <Home className="mr-2 h-4 w-4 inline" />
                Go to Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================
   SUSPENSE HOC
========================= */
const WithSuspense = (Component) => {
  return function WrappedComponent(props) {
    return (
      <React.Suspense fallback={<LoadingScreen />}>
        <Component {...props} />
      </React.Suspense>
    );
  };
};

export { NotFoundPage, ErrorPage, WithSuspense, LoadingScreen };
