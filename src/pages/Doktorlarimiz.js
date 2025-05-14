import { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
      image: "/src/assets/dr-gizem-kagitci.jpg"
    },
    {
      name: "Op. Dr. Ummahan Özaslan",
      specialty: "Plastik ve Rekonstrüktif Cerrahi Uzmanı",
      description: "Op. Dr. Ummahan Özaslan, Plastik ve Rekonstrüktif Cerrahi alanında 15 yılı aşkın deneyime sahip bir uzmandır. 1998 yılında Ege Üniversitesi Tıp Fakültesi’nden mezun olmuştur. Plastik Cerrahi ihtisasını Celal Bayar Üniversitesi’nde tamamlamış, 2007 yılında ise ABD’de Cleveland University Hospital’da dünyaca ünlü plastik cerrah Dr. Bahman Guyuron’un yanında yüz ve burun estetiği üzerine fellowship eğitimi almıştır. 2013 yılından beri Denizli’deki kendi muayenehanesinde hasta kabul eden Dr. Özaslan, ameliyatlarını özel hastanelerde gerçekleştirmektedir. Türk Tabipler Birliği ve Türk Estetik Cerrahi Derneği üyesidir.",
      image: "/src/assets/dr-ummahan-ozaslan.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-700 text-white p-4 sticky top-0 z-20">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold">Estpital International Agency</h1>
          <div className="flex items-center space-x-4">
            {/* Mobil Menü Butonu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
            {/* Menü Öğeleri */}
            <ul className={`sm:flex sm:space-x-6 text-sm sm:text-base ${isMenuOpen ? 'block' : 'hidden'} sm:block absolute sm:static top-16 left-0 right-0 bg-blue-700 sm:bg-transparent p-4 sm:p-0 z-10`}>
              <li className="py-2 sm:py-0"><a href="/" className="hover:underline">{t('navbar.home')}</a></li>
              <li className="py-2 sm:py-0"><a href="/hizmetler" className="hover:underline">{t('navbar.services')}</a></li>
              <li className="py-2 sm:py-0"><a href="/doktorlarimiz" className="hover:underline">{t('navbar.doctors')}</a></li>
              <li className="py-2 sm:py-0"><a href="/iletisim" className="hover:underline">{t('navbar.contact')}</a></li>
              <li className="py-2 sm:py-0"><a href="/randevu" className="hover:underline">{t('navbar.appointment')}</a></li>
            </ul>
            {/* Dil Navigatörü (Dropdown) */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-1 text-sm sm:text-base bg-blue-600 px-2 py-1 rounded hover:bg-blue-800 transition"
              >
                <span>{i18n.language === 'tr' ? 'TR' : 'EN'}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded-lg shadow-lg z-20">
                  <button
                    onClick={() => changeLanguage('tr')}
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 w-full text-left"
                  >
                    <span role="img" aria-label="Turkish Flag">🇹🇷</span>
                    <span>TR</span>
                  </button>
                  <button
                    onClick={() => changeLanguage('en')}
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 w-full text-left"
                  >
                    <span role="img" aria-label="English Flag">🇬🇧</span>
                    <span>EN</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

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
                      onError={(e) => (e.target.src = "/src/assets/placeholder-doctor.jpg")} // Yüklenemezse yedek görsel
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
