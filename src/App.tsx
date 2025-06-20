import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import routes from './routes'; // ← el archivo que definió la maestra

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-100">
        <ul className="flex gap-4">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/users">Usuarios</Link></li>
          <li><Link to="/products">Productos</Link></li>
          <li><Link to="/orders">Órdenes</Link></li>
        </ul>
      </nav>

      <div className="p-8">
        <Routes>
          {routes.map((route, i) => (
            <Route key={i} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
