import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/Footer';
import Discover from './components/Discover';
import NotFound from './components/NotFound';
import Data from './components/Data';
import Resource from './components/Resource';
import Theuniverse from './components/Theuniverse';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Section />} />
          <Route path='/data' element={<Data />} />
          <Route path='/resource' element={<Resource />} />
          <Route path='/theuniverse' element={<Theuniverse />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Discover />
        <Footer />
      </Router>

    </>
  )
}

export default App
