import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';

function Home() {
  const { t } = useTranslation();

  const hizmetler = [
    { name: t('service_names.hair_transplant'), path: "/sac-ekimi", description: "FUE ve DHI teknikleriyle kalıcı ve doğal saç ekimi." },
    { name: t('service_names.rhinoplasty'), path: "/burun-estetigi", description: "Yüzünüze uyumlu, estetik bir burun tasarımı." },
    { name: t('service_names.breast_aesthetics'), path: "/meme-estetigi", description: "Doğal görünüm için meme büyütme, küçültme ve dikleştirme." },
    { name: t('service_names.facial_aesthetics'), path: "/yuz-estetigi", description: "Yüz germe, boyun estetiği ve gençleştirme işlemleri." },
    { name: t('service_names.fillers_botox'), path: "/dolgu-botoks", description: "Kırışıklık tedavisi ve hacim kazandırma." },
    { name: t('service_names.dental_treatments'), path: "/dis-tedavileri", description: "İmplant, zirkonyum kaplama ve estetik diş çözümleri." },
    { name: t('service_names.tummy_tuck'), path: "/karin-germe", description: "Daha düz ve sıkı bir karın için karın germe." },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

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

      {/* Services Section - Kaydırılabilir */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Hizmetlerimiz</h3>
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

export default Home;
