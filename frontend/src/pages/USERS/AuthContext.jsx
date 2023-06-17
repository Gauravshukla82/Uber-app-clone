import { createContext, useState } from "react";
export const AppContext = createContext();
export const AuthContext = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AppContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AppContext.Provider>
  );
};
