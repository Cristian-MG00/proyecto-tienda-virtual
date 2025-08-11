import { Layout } from "../components/Layout";

const AboutUs = () => {
  return (
    <Layout>
      <>
        <h1>Quienes somos</h1>
        <section>
          <h3>De que trata el proyecto</h3>
          <p>
            Este proyecto busca mostrar la dinamica de acceso a una pagina de
            productos y hacer diferentes procesos como mostrar productos,
            actualizar la informacion e los mismos, eliminarlos, o añadir nuevos
            productos. A su vez tambien se puede crear una cuenta de usuario y a
            la cual se le dara acceso a las anteriores funciones y dicha cuenta
            se almacenara en la base de datos, logrando así un sistema seguro y
            dinamico para realizar los procesos en la pagina web.
          </p>
        </section>
        <section>
          <h3>Cual es nuestro enfoque</h3>
          <p>
            Este proyecto esta dirigido hacia todas aquellas personas que esten
            interesadas en comerciar productos. Nuestro sitio esta desarrollado
            para que la interfaz sea simple y facil de entender, pudiendo ser
            comodo tanto para los mas expertos en el area, como para los que
            recien estan empezando. Queremos ser una plataforma de venta de
            productos para la mayor cantidad de personas.
          </p>
        </section>
        <section>
          <h3>Recursos y Herramientas</h3>
          <p>
            Desarrollo: Las herraminetas que se utilizaron para el desarrollo de
            este sitio son principalmente de reat, como la biblioteca de
            react-reoter-dom, de la cual se usaron herramientas como Link, para
            las rutas del Header o hooks de react como useState para los estados
            y useEffect para ejecutar funciones de forma secundaria,
            createContext, useContext para crear estados globales, useNavigate
            para redirigir de una pagina a otra
          </p>
        </section>
      </>
    </Layout>
  );
};

export { AboutUs };
