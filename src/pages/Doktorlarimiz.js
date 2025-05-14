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
      specialty: "Saç Ekimi ve Medikal Estetik Uzmanı",
      description: "Dr. Gizem Kağıtçı, saç ekimi ve medikal estetik alanında 10 yılı aşkın deneyime sahip bir uzmandır. Tekirdağ Namık Kemal Üniversitesi Tıp Fakültesi’nden mezun olmuştur. Özellikle sedasyonlu saç ekimi, eksozom tedavisi ve DHI yöntemiyle doğal ve kalıcı sonuçlar sunar.",
      image: DrGizemKagitci,
      instagram: "https://www.instagram.com/dr.gizemkagitci",
    },
    {
      name: "Op. Dr. Ummahan Özaslan",
      specialty: "Plastik ve Rekonstrüktif Cerrahi Uzmanı",
      description: "Op. Dr. Ummahan Özaslan, Plastik ve Rekonstrüktif Cerrahi alanında 15 yılı aşkın deneyime sahip bir uzmandır. 1998 yılında Ege Üniversitesi Tıp Fakültesi’nden mezun olmuştur. Plastik Cerrahi ihtisasını Celal Bayar Üniversitesi’nde tamamlamış, 2007 yılında ise ABD’de Cleveland University Hospital’da dünyaca ünlü plastik cerrah Dr. Bahman Guyuron’un yanında yüz ve burun estetiği üzerine fellowship eğitimi almıştır. 2013 yılından beri Denizli’deki kendi muayenehanesinde hasta kabul eden Dr. Özaslan, ameliyatlarını özel hastanelerde gerçekleştirmektedir. Türk Tabipler Birliği ve Türkiye Estetik Plastik Cerrahi Derneği (TEPCD) üyesidir.",
      image: DrUmmahanOzaslan,
      instagram: "https://www.instagram.com/drummahanozaslan",
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
                    <p className="text-lg mb-4">{doctor.description}</p>
                    {/* Instagram Butonu */}
                    <a
                      href={doctor.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.982-6.98.058-1.281.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Instagram’da Takip Et
                    </a>
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
