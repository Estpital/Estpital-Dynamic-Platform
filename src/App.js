import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SacEkimi from './pages/SacEkimi';
import Doktorlarimiz from './pages/Doktorlarimiz';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sac-ekimi" element={<SacEkimi />} />
        <Route path="/doktorlarimiz" element={<Doktorlarimiz />} />
      </Routes>
    </Router>
  );
}

export default App;
