import { createContext, useContext, useState } from "react";

const UserContext = createContext();

// herramientas para generar el proveedor del usuario
const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser(true);
  };

  const logout = () => {
    setUser(null);
  };

  const register = () => {
    setUser(true);
  };

  return (
    <UserContext.Provider value={{ login, logout, register, user }}>
      {props.children}
    </UserContext.Provider>
  );
};

const useAuth = useContext(UserContext);

export { UserProvider, useAuth };
