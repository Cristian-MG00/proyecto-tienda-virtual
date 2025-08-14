import "../styles/pages/Login.css";
import { useState } from "react";
import { Layout } from "../components/Layout";
import { useAuth } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const hundleSubmit = async (e) => {
    e.preventDefault();
    const logged = await login(username, password);
    if (logged) {
      navigate("/");
    } else {
      setError("Datos incorrectos, intentelo nuevamente.");
    }
  };

  return (
    <Layout>
      <div className="cont-login">
        <section className="cart-login">
          <div className="text-login">
            <h2>Tienda Virtual</h2>
            <h3>Bienvenido!</h3>
            <h3>Aqui podras ingresar a tu cuenta</h3>
            <p>Ingresa tus datos a continuación</p>
          </div>
          <div className="test-data">
            <h4>Datos de prueba</h4>
            <p>
              Nombre de usuario: hopkins <br />
              Contraseña: William56$hj
            </p>
          </div>
          <div className="login-form">
            <form onSubmit={hundleSubmit}>
              <div className="inputs">
                <div>
                  {/* <label>Nombre de usuario: </label> */}
                  <input
                    type="text"
                    placeholder="Nombre de usuario"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  {/* <label>Contraseña: </label> */}
                  <input
                    type="password"
                    placeholder="Contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="button">
                <button>Ingresar</button>
              </div>
              {error && (
                <div className="error">
                  <p>{error}</p>
                </div>
              )}
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export { Login };
