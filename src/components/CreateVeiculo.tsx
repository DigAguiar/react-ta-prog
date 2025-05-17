import React, { useState } from "react";
import { Veiculos } from "../Interfaces/Veiculo";
import arrayVeiculos from "../data/arrayVeiculos";

const CreateVeiculo: React.FC = () => {
  const [placa, setPlaca] = useState("");
  const [numeroPortas, setNumeroPortas] = useState<number | "">("");
  const [tipoCombustivel, setTipoCombustivel] = useState("");
  const [quilometragem, setQuilometragem] = useState<number | "">("");
  const [renavam, setRenavam] = useState("");
  const [chassi, setChassi] = useState("");
  const [valorLocacao, setValorLocacao] = useState<number | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !placa || numeroPortas === "" || !tipoCombustivel || quilometragem === "" ||
      !renavam || !chassi || valorLocacao === ""
    ) {
      alert("Preencha todos os campos");
      return;
    }

    const novoVeiculo: Veiculos = {
      id: Math.floor(Math.random() * 1000),
      placa,
      numeroPortas: Number(numeroPortas),
      tipoCombustivel,
      quilometragem: Number(quilometragem),
      renavam,
      chassi,
      valorLocação: Number(valorLocacao),
    };

    arrayVeiculos.push(novoVeiculo);
    alert("Veículo cadastrado com sucesso!");

    // Resetar os campos
    setPlaca("");
    setNumeroPortas("");
    setTipoCombustivel("");
    setQuilometragem("");
    setRenavam("");
    setChassi("");
    setValorLocacao("");
  };

  return (
    <div className="container mt-5">
      <h2>Criar Veículo</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Placa</label>
          <input className="form-control" value={placa} onChange={(e) => setPlaca(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Número de Portas</label>
          <input
            type="number"
            className="form-control"
            value={numeroPortas}
            onChange={(e) => setNumeroPortas(e.target.value === "" ? "" : Number(e.target.value))}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tipo de Combustível</label>
          <input className="form-control" value={tipoCombustivel} onChange={(e) => setTipoCombustivel(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Quilometragem</label>
          <input
            type="number"
            className="form-control"
            value={quilometragem}
            onChange={(e) => setQuilometragem(e.target.value === "" ? "" : Number(e.target.value))}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">RENAVAM</label>
          <input className="form-control" value={renavam} onChange={(e) => setRenavam(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Chassi</label>
          <input className="form-control" value={chassi} onChange={(e) => setChassi(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Valor de Locação (R$)</label>
          <input
            type="number"
            className="form-control"
            value={valorLocacao}
            onChange={(e) => setValorLocacao(e.target.value === "" ? "" : Number(e.target.value))}
          />
        </div>
        <button className="btn btn-primary" type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default CreateVeiculo;
