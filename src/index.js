import React from "react";

import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login";
import Productos from "./components/pages/productos";
import Clientes from "./components/pages/Clientes";
import Pedidos from "./components/pages/Pedidos";
import Provedores from "./components/pages/Provedores";
import Vendedores from "./components/pages/Vendedores";
import {createRoot} from 'react-dom/client'


const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/PRODUCTS" caseSensitive={false} element={<Productos />} />
        <Route path="/CUSTOMER" caseSensitive={false} element={<Clientes />} />
        <Route path="/ORDERS" caseSensitive={false} element={<Pedidos />} />
        <Route
          path="/PROVIDER"
          caseSensitive={false}
          element={<Provedores />}
        />
        <Route path="/VENDORS" caseSensitive={false} element={<Vendedores />} />
      </Routes>
  </BrowserRouter>
  
);
