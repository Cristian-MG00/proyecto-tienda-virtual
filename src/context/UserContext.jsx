import { createContext, useContext, useState } from "react";

const UserContext = createContext();

// herramientas para generar el proveedor del usuario
const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      setUser(true);
      const token = await response.json();
      return token;
    } else {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  const register = async () => {
    const response = await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    if (response.ok) {
      setUser(true);
      return true;
    } else {
      return false;
    }
  };

  return (
    <UserContext.Provider value={{ login, logout, register, user }}>
      {props.children}
    </UserContext.Provider>
  );
};

const useAuth = () => useContext(UserContext);

export { UserProvider, useAuth };
