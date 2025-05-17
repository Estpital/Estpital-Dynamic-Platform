import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';

function SacEkimi() {
  const { t } = useTranslation();

  // Operasyon süreci için zaman çizelgesi verileri
  const timelineSteps = [
    {
      title: t('process_steps.appointment'),
      description: t('process_steps.appointment'),
      icon: "📅",
    },
    {
      title: t('process_steps.operation_day'),
      description: t('process_steps.operation_day'),
      icon: "💉",
    },
    {
      title: t('process_steps.day_1'),
      description: t('process_steps.day_1'),
      icon: "🩹",
    },
    {
      title: t('process_steps.day_2'),
      description: t('process_steps.day_2'),
      icon: "🚿",
    },
    {
      title: t('process_steps.day_10_12'),
      description: t('process_steps.day_10_12'),
      icon: "🧼",
    },
    {
      title: t('process_steps.day_20'),
      description: t('process_steps.day_20'),
      icon: "🍂",
    },
    {
      title: t('process_steps.day_90_100'),
      description: t('process_steps.day_90_100'),
      icon: "🌱",
    },
    {
      title: t('process_steps.month_6'),
      description: t('process_steps.month_6'),
      icon: "📈",
    },
    {
      title: t('process_steps.month_12_18'),
      description: t('process_steps.month_12_18'),
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
            {t('deep_sleep_method')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {t('deep_sleep_desc')}
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
                {t('doctor_gizem')}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-lg">
                {t('doctor_gizem_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DHI Yönteminin Avantajları */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-900">
            {t('dhi_advantages_title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t('dhi_advantages.denser_implantation') },
              { title: t('dhi_advantages.natural_angles') },
              { title: t('dhi_advantages.no_channels') },
              { title: t('dhi_advantages.fast_recovery') },
              { title: t('dhi_advantages.no_shaving') },
              { title: t('dhi_advantages.less_edema') },
            ].map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-blue-700">
                  {advantage.title.split(':')[0]}
                </h3>
                <p className="text-base sm:text-lg text-gray-600">
                  {advantage.title}
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
            {t('process_title')}
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
            {t('cta_title')}
          </h2>
          <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            {t('cta_desc')}
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

export default SacEkimi;
