import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SpinnerComp } from '../components/Spinner';

const ProtectedRoutes = () => {
  // code for authentication for protected routes
  //  i.e. components require login of user
  const location = useLocation();
  const authData = useSelector((state) => state.authReducer);
  console.log('auht :>> ', authData);
  const { isLoggedIn, isLoading } = authData;

  const userLogin = localStorage.getItem('userLogin') === 'true';

  if (!userLogin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (isLoading) {
    return (
      <div className="flex-grow-1 align-content-center  align-self-center">
        <SpinnerComp />
      </div>
    );
  }
  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;
