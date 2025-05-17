import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';

function HairTransplant() {
  const { t } = useTranslation();

  // Operasyon süreci için zaman çizelgesi verileri
  const timelineSteps = [
    {
      title: "Randevu ve Hazırlık",
      description:
        "Randevu alındıktan sonra hastanın adresine saç derisini ve vücudunu operasyona hazırlayacak, kan dolaşımını artıran bir tedavi kiti gönderiyoruz.",
      icon: "📅",
    },
    {
      title: "Operasyon Günü",
      description:
        "Sedasyon (derin uyku) yöntemiyle 15-20 dakikalık bir uyku sırasında lokal anestezi uyguluyoruz. Saç derisi uyuştuktan sonra hastayı uyandırıp DHI yöntemiyle operasyona devam ediyoruz.",
      icon: "💉",
    },
    {
      title: "1. Gün: Pansuman",
      description:
        "Operasyondan sonraki gün pansuman çıkarılıyor.",
      icon: "🩹",
    },
    {
      title: "2. Gün: Yıkama Eğitimi",
      description:
        "İkinci gün hastaya saç yıkama eğitimi veriyoruz ve yıkama süreci başlıyor.",
      icon: "🚿",
    },
    {
      title: "10-12. Gün: Kabuk Dökümü",
      description:
        "10. ve 12. günlerde kabuk döküm işlemi gerçekleştiriliyor.",
      icon: "🧼",
    },
    {
      title: "20. Gün: Geçici Dökülme",
      description:
        "20. günde geçici dökülme evresi başlıyor.",
      icon: "🍂",
    },
    {
      title: "90-100. Gün: İlk Çıkışlar",
      description:
        "90-100 gün sonra ekilen saçların ilk çıkışları başlıyor.",
      icon: "🌱",
    },
    {
      title: "6. Ay: %60-70 Çıkış",
      description:
        "6. ay sonunda ekilen saçların %60-70’i çıkmış oluyor.",
      icon: "📈",
    },
    {
      title: "12-18. Ay: Tam Sonuç",
      description:
        "Tüm süreç 12-18 ay sürüyor ve ekilen saçlar tam sonuç veriyor.",
      icon: "🎉",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navbar */}
      <Navbar />

      {/* Başlık ve Giriş */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 sm:py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Derin Uyku ile Ağrısız Saç Ekimi
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Sedasyon yöntemiyle ağrısız bir deneyim! DHI tekniği ile doğal ve kalıcı sonuçlar. Dr. Gizem Kağıtçı gözetiminde, hastane ortamında.
          </p>
          <a
            href="/randevu"
            className="inline-block bg-yellow-400 text-blue-900 px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl font-semibold rounded-full hover:bg-yellow-500 transition"
          >
            {t('appointment')}
          </a>
        </div>
      </section>

      {/* Dr. Gizem Kağıtçı Tanıtımı */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <img
              src="/assets/dr-gizem-kagitci.jpg" // Yer tutucu: Doktor fotoğrafı
              alt="Dr. Gizem Kağıtçı"
              className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover shadow-lg"
            />
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-900">
                Dr. Gizem Kağıtçı
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-lg">
                Saç ekimi ve estetik cerrahi alanında 10 yılı aşkın deneyime sahip olan Dr. Gizem Kağıtçı, tüm operasyonları hastane ortamında bizzat yönetiyor. Uluslararası sertifikalı uzmanlığıyla doğal sonuçlar sunuyor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DHI Yönteminin Avantajları */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-900">
            DHI Yönteminin Avantajları
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Daha Yoğun Ekim",
                description: "Santimetre kare başına 15-20 greft daha fazla implantasyon sağlar.",
              },
              {
                title: "Doğal Açılar",
                description: "Kalemler sayesinde doğal saç açıları daha rahat verilebilir.",
              },
              {
                title: "Kanal Açılmaz",
                description: "Kanal açılmadığı için kanama minimumdur ve adrenalin gibi ilaçlar kullanılmaz.",
              },
              {
                title: "Hızlı İyileşme",
                description: "Greft büyüklüğünde kanallar sayesinde saç derisi hızlı kavrar, iyileşme süreci hızlanır.",
              },
              {
                title: "Traşsız Uygulama",
                description: "Saçlı bölgelerde traş edilmeden işlem gerçekleştirilebilir.",
              },
              {
                title: "Daha Az Ödem",
                description: "Saç derisi pişirilmediği için ödem gibi şikayetler en aza iner.",
              },
            ].map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-blue-700">
                  {advantage.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operasyon Süreci (Zaman Çizelgesi) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-900">
            Saç Ekimi Sürecimiz
          </h2>
          <div className="relative">
            {/* Zaman Çizelgesi Çizgisi */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>
            {timelineSteps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="w-1/2 px-4">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-3">
                      <span className="text-3xl mr-3">{step.icon}</span>
                      <h3 className="text-xl sm:text-2xl font-semibold text-blue-700">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="w-1/2 px-4">
                  <div className="flex justify-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA: Randevu Al */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 sm:py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Yeni Bir Başlangıç İçin Hazır mısınız?
          </h2>
          <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Dr. Gizem Kağıtçı ile ağrısız ve doğal saç ekimi deneyimi için hemen randevu alın!
          </p>
          <a
            href="/randevu"
            className="inline-block bg-yellow-400 text-blue-900 px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl font-semibold rounded-full hover:bg-yellow-500 transition"
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
