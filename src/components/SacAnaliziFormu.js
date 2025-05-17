import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function SacAnaliziFormu() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    ad: '',
    soyad: '',
    email: '',
    telefon: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.ad) newErrors.ad = 'Adınızı giriniz';
    if (!formData.soyad) newErrors.soyad = 'Soyadınızı giriniz';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Geçerli bir e-posta adresi giriniz';
    if (!formData.telefon || !/^\+?\d{10,15}$/.test(formData.telefon))
      newErrors.telefon = 'Geçerli bir telefon numarası giriniz';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setSubmitted(true);
      setErrors({});
      // Burada form verilerini bir API’ye gönderebilirsin
      console.log('Form Gönderildi:', formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-100 to-white py-12 sm:py-16 overflow-hidden">
      {/* Dalga Efekti Arka Plan */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#60A5FA"
            fillOpacity="0.3"
            d="M0,224L60,213.3C120,203,240,181,360,170.7C480,160,600,160,720,176C840,192,960,224,1080,229.3C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-blue-900">
          Ücretsiz Saç Analizi
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-center mb-8 text-gray-700">
          Sadece 2 dakikada saçlarınızı dönüştürmenin ilk adımını atın!
        </p>

        {submitted ? (
          <div className="text-center bg-green-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-green-700 mb-2">
              Teşekkürler!
            </h3>
            <p className="text-lg text-gray-600">
              Saç analizi talebiniz alındı. Uzmanlarımız kısa süre içinde sizinle iletişime geçecek.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 sm:p-8 rounded-lg shadow-xl max-w-lg mx-auto"
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="ad">
                Adınız
              </label>
              <input
                type="text"
                name="ad"
                id="ad"
                value={formData.ad}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                  errors.ad ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Adınızı giriniz"
              />
              {errors.ad && (
                <p className="text-red-500 text-sm mt-1">{errors.ad}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="soyad">
                Soyadınız
              </label>
              <input
                type="text"
                name="soyad"
                id="soyad"
                value={formData.soyad}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                  errors.soyad ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Soyadınızı giriniz"
              />
              {errors.soyad && (
                <p className="text-red-500 text-sm mt-1">{errors.soyad}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                E-posta Adresiniz
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="ornek@eposta.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="telefon">
                Telefon Numaranız
              </label>
              <input
                type="tel"
                name="telefon"
                id="telefon"
                value={formData.telefon}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                  errors.telefon ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="+905xxxxxxxxx"
              />
              {errors.telefon && (
                <p className="text-red-500 text-sm mt-1">{errors.telefon}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Analizi Başlat
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default SacAnaliziFormu;
