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
      // old flex-grow-1 align-content-center  align-self-center
      <div className="min-vh-100 d-flex bg-dark text-white">
        <SpinnerComp className="m-auto" />
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
