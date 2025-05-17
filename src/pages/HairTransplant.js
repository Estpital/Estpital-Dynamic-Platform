import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';

function HairTransplant() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Başlık ve Açıklama */}
      <section className="bg-blue-100 py-12 sm:py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {t('service_names.hair_transplant')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            FUE ve DHI teknikleriyle kalıcı ve doğal saç ekimi.
          </p>
        </div>
      </section>

      {/* Doktor Bilgisi */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Uzman Doktorumuz
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <img
              src="/assets/dr-gizem-kagitci.jpg" // Yer tutucu: Doktor fotoğrafının yolu
              alt="Dr. Gizem Kağıtçı"
              className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover"
            />
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                Dr. Gizem Kağıtçı
              </h3>
              <p className="text-base sm:text-lg text-gray-600 max-w-lg">
                Dr. Gizem Kağıtçı, saç ekimi ve estetik cerrahi alanında 10 yılı aşkın deneyime sahip bir uzmandır. FUE ve DHI teknikleri konusunda uluslararası sertifikalara sahiptir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Öncesi/Sonrası Görselleri */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Öncesi ve Sonrası
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="text-center">
              <img
                src="/assets/hair-transplant-before.jpg" // Yer tutucu: Öncesi fotoğrafı
                alt="Saç Ekimi Öncesi"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-base sm:text-lg font-semibold">Öncesi</p>
            </div>
            <div className="text-center">
              <img
                src="/assets/hair-transplant-after.jpg" // Yer tutucu: Sonrası fotoğrafı
                alt="Saç Ekimi Sonrası"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-base sm:text-lg font-semibold">Sonrası</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmet Detayları */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Saç Ekimi Süreci
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">1. Danışmanlık</h3>
              <p className="text-base sm:text-lg text-gray-600">
                Uzmanlarımızla ücretsiz bir danışmanlık yaparak saç ekimi planınızı oluşturuyoruz.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">2. İşlem</h3>
              <p className="text-base sm:text-lg text-gray-600">
                FUE veya DHI teknikleriyle saç ekimi işleminizi gerçekleştiriyoruz.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">3. İyileşme</h3>
              <p className="text-base sm:text-lg text-gray-600">
                İşlem sonrası bakım talimatlarımızla hızlı ve sağlıklı bir iyileşme süreci sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Randevu Butonu */}
      <section className="py-12 sm:py-16 bg-blue-100 text-center">
        <div className="container mx-auto px-4">
          <a
            href="/randevu"
            className="inline-block bg-blue-700 text-white px-5 py-2 sm:px-6 sm:py-3 text-base sm:text-lg rounded-lg hover:bg-blue-800"
          >
            {t('appointment')}
          </a>
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

export default HairTransplant;
