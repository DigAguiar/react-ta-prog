import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cliente } from "../Interfaces/Cliente";
import arrayCliente from "../data/arrayCliente";

const CreateCliente: React.FC = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome || !cpf || !endereco || !telefone || !email) {
      alert("Preencha todos os campos");
      return;
    }

    const novoCliente: Cliente = {
      id: Math.floor(Math.random() * 1000),
      nome,
      cpf,
      endereco,
      telefone,
      email,
    };

    arrayCliente.push(novoCliente);
    alert("Cliente criado com sucesso!");

    setNome("");
    setCpf("");
    setEndereco("");
    setTelefone("");
    setEmail("");

    navigate("/lista");
  };

  return (
    <div className="container mt-5">
      <h2>Criar Cliente</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input className="form-control" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">CPF</label>
          <input className="form-control" value={cpf} onChange={(e) => setCpf(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Endereço</label>
          <input className="form-control" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Telefone</label>
          <input className="form-control" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button className="btn btn-primary" type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default CreateCliente;
