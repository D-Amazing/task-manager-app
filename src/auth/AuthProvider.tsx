// src/auth/AuthProvider.tsx
import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

interface Props {
  children: React.ReactNode;
}

const AuthProvider: React.FC<Props> = ({ children }) => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN!;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID!;


  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;

// This component wraps the Auth0Provider around the application to provide authentication context.
// It uses environment variables for the Auth0 domain and client ID, allowing for flexibility in configuration.
// The `Auth0Provider` component is essential for integrating Auth0 authentication into the React application