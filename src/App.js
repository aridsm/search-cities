import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PagInicial from './Rotas/PagInicial';
import Header from './Rotas/Header'
import Footer from './Rotas/Footer'
import PagListaCidades from './Rotas/PagListaCidades'
import Cidades from './Rotas/Cidades'
import PagCidades from './Rotas/PagCidades';
import Erro404 from './Rotas/Erro404';


const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<PagInicial />} />
      <Route path='/cidades' element={<Cidades />}>
        <Route path='' element={<PagListaCidades />} />
        <Route path=':id' element={<PagCidades />} />
      </Route>
      <Route path='/*' element={<Erro404 />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App;
