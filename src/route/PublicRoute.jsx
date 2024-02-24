
import {Navigate, Outlet } from "react-router-dom";


const PublicRoute = ({ stateLogin }) => {
  if (stateLogin) {
    return <Navigate to="/books" />;
  }
  return <Outlet />;
};
export default PublicRoute;
