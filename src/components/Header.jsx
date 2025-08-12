import { Link } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import "../styles/components/Header.css";

const Header = () => {
  const { user, logout } = useAuth();

  const hundleClick = () => {
    logout();
  };

  return (
    <header>
      <nav>
        <div>
          <img src="tienda-virtual-icon.jpg" alt="Icono de tienda virtual" />
        </div>
        <div>
          <ul>
            {user && (
              <>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/dashboard">Panel</Link>
                </li>
                <li>
                  <Link to="/about-us">Sobre Nosotros</Link>
                </li>
                <button onClick={hundleClick}>Cerrar sesión</button>
              </>
            )}

            {!user && (
              <>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/login">Ingresar</Link>
                </li>
                <li>
                  <Link to="/register">Registrarse</Link>
                </li>
                <li>
                  <Link to="/about-us">Sobre Nosotros</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export { Header };
