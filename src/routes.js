import { Navigate, useNavigate, useRoutes } from 'react-router-dom';
// layouts
import { useEffect } from 'react';
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import CagesPage from './pages/CagesPage';
import StorePage from './pages/StorePages';
import useAuth from './hooks/useAuth';

// ----------------------------------------------------------------------

export default function Router() {
  const navigate = useNavigate()
  const {auth } = useAuth();
  useEffect(() => {
    if(!auth.name){
      navigate('/login');
    }
  }, [auth, navigate]);
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'jaulas', element: <CagesPage /> },
        { path: 'tiendas', element: <StorePage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage/>,
      children:[
        { path: '*', element: <Navigate to="/login" />, index: true  },
      ]
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true }, // si esta logueado resirigir a /dashboard/app sino a /login
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
