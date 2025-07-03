// components/AuthButtons.tsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthButtons: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className="space-x-4">
      {isAuthenticated ? (
        <>
          <span>Welcome, {user?.name}</span>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Logout
          </button>
        </>
      ) : (
        <button onClick={() => loginWithRedirect()}>Login</button>
      )}
    </div>
  );
};

export default AuthButtons;
// This component provides authentication buttons for logging in and out using Auth0.
// It uses the `useAuth0` hook to access authentication methods and user information.
// When the user is authenticated, it displays a welcome message with the user's name and a logout button.
// If the user is not authenticated, it shows a login button that redirects to the Auth0
// login page.
// The component is styled with Tailwind CSS classes for spacing and layout.
// The `loginWithRedirect` function initiates the login process, while the `logout` function logs the user out.
// The `logout` function includes a `returnTo` parameter to redirect the user back to
// the application's home page after logging out.
// The component is designed to be reusable and can be integrated into any part of the application where