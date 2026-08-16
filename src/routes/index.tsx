import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '../layouts/AppLayout';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { HomePage } from '../pages/Home';
import { LoginPage } from '../pages/Login';
import { RegisterPage } from '../pages/Register';
import { DashboardPage } from '../pages/Dashboard';
import { ProfilePage } from '../pages/Profile';
import { ManageUsersPage } from '../pages/ManageUsers';
import { ProtectedRoute } from '../components/common/ProtectedRoute';
import { ErrorBoundary } from '../components/common/ErrorBoundary';

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorBoundary />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: 'login',
            element: <LoginPage />,
          },
          {
            path: 'register',
            element: <RegisterPage />,
          },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <DashboardLayout />,
            children: [
              {
                path: 'dashboard',
                element: <DashboardPage />,
              },
              {
                path: 'profile',
                element: <ProfilePage />,
              },
              {
                path: 'users',
                element: <ManageUsersPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
