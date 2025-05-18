import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Home from './pages/Home';
import SacEkimi from './pages/SacEkimi';
import Doktorlarimiz from './pages/Doktorlarimiz';
import Shop from './pages/Shop';
import Konsültasyon from './pages/Konsültasyon'; // Yeni sayfa eklendi

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sac-ekimi" element={<SacEkimi />} />
          <Route path="/doktorlarimiz" element={<Doktorlarimiz />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/konsültasyon" element={<Konsültasyon />} /> {/* Yeni yol eklendi */}
          {/* Diğer hizmet sayfaları için yer tutucular */}
          <Route path="/burun-estetigi" element={<div>Burun Estetiği Sayfası (Yer Tutucu)</div>} />
          <Route path="/meme-estetigi" element={<div>Meme Estetiği Sayfası (Yer Tutucu)</div>} />
          <Route path="/yuz-estetigi" element={<div>Yüz Estetiği Sayfası (Yer Tutucu)</div>} />
          <Route path="/dolgu-botoks" element={<div>Dolgu ve Botoks Sayfası (Yer Tutucu)</div>} />
          <Route path="/dis-tedavileri" element={<div>Diş Tedavileri Sayfası (Yer Tutucu)</div>} />
          <Route path="/karin-germe" element={<div>Karın Germe Sayfası (Yer Tutucu)</div>} />
          <Route path="/randevu" element={<div>Randevu Sayfası (Yer Tutucu)</div>} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
}

export default App;
