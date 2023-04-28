import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './paths/Home';
import DisplayQuotes from './paths/DisplayQuotes';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DisplayQuotes" element={<DisplayQuotes />} />
        <Route path="/Calculator" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
