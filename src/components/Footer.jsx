import { Link } from "react-router-dom";
import "../styles/components/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="cont">
        <img
          className="image"
          src="./tienda-virtual-icon.jpg"
          alt="Ícono de tienda virtual"
        />

        <ul className="footer-routes">
          <li>
            <Link to={"/privacy-policy"}>Política de privacidad</Link>
          </li>
          •
          <li>
            <Link to={"/cookie-policy"}>Política de cookies</Link>
          </li>
        </ul>

        <div>
          <a href="https://www.instagram.com/" target="blank">
            <img src="instagram-icon.png" alt="Ícono de instagram" />
          </a>
          <a href="https://ar.linkedin.com/" target="blank">
            <img src="linkedin-icon.png" alt="Ícono de linkedín" />
          </a>
          <a href="https://www.facebook.com/?locale=es_LA" target="blank">
            <img
              className="image-face"
              src="facebook-icon.png"
              alt="Ícono de Facebook"
            />
          </a>
          <a href="https://x.com/?lang=es" target="blank">
            <img
              src="https://images.icon-icons.com/4076/PNG/512/twitter_x_logo_icon_258917.png"
              alt="Ícono de X"
            />
          </a>
        </div>
      </div>
      <div className="footer-p">
        <p>
          Sitio desarrollado por Cristian Machaca Gutierrez. © 2025 Tienda
          Virtual. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export { Footer };
