import { createContext, useContext, useState, useEffect } from 'react';
import setAuthToken from "../utils/config/setAuthToken";
const AuthContext = createContext();

export function AuthWrapper({ children }) {
  const [user, set_user] = useState(null);
  const [token, set_token] = useState(null);

  const doSetUser = (user, token) => {
    localStorage.setItem('auth_token', token);
    localStorage.setItem('current_user', user);
    set_user(user);
    set_token(token);
  };
  useEffect(() => {
    let token = localStorage.getItem('auth_token');
    let user = localStorage.getItem('current_user');
    if (token) {
      set_token(token);
      set_user(user);
      setAuthToken(token) 
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user, token, doSetUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
