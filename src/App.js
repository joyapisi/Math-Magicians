import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Nav from './components/nav';
import Home from './components/Home';
import Calculator from './components/Calculator';
import MathQuotes from './components/Quotes';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="Quotes" element={<MathQuotes />} />
      </Routes>
    </>
  );
}
export default App;
