// src/hooks/useAuth.ts
import { useAuth0 } from "@auth0/auth0-react";

export const useAuth = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return { loginWithRedirect, logout, user, isAuthenticated };
};
// This custom hook provides a simple interface to access Auth0 authentication methods and user information.
// It uses the `useAuth0` hook from the Auth0 React SDK to get the authentication functions and user state.
// The `loginWithRedirect` function is used to initiate the login process, `logout`
// is used to log the user out, and `user` contains the authenticated user's information.
// The `isAuthenticated` boolean indicates whether the user is currently authenticated.