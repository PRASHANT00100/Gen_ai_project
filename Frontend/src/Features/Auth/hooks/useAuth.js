import { useContext , useEffect } from "react";
import { AuthContext } from "../Auth_context.jsx";
import { login, register, getMe, logout } from "../services/Auth_api.js";

export const useAuth = () => {
    
  const context = useContext(AuthContext);
  const { user, setUser, loading, setLoading } = context;

  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    const data = await login({ email, password });
    setUser(data.user);
    setLoading(false);
  };

  const handleRegister = async ({ username, email, password }) => {
    setLoading(true);
    const data = await register({ email, password, username });
    setUser(data.user);
    setLoading(false);
  };

  const handleLogout = async () => {
    setLoading(true);
    const data = await logout();
    setUser(null);
    setLoading(false);
  };

  useEffect(()=>{
    const getAndSetUser = async ()=>{
      const data = await getMe();
      setUser(data.user);
      setLoading(false);
    };
    getAndSetUser();
  },[]);
  
  return { user, loading, handleLogin, handleLogout, handleRegister };
};
