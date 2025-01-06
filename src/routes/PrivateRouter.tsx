import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
  if (!localStorage.getItem('token')) localStorage.clear();
  return localStorage.getItem('token') ? (
    <Outlet />
  ) : (
    <Navigate to={'login'} replace />
  );
};

export default PrivateRouter;
