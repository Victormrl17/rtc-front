import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import MarcaPage from './pages/MarcaPage';
import CreateBus from './pages/CreateBus';
import ManageBuses from './pages/ManageBuses';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/marcas" element={<MarcaPage />} />
        <Route path='/crear-bus' element={<CreateBus />} />
        <Route path='/gestionar-buses' element={<ManageBuses />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
