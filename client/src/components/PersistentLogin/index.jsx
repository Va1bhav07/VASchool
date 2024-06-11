import { useAccessToken } from '../../hooks/useAccessToken';
import { Outlet } from 'react-router-dom';

function PersistentLogin() {
  useAccessToken();

  return <Outlet />;
}

export default PersistentLogin;
