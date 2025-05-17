import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleAddCliente = () => navigate('/criar-cliente');
  const handleAddVeiculo = () => navigate('/criar-veiculo');
  const handleList = () => navigate('/lista');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a className="navbar-brand" href="lista" onClick={handleList}>Sistema</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <button className="btn btn-outline-light mx-1" onClick={handleAddCliente}>
              Adicionar Cliente
            </button>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-light mx-1" onClick={handleAddVeiculo}>
              Adicionar Veículo
            </button>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-light mx-1" onClick={handleList}>
              Lista
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
