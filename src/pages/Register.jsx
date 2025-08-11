import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [succes, setSucces] = useState("");

  const hundleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      id: crypto.randomUUID(),
      username: username,
      email: email,
      password: password,
    };

    const response = await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    if (response.ok) {
      setSucces("Registro realizado con exito!");
      // redireccionar a home despues de unos segundos
    }
  };

  return (
    <section>
      <h2>Creá tu cuenta</h2>
      <p>Ingresá tus datos</p>
      <form onSubmit={hundleSubmit}>
        <label>
          Nombre de usuario:
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Correo electrónico:
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Crear cuenta</button>
        {succes && (
          <div>
            <p>{succes}</p>
          </div>
        )}
      </form>
    </section>
  );
};

export { Register };
