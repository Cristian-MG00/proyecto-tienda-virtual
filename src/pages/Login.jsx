import { useState } from "react";
import { Layout } from "../components/Layout";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [succes, setSucces] = useState("");

  const hundleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      const token = await response.json();
      // dar acceso al usuario a su cuenta
    } else {
      setError("El usuario no existe");
    }
  };

  return (
    <Layout>
      <section>
        <h2>Ingresa a tu cuenta</h2>
        <div>
          <h4>Datos de prueba</h4>
          <p>Nombre de usuario: hopkins</p>
          <p>Contraseña: William56$hj</p>
        </div>
        <form onSubmit={hundleSubmit}>
          <label>
            Nombre de usuario:
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Contraseña:
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button>Ingresar</button>
          {error && <p>{error}</p>}
          {succes && <p>{succes}</p>}
        </form>
      </section>
    </Layout>
  );
};

export { Login };
