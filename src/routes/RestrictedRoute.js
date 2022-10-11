import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

// const PublicRoute = ({ children, restricted = false, ...routeProps }) => {
//   const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
//   const shouldRedirect = isLoggedIn && restricted;

//   return (
//     <Route {...routeProps}>
//       {shouldRedirect ? <Navigate to="/" /> : children}
//     </Route>
//   );
// };

export default RestrictedRoute;
