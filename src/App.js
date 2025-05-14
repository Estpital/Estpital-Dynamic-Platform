import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SacEkimi from './pages/SacEkimi';
import Hizmetler from './pages/Hizmetler';
import BurunEstetigi from './pages/BurunEstetigi';
import Doktorlarimiz from './pages/Doktorlarimiz';
import SacEkimiKampanya from './pages/SacEkimiKampanya';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sac-ekimi" element={<SacEkimi />} />
        <Route path="/hizmetler" element={<Hizmetler />} />
        <Route path="/burun-estetigi" element={<BurunEstetigi />} />
        <Route path="/doktorlarimiz" element={<Doktorlarimiz />} />
        <Route path="/sac-ekimi-kampanya" element={<SacEkimiKampanya />} />
      </Routes>
    </Router>
  );
}

export default App;
