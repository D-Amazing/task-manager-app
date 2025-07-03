// src/components/PrivateRoute.tsx
import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

interface Props {
  component: React.ComponentType;
}

const PrivateRoute = ({ component }: Props) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <p className="text-center mt-10">Loading protected content...</p>,
  });

  return <Component key={Component.displayName || Component.name} />;
};


export default PrivateRoute;

// This component wraps a given component with Auth0's authentication check.
// It uses `withAuthenticationRequired` to ensure that the user is authenticated before accessing the component
// and displays a loading message while the authentication check is in progress.
// The `component` prop is the component that requires authentication, and it will be rendered only
// if the user is authenticated. If not, the user will be redirected to the Auth0 login page.
// This is useful for protecting routes in a React application that require user authentication.
// The `onRedirecting` option allows you to customize the loading state while the authentication check
// is being performed, providing a better user experience during the authentication process.
// This component can be used in conjunction with React Router to protect specific routes in your application,
// ensuring that only authenticated users can access certain parts of the app.
// To use this component, you would typically import it and wrap your protected routes with it in your routing setup.
// For example:
// ```jsx
// <PrivateRoute component={YourProtectedComponent} />
// ```
// This will ensure that `YourProtectedComponent` is only accessible to authenticated users, enhancing the security of your application.    
