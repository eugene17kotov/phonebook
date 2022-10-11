import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

const PrivatRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);

  const shouldRedirect = !isRefreshing && !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

// const PrivatRoute = ({ children, ...routeProps }) => {
//   const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

//   return (
//     <Route {...routeProps}>{isLoggedIn ? <Navigate to="/" /> : children}</Route>
//   );
// };

export default PrivatRoute;
