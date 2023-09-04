import { RootState } from '@tech-glimpse-front/redux-toolkit';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { authUser } = useSelector((state: RootState) => state.auth);
  if (!authUser) {
    toast.dismiss();
    toast.info('Protected route. Please login to continue.');
    return <Navigate to="/signin" replace />;
  }
  return children;
};

export default PrivateRoute;
