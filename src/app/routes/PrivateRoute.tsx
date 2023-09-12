import { RootState } from '@tech-glimpse-front/redux-toolkit';
import { showToast } from '@tech-glimpse-front/util';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { authUser } = useSelector((state: RootState) => state.auth);
  if (!authUser) {
    showToast('Protected route. Please login to continue.', 'info');
    return <Navigate to="/signin" replace />;
  }
  return children;
};

export default PrivateRoute;
