import { useTranslation } from 'react-i18next';

function Home() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const hizmetler = [
    { name: t('services.hair_transplant'), path: "/sac-ekimi", description: "FUE ve DHI teknikleriyle kalıcı ve doğal saç ekimi." },
    { name: t('services.rhinoplasty'), path: "/burun-estetigi", description: "Yüzünüze uyumlu, estetik bir burun tasarımı." },
    { name: t('services.breast_aesthetics'), path: "/meme-estetigi", description: "Doğal görünüm için meme büyütme, küçültme ve dikleştirme." },
    { name: t('services.facial_aesthetics'), path: "/yuz-estetigi", description: "Yüz germe, boyun estetiği ve gençleştirme işlemleri." },
    { name: t('services.fillers_botox'), path: "/dolgu-botoks", description: "Kırışıklık tedavisi ve hacim kazandırma." },
    { name: t('services.dental_treatments'), path: "/dis-tedavileri", description: "İmplant, zirkonyum kaplama ve estetik diş çözümleri." },
    { name: t('services.tummy_tuck'), path: "/karin-germe", description: "Daha düz ve sıkı bir karın için karın germe." },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-700 text-white p-4 sticky top-0 z-20">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-0">Estpital International Agency</h1>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <ul className="flex flex-wrap justify-center sm:justify-end space-x-2 sm:space-x-6 text-sm sm:text-base">
              <li><a href="/" className="hover:underline py-1">{t('navbar.home')}</a></li>
              <li><a href="/hizmetler" className="hover:underline py-1">{t('navbar.services')}</a></li>
              <li><a href="/hakkimizda" className="hover:underline py-1">{t('navbar.about')}</a></li>
              <li><a href="/iletisim" className="hover:underline py-1">{t('navbar.contact')}</a></li>
              <li><a href="/randevu" className="hover:underline py-1">{t('navbar.appointment')}</a></li>
            </ul>
            {/* Dil Navigatörü */}
            <div className="flex space-x-2 mt-2 sm:mt-0">
              <button
                onClick={() => changeLanguage('tr')}
                className={`px-2 py-1 rounded text-sm sm:text-base ${i18n.language === 'tr' ? 'bg-blue-900' : 'bg-blue-600'} hover:bg-blue-800 transition`}
              >
                TR
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2 py-1 rounded text-sm sm:text-base ${i18n.language === 'en' ? 'bg-blue-900' : 'bg-blue-600'} hover:bg-blue-800 transition`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-100 py-12 sm:py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">{t('welcome')}</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            {t('welcome_desc')}
          </p>
          <a
            href="/randevu"
            className="inline-block bg-blue-700 text-white px-5 py-2 sm:px-6 sm:py-3 text-base sm:text-lg rounded-lg hover:bg-blue-800"
          >
            {t('appointment')}
          </a>
        </div>
      </section>

      {/* Banner: Dr. Gizem Kağıtçı */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 bg-blue-50 p-6 sm:p-8 rounded-lg shadow-lg">
            <div className="w-full md:w-1/3">
              <div className="bg-gray-200 h-56 sm:h-64 rounded-lg flex items-center justify-center">
                <p className="text-base sm:text-lg text-gray-600">[Dr. Gizem Kağıtçı’nın Fotoğrafı - İleride Eklenecek]</p>
              </div>
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">{t('banner_title')}</h3>
              <p className="text-sm sm:text-lg mb-6">
                {t('banner_desc')}
              </p>
              <a
                href="/sac-ekimi"
                className="inline-block bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg rounded-lg hover:bg-blue-800"
              >
                {t('banner_button')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Kaydırılabilir */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">{t('services')}</h3>
          <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            <div className="flex space-x-4 sm:space-x-6 pb-4">
              {hizmetler.map((hizmet, index) => (
                <a
                  key={index}
                  href={hizmet.path}
                  className="min-w-[200px] sm:min-w-[250px] bg-gray-50 p-4 sm:p-6 rounded-lg shadow hover:shadow-lg transition snap-center"
                >
                  <h4 className="text-lg sm:text-xl font-semibold mb-2">{hizmet.name}</h4>
                  <p className="text-sm sm:text-lg">{hizmet.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Butonu */}
      <a
        href="https://wa.me/905441072570?text=Merhaba,%20Estpital%20hakkında%20bilgi%20almak%20istiyorum!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50 flex items-center"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01-1.87-1.87-4.36-2.9-7.01-2.9zm0 18.02c-1.48 0-2.93-.39-4.19-1.13l-.3-.18-3.12.82.83-3.04-.2-.31c-.8-1.27-1.23-2.73-1.23-4.25 0-4.58 3.73-8.31 8.31-8.31 2.22 0 4.31.86 5.88 2.43 1.56 1.56 2.43 3.66 2.43 5.88 0 4.58-3.73 8.31-8.31 8.31zm4.57-6.11c-.25-.12-1.47-.73-1.7-.81-.22-.08-.38-.12-.54.12-.16.24-.62.81-.76.97-.14.16-.28.18-.53.06-.25-.12-1.06-.39-2.02-1.24-.75-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.38.11-.51.11-.11.25-.28.38-.42.12-.14.16-.24.25-.41.08-.16.04-.31-.02-.43-.06-.12-.54-1.29-.74-1.77-.19-.47-.39-.41-.54-.41-.14 0-.3-.02-.46-.02-.16 0-.42.08-.64.31-.22.23-.85.83-.85 2.02 0 1.19.86 2.34 1 2.49.14.15 1.69 2.58 4.1 3.62 2.41 1.04 2.41.7 2.84.67.43-.03 1.39-.57 1.59-1.03.2-.46.2-.85.14-1.03-.06-.18-.23-.29-.48-.41z"/>
        </svg>
        <span className="text-sm sm:text-base">{t('whatsapp')}</span>
      </a>

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

export default Home
