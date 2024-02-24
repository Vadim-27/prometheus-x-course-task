
import { Navigate, Outlet } from 'react-router-dom';


const PrivateRoute = ({ stateLogin }) => {
  if (!stateLogin) {
    return <Navigate to="/singin" />;
  }
  return <Outlet />;
};
export default PrivateRoute;
