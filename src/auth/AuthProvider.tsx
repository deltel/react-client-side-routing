import { createContext, useState } from "react";

export const AuthContext = createContext<{
  isAuth: boolean;
  authenticate: () => void;
  unauthenticate: () => void;
}>({
  isAuth: false,
  authenticate: function () {},
  unauthenticate: function () {},
});

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuth, setIsAuth] = useState(false);

  function authenticate() {
    setIsAuth(true);
  }

  function unauthenticate() {
    setIsAuth(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        authenticate,
        unauthenticate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
