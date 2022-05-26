import "./App.css";
import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <body className="App">
      <div className="contenedor">
        <img className="Logo-Vtarrico" src="logo.png" alt="logo vitarrico" />
        <input id="email" type="email" placeholder="@correo" required />
        <input
          id="contraseña"
          type="password"
          placeholder="contraseña"
          required
          maxLength={"10"}
          minLength={"5"}
        />
        <div id="Botones">
          <button className="inicio">
            <Link to="/Login">Login</Link>
          </button>
        </div>
        <a
          className="R-contraseña"
          href="https://email-send-roan.vercel.app/"
          target={"blank"}
        >
          Recuperar contraseña
        </a>
      </div>
    </body>
  );
}

export default App;
