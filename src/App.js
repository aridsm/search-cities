import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PagInicial from './Rotas/PagInicial';
import Header from './Rotas/Header'
import Footer from './Rotas/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<PagInicial />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App;
