function BurunEstetigi() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-700 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Estpital International Agency</h1>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:underline">Ana Sayfa</a></li>
            <li><a href="/hizmetler" className="hover:underline">Hizmetler</a></li>
            <li><a href="/hakkimizda" className="hover:underline">Hakkımızda</a></li>
            <li><a href="/iletisim" className="hover:underline">İletişim</a></li>
            <li><a href="/randevu" className="hover:underline">Randevu Al</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-100 py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Burun Estetiği ile Mükemmel Görünüm</h2>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Uzman ekibimizle doğal ve estetik burun tasarımı. Yüzünüze en uygun çözümleri sunuyoruz!
          </p>
          <a
            href="/randevu"
            className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
          >
            Ücretsiz Danışmanlık için Randevu Al
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Operasyon Detayları */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">Burun Estetiği Hakkında</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-semibold mb-4">Burun Estetiği Nedir?</h4>
                <p className="text-lg">
                  Burun estetiği (rinoplasti), burunun şeklini ve boyutunu değiştirerek yüzle uyumlu bir görünüm elde etmeyi amaçlayan cerrahi bir işlemdir.
                  Estpital’de hem estetik hem de fonksiyonel (nefes alma sorunları) çözümler sunuyoruz.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-4">Kimler İçin Uygun?</h4>
                <p className="text-lg">
                  Burun estetiği, burun şeklinden memnun olmayan, nefes alma sorunları yaşayan veya burun travması geçirmiş 18 yaş üstü bireyler için uygundur.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-4">Operasyon Süreci</h4>
                <p className="text-lg">
                  Operasyon genellikle 2-3 saat sürer ve genel anestezi altında gerçekleştirilir. İyileşme süreci 1-2 hafta sürer, tam sonuçlar 6-12 ayda görülür.
                </p>
              </div>
            </div>
          </div>

          {/* Doktor Bilgisi */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">Uzman Doktorumuz</h3>
            <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-lg shadow">
              <h4 className="text-2xl font-semibold mb-2">Dr. Gizem Kağıtçı</h4>
              <p className="text-lg mb-4">
                Dr. Gizem Kağıtçı, burun estetiği ve plastik cerrahi alanında 10 yılı aşkın deneyime sahiptir.
                Yüz estetiği konusunda uzmanlaşmıştır.
              </p>
              <p className="text-lg">
                Eğitim: İstanbul Üniversitesi Tıp Fakültesi<br />
                Uzmanlık: Plastik Cerrahi ve Yüz Estetiği
              </p>
            </div>
          </div>

          {/* Öncesi/Sonrası */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">Öncesi ve Sonrası</h3>
            <p className="text-lg text-center mb-6 max-w-3xl mx-auto">
              Hastalarımızın burun estetiği öncesi ve sonrası değişimlerini burada görebilirsiniz.
              (Not: Görseller ileride eklenecek.)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-200 p-6 rounded-lg text-center">
                <p className="text-lg font-semibold">Öncesi</p>
                <p>Asimetrik burun yapısı, nefes alma sorunları.</p>
              </div>
              <div className="bg-gray-200 p-6 rounded-lg text-center">
                <p className="text-lg font-semibold">Sonrası</p>
                <p>Doğal, estetik ve yüzle uyumlu bir burun.</p>
              </div>
            </div>
          </div>

          {/* Sık Sorulan Sorular */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">Sık Sorulan Sorular</h3>
            <ul className="space-y-6 max-w-3xl mx-auto">
              <li>
                <strong className="text-lg">Burun estetiği ağrılı mı?</strong>
                <p>Genel anestezi altında yapıldığı için işlem sırasında ağrı hissedilmez. İyileşme sürecinde hafif rahatsızlık olabilir.</p>
              </li>
              <li>
                <strong className="text-lg">İyileşme süreci ne kadar sürer?</strong>
                <p>İlk 1-2 haftada şişlik ve morluklar azalır, tam sonuçlar 6-12 ayda ortaya çıkar.</p>
              </li>
              <li>
                <strong className="text-lg">Sonuçlar kalıcı mı?</strong>
                <p>Evet, burun estetiği sonuçları genellikle kalıcıdır.</p>
              </li>
            </ul>
          </div>

          {/* Neden Biz? */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">Neden Estpital?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-2">Uzman Kadro</h4>
                <p>Dr. Gizem Kağıtçı liderliğinde deneyimli ekibimizle hizmetinizdeyiz.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-2">Kişiselleştirilmiş Çözümler</h4>
                <p>Yüzünüze en uygun burun tasarımını birlikte planlıyoruz.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-2">Güvenli Operasyon</h4>
                <p>Modern teknikler ve steril ortamda güvenli bir süreç.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Hayalinizdeki Görünüme Kavuşun!</h3>
            <a
              href="/randevu"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
            >
              Ücretsiz Danışmanlık için Randevu Al
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-6">
        <div className="container mx-auto text-center">
          <p className="mb-2">© 2025 Estpital International Agency. Tüm hakları saklıdır.</p>
          <p>E-posta: info@estpital.com | Telefon: +90 212 123 45 67</p>
        </div>
      </footer>
    </div>
  );
}

export default BurunEstetigi;
