import React from "react";
import arrayCliente from "../data/arrayCliente";
import arrayVeiculos from "../data/arrayVeiculos";

const Lista: React.FC = () => {
  return (
    <div className="container mt-5">
      <h2>Lista de Clientes</h2>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Endereço</th>
            <th>Telefone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {arrayCliente.map((cliente, index) => (
            <tr key={index}>
              <td>{cliente.nome}</td>
              <td>{cliente.cpf}</td>
              <td>{cliente.endereco}</td>
              <td>{cliente.telefone}</td>
              <td>{cliente.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="mt-5">Lista de Veículos</h2>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Placa</th>
            <th>Nº Portas</th>
            <th>Combustível</th>
            <th>Quilometragem</th>
            <th>RENAVAM</th>
            <th>Chassi</th>
            <th>Valor de Locação (R$)</th>
          </tr>
        </thead>
        <tbody>
          {arrayVeiculos.map((veiculo, index) => (
            <tr key={index}>
              <td>{veiculo.placa}</td>
              <td>{veiculo.numeroPortas}</td>
              <td>{veiculo.tipoCombustivel}</td>
              <td>{veiculo.quilometragem}</td>
              <td>{veiculo.renavam}</td>
              <td>{veiculo.chassi}</td>
              <td>{veiculo.valorLocação}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lista;
