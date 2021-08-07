import { useState } from "react";

import Api from "../api";
import { LoginDTO } from "../api/types";

export const persistState = (storageKey: string, state: object): void => {
  window.localStorage.setItem(storageKey, JSON.stringify(state));
};

export const removeState = (storageKey: string) => {
  window.localStorage.removeItem(storageKey);
};

export const getIntialState = (storageKey: string): any => {
  const savedState = window.localStorage.getItem(storageKey);
  try {
    if (!savedState) {
      return undefined;
    }
    return JSON.parse(savedState ?? `{}`);
  } catch (e) {
    return undefined;
  }
};

export default function useAuth() {
  const [user, setUser] = useState<{ email: string } | undefined>(
    getIntialState("user")
  );
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  async function handleLogin(data: LoginDTO) {
    setLoading(true);
    try {
      const { user } = await Api.login(data);
      persistState("user", user);
      setUser(user);
    } catch (error: any) {
      const message = error?.response?.data?.errors[0]?.message;

      if (message) {
        setError(message);
      }
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await Api.logout();
      setUser(undefined);
    } catch (error: any) {
      removeState("user");
      setError("Error ao comunicar serviço");
    }
    setLoading(false);
  }

  return { user, loading, error, handleLogin, handleLogout };
}
