import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Lista from "./components/Lista";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateCliente from "./components/CreateClient";
import CreateVeiculo from "./components/CreateVeiculo";
import Layout from "./components/Layout";


 function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="/criar-cliente" element={<CreateCliente />} />
          <Route path="/criar-veiculo" element={<CreateVeiculo />} />
          <Route path="/lista" element={<Lista />} />
        </Route>
      </Routes>
   </BrowserRouter>

  )
}

export default App;