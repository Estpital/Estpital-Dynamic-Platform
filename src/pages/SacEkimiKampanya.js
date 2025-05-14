import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function SacEkimiKampanya() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [openQuestion, setOpenQuestion] = useState(null);
  const [phone, setPhone] = useState('');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    // Telefon numarasını WhatsApp bağlantısına yönlendirme
    window.location.href = `https://wa.me/905441072570?text=Merhaba,%20Estpital%20saç%20ekimi%20kampanyası%20hakkında%20bilgi%20almak%20istiyorum!%20Telefon:%20${phone}`;
  };

  const faqData = [
    {
      question: "Saç ekimi sonuçları kalıcı mı?",
      answer: "Evet, ekilen saçlar genetik olarak dökülmeye dirençlidir ve kalıcıdır. Ancak doğal yaşlanma sürecinde saç yoğunluğunda azalma olabilir."
    },
    {
      question: "Saç ekimi operasyonu ağrılı mı?",
      answer: "Sedasyon sayesinde işlem sırasında ağrı hissedilmez. Operasyon sonrası hafif bir rahatsızlık olabilir, ancak bu ağrı kesicilerle kolayca yönetilir."
    },
    {
      question: "Saç ekimi ne kadar sürer?",
      answer: "Operasyon genellikle 6-8 saat sürer, ancak bu süre ekilecek saç kökü sayısına ve kullanılan tekniğe bağlı olarak değişebilir."
    },
    {
      question: "Saç ekimi için yaş sınırı var mı?",
      answer: "18 yaş üstü herkes için uygundur, ancak saç dökülmesinin stabilize olması önemlidir. Genellikle 25 yaş ve sonrası önerilir."
    },
    {
      question: "Ne zaman sonuç görürüm?",
      answer: "İlk sonuçlar 3-4 ayda başlar, tam sonuçlar ise 12-18 ayda ortaya çıkar. Eksozom tedavisi bu süreci hızlandırabilir."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-white py-12 sm:py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-gray-800">
            Saç Ekimi ile Yeni Bir Başlangıç Yapın
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-600">
            Estpital’de Dr. Gizem Kağıtçı ile modern saç ekimi teknikleri (FUE, DHI, Sedasyon) kullanarak doğal ve kalıcı sonuçlar elde edin.
          </p>
          <form onSubmit={handlePhoneSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Telefon Numaranız"
              className="w-full sm:w-64 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition text-lg"
            >
              Hemen İletişime Geç
            </button>
          </form>
          <a
            href="/randevu"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 text-lg sm:text-xl"
          >
            Ücretsiz Danışmanlık Al
          </a>
        </div>
      </section>

      {/* Doktor Tanıtımı */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
            Uzman Doktorumuz: Dr. Gizem Kağıtçı
          </h2>
          <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
            <div className="md:w-1/3">
              <div className="bg-gray-200 h-64 sm:h-72 rounded-lg flex items-center justify-center">
                <p className="text-lg text-gray-600">[Dr. Gizem Kağıtçı’nın Fotoğrafı - İleride Eklenecek]</p>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-600 mb-4">
                Dr. Gizem Kağıtçı, saç ekimi ve medikal estetik alanında 10 yılı aşkın deneyime sahip bir uzmandır. İstanbul Üniversitesi Tıp Fakültesi’nden mezun olan Dr. Kağıtçı, uzmanlığını plastik cerrahi ve saç ekimi teknikleri üzerine tamamlamıştır.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Türk Plastik, Rekonstrüktif ve Estetik Cerrahi Derneği üyesidir ve ulusal/uluslararası kongreleri takip ederek en güncel yöntemleri hastalarına sunar. Sedasyonlu saç ekimi, eksozom tedavisi ve DHI yöntemiyle doğal ve kalıcı sonuçlar elde eder.
              </p>
              <p className="text-lg text-gray-600">
                Hastalarına stressiz ve ağrısız bir deneyim sunmak için modern teknikler kullanır. Estpital’de Dr. Kağıtçı ile hayalinizdeki görünüme kavuşun!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmet Detayları */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
            Estpital’de Saç Ekimi Süreci
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Danışmanlık ve Planlama</h3>
              <p className="text-lg text-gray-600">
                Dr. Gizem Kağıtçı ile detaylı bir saç analizi yapılır. Saç dökülmesi derecesi ve donör bölge değerlendirilir. Size özel bir plan oluşturulur.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Operasyon</h3>
              <p className="text-lg text-gray-600">
                6-8 saat süren operasyon, sedasyon altında yapılır. FUE veya DHI yöntemiyle saç kökleri titizlikle ekilir. Ağrı veya stres hissetmezsiniz.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">İyileşme ve Sonuçlar</h3>
              <p className="text-lg text-gray-600">
                İlk 7-10 gün içinde iyileşme başlar. Eksozom tedavisi ile süreç hızlanır. Tam sonuçlar 12-18 ayda görülür.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Öncesi/Sonrası - Kaydırılabilir */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
            Saç Ekimi Öncesi ve Sonrası
          </h2>
          <p className="text-lg text-center mb-6 max-w-3xl mx-auto text-gray-600">
            Hastalarımızın saç ekimi öncesi ve sonrası değişimlerini burada görebilirsiniz. Daha fazla örnek görmek için kaydırabilirsiniz.
          </p>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-6 pb-4">
              {/* Örnek 1 */}
              <div className="min-w-[300px] bg-white p-6 rounded-lg shadow">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <img
                      src="/src/assets/before-after/before1.jpg"
                      alt="Öncesi"
                      className="h-48 w-full object-cover rounded-lg"
                      onError={(e) => (e.target.src = "/src/assets/before-after/placeholder-before.jpg")} // Yüklenemezse yedek görsel
                    />
                    <p className="text-center mt-2 font-semibold">Öncesi</p>
                  </div>
                  <div>
                    <img
                      src="/src/assets/before-after/after1.jpg"
                      alt="Sonrası"
                      className="h-48 w-full object-cover rounded-lg"
                      onError={(e) => (e.target.src = "/src/assets/before-after/placeholder-after.jpg")} // Yüklenemezse yedek görsel
                    />
                    <p className="text-center mt-2 font-semibold">Sonrası</p>
                  </div>
                </div>
                <p className="text-lg text-center">Hasta 1: Seyrek saç yapısı tamamen doğal bir yoğunluğa kavuştu.</p>
              </div>
              {/* Örnek 2 */}
              <div className="min-w-[300px] bg-white p-6 rounded-lg shadow">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <img
                      src="/src/assets/before-after/before2.jpg"
                      alt="Öncesi"
                      className="h-48 w-full object-cover rounded-lg"
                      onError={(e) => (e.target.src = "/src/assets/before-after/placeholder-before.jpg")} // Yüklenemezse yedek görsel
                    />
                    <p className="text-center mt-2 font-semibold">Öncesi</p>
                  </div>
                  <div>
                    <img
                      src="/src/assets/before-after/after2.jpg"
                      alt="Sonrası"
                      className="h-48 w-full object-cover rounded-lg"
                      onError={(e) => (e.target.src = "/src/assets/before-after/placeholder-after.jpg")} // Yüklenemezse yedek görsel
                    />
                    <p className="text-center mt-2 font-semibold">Sonrası</p>
                  </div>
                </div>
                <p className="text-lg text-center">Hasta 2: Ön saç çizgisi yeniden tasarlandı, doğal görünüm elde edildi.</p>
              </div>
              {/* Örnek 3 */}
              <div className="min-w-[300px] bg-white p-6 rounded-lg shadow">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <img
                      src="/src/assets/before-after/before3.jpg"
                      alt="Öncesi"
                      className="h-48 w-full object-cover rounded-lg"
                      onError={(e) => (e.target.src = "/src/assets/before-after/placeholder-before.jpg")} // Yüklenemezse yedek görsel
                    />
                    <p className="text-center mt-2 font-semibold">Öncesi</p>
                  </div>
                  <div>
                    <img
                      src="/src/assets/before-after/after3.jpg"
                      alt="Sonrası"
                      className="h-48 w-full object-cover rounded-lg"
                      onError={(e) => (e.target.src = "/src/assets/before-after/placeholder-after.jpg")} // Yüklenemezse yedek görsel
                    />
                    <p className="text-center mt-2 font-semibold">Sonrası</p>
                  </div>
                </div>
                <p className="text-lg text-center">Hasta 3: Yoğun saç dökülmesi sonrası tam kapsamlı ekim yapıldı.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hasta Yorumları */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
            Hastalarımız Ne Diyor?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg italic mb-4 text-gray-600">
                “Dr. Gizem Kağıtçı’nın sedasyonlu saç ekimi sayesinde hiçbir ağrı hissetmedim. Eksozom tedavisiyle saçlarım daha hızlı tutundu ve sonuçlar çok doğal!”
              </p>
              <p className="text-lg font-semibold text-right text-gray-800">— Ahmet Y., 35</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg italic mb-4 text-gray-600">
                “DHI yöntemiyle saç ekimi yaptırdım ve tıraş olmadan işlem yapıldı. Dr. Kağıtçı ve ekibi çok profesyonel, sonuçlardan çok memnunum!”
              </p>
              <p className="text-lg font-semibold text-right text-gray-800">— Elif S., 29</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg italic mb-4 text-gray-600">
                “Estpital’de saç ekimi yaptırdım ve sonuçlar harika! Dr. Kağıtçı’nın yaklaşımı çok güven vericiydi, kesinlikle tavsiye ederim.”
              </p>
              <p className="text-lg font-semibold text-right text-gray-800">— Mert K., 42</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sık Sorulan Sorular - Accordion Yapısı */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
            Sık Sorulan Sorular
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full text-left py-4 px-6 flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition"
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 transform transition-transform ${openQuestion === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {openQuestion === index && (
                  <div className="py-4 px-6 bg-gray-50">
                    <p className="text-lg">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bölümü */}
      <section className="py-12 sm:py-16 bg-blue-100 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
            Hayalinizdeki Görünüme Kavuşun!
          </h2>
          <a
            href="/randevu"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 text-lg sm:text-xl"
          >
            Ücretsiz Danışmanlık Al
          </a>
        </div>
      </section>

      {/* WhatsApp Butonu */}
      <a
        href="https://wa.me/905441072570?text=Merhaba,%20Estpital%20saç%20ekimi%20kampanyası%20hakkında%20bilgi%20almak%20istiyorum!"
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

export default SacEkimiKampanya;
