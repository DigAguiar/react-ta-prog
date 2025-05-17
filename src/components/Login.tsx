import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  
      if (username.trim() === 'admin' || senha.trim() === '123') {
        setErro('');
        navigate('/lista');
        return;
      }else {
        setErro('Preencha todos os campos.');

      }
      };
  
    return (
      <div className="container d-flex vh-100 align-items-center justify-content-center">
        <div className="card p-4 shadow" style={{ minWidth: '300px' }}>
          <h2 className="mb-3">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Senha</label>
              <input
                type="password"
                className="form-control"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            {erro && <div className="alert alert-danger">{erro}</div>}
            <button type="submit" className="btn btn-primary w-100">
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  };

export default Login;