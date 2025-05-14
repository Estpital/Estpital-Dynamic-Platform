import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';

// Görselleri import et
import DrGizemKagitci from '../assets/dr-gizem-kagitci-sac-ekimi.jpg';
import DrUmmahanOzaslan from '../assets/dr-ummahan-ozaslan.jpg';
import PlaceholderDoctor from '../assets/placeholder-doctor.jpg';

function Doktorlarimiz() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  const doctors = [
    {
      name: "Dr. Gizem Kağıtçı",
      specialty: "Plastik Cerrahi ve Saç Ekimi Uzmanı",
      description: "Dr. Gizem Kağıtçı, saç ekimi ve medikal estetik alanında 10 yılı aşkın deneyime sahip bir uzmandır. İstanbul Üniversitesi Tıp Fakültesi’nden mezun olan Dr. Kağıtçı, uzmanlığını plastik cerrahi ve saç ekimi teknikleri üzerine tamamlamıştır. Türk Plastik, Rekonstrüktif ve Estetik Cerrahi Derneği üyesidir ve ulusal/uluslararası kongreleri takip ederek en güncel yöntemleri hastalarına sunar. Özellikle sedasyonlu saç ekimi, eksozom tedavisi ve DHI yöntemiyle doğal ve kalıcı sonuçlar sunar.",
      image: DrGizemKagitci
    },
    {
      name: "Op. Dr. Ummahan Özaslan",
      specialty: "Plastik ve Rekonstrüktif Cerrahi Uzmanı",
      description: "Op. Dr. Ummahan Özaslan, Plastik ve Rekonstrüktif Cerrahi alanında 15 yılı aşkın deneyime sahip bir uzmandır. 1998 yılında Ege Üniversitesi Tıp Fakültesi’nden mezun olmuştur. Plastik Cerrahi ihtisasını Celal Bayar Üniversitesi’nde tamamlamış, 2007 yılında ise ABD’de Cleveland University Hospital’da dünyaca ünlü plastik cerrah Dr. Bahman Guyuron’un yanında yüz ve burun estetiği üzerine fellowship eğitimi almıştır. 2013 yılından beri Denizli’deki kendi muayenehanesinde hasta kabul eden Dr. Özaslan, ameliyatlarını özel hastanelerde gerçekleştirmektedir. Türk Tabipler Birliği ve Türk Estetik Cerrahi Derneği üyesidir.",
      image: DrUmmahanOzaslan
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Doktorlarımız</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-1/3">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="h-56 sm:h-64 w-full object-cover rounded-lg"
                      onError={(e) => (e.target.src = PlaceholderDoctor)} // Yüklenemezse yedek görsel
                    />
                  </div>
                  <div className="w-full sm:w-2/3">
                    <h3 className="text-2xl font-bold mb-2">{doctor.name}</h3>
                    <p className="text-lg font-semibold text-blue-700 mb-4">{doctor.specialty}</p>
                    <p className="text-lg">{doctor.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-4 sm:p-6">
        <div className="container mx-auto text-center text-sm sm:text-base">
          <p className="mb-2">{t('footer_copyright')}</p>
          <p>{t('footer_contact')}</p>
        </div>
      </footer>
    </div>
  );
}

export default Doktorlarimiz;
