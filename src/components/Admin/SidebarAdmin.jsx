import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/globals.css'; // Asegúrate de importar tus estilos globales

const SidebarAdmin = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/admin/Statistics">Estadísticas de Productos</Link>
          </li>
          <li>
            <Link to="/admin/Products">Productos</Link>
          </li>
          <li>
            <Link to="/admin/products">Clientes</Link>
          </li>
          <li>
            <Link to="/admin/products">Empleados</Link>
          </li>
          <li>
            <Link to="/admin/products">Tiendas</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarAdmin;
