import { Link } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import "../styles/components/Header.css";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const { user, logout } = useAuth();

  const hundleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="image-icon">
        <img src="tienda-virtual-icon.jpg" alt="Icono de tienda virtual" />
      </div>

      {/* menu hamburguesa */}
      <button
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <nav className={`header-routes ${open ? "active" : ""}`}>
        {user && (
          <>
            <Link to="/">Inicio</Link>

            <Link to="/dashboard">Panel</Link>

            <Link to="/about-us">Sobre Nosotros</Link>

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
      </nav>
    </header>
  );
};

export { Header };
