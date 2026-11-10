import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './componentes/Header';
import Footer from './componentes/Footer';

import Home from './paginas/Home';
import Contato from './paginas/Contato';
import Sobre from './paginas/Sobre';


import ListarTarefas from './paginas/ListarTarefas';
import ListarUmaTarefa from './paginas/ListarUmaTarefa';
import CadastrarTarefa from './paginas/CadastrarTarefa';

import ListarContato from './paginas/ListarContato';
import CadastrarContato from './paginas/CadastrarContato';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contato" element={<Contato />}/>
        <Route path="/sobre" element={<Sobre />}/>

        <Route path="/tarefas" element={<ListarTarefas />}/>
        <Route path="/tarefas/:id" element={<ListarUmaTarefa />}/>
        <Route path="/cadastrarTarefa" element={<CadastrarTarefa />}/>

        <Route path="/contato" element={<ListarContato />}/>
        <Route path="/contato/:id" element={<ListarContato />}/>
        <Route path="/cadastrarTarefa" element={<CadastrarContato />}/>

       </Routes>
      </main>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
