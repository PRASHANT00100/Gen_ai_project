import { useContext, useEffect } from "react";
import { AuthContext } from "../Auth_context.jsx";
import { login, register, getMe, logout } from "../services/Auth_api.js";

export const useAuth = () => {
  const context = useContext(AuthContext);
  const { user, setUser, loading, setLoading } = context;

  // ✅ LOGIN
  const handleLogin = async ({ email, password }) => {
    try {
      setLoading(true);

      const data = await login({ email, password });

      setUser(data?.user || null);
    } catch (err) {
      console.log("Login error:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // ✅ REGISTER
  const handleRegister = async ({ username, email, password }) => {
    try {
      setLoading(true);

      const data = await register({ username, email, password });

      setUser(data?.user || null);
    } catch (err) {
      console.log("Register error:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // ✅ LOGOUT
  const handleLogout = async () => {
    try {
      setLoading(true);

      await logout();

      setUser(null);
    } catch (err) {
      console.log("Logout error:", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ GET CURRENT USER
 useEffect(() => {
  const getAndSetUser = async () => {
    try {
      setLoading(true);

      const data = await getMe();
      setUser(data?.user || null);

    } catch (err) {
      // ✅ this will happen on register/home page
      setUser(null);
    } finally {
      setLoading(false); // ✅ ALWAYS STOP LOADING
    }
  };

  getAndSetUser();
}, []);
  return { user, loading, handleLogin, handleLogout, handleRegister };
};