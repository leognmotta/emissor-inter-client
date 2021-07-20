import React, { createContext } from "react";

import { LoginDTO } from "../api/interfaces";
import useAuth from "../hooks/useAuth";

export type AuthContext = {
  user?: { email: string };
  loading: boolean;
  handleLogin: (data: LoginDTO) => Promise<void>;
  handleLogout: (data: LoginDTO) => Promise<void>;
  error?: string;
};

const Context = createContext<AuthContext>({
  loading: false,
  user: undefined,
  error: undefined,
  handleLogin: async (data: LoginDTO) => {},
  handleLogout: async () => {},
});

const AuthProvider: React.FC = ({ children }) => {
  const { error, loading, user, handleLogout, handleLogin } = useAuth();

  return (
    <Context.Provider
      value={{ error, loading, user, handleLogout, handleLogin }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, AuthProvider };
