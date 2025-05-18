import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import ConsultationForm from '../components/ConsultationForm';

function Konsültasyon() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Konsültasyon Formu */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <ConsultationForm />
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

export default Konsültasyon;
