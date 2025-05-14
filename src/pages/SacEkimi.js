function SacEkimi() {
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

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Saç Ekimi</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Saç ekimi, saç dökülmesi yaşayan bireyler için kalıcı ve doğal bir çözüm sunar.
            Estpital’de FUE ve DHI teknikleriyle, uzman ekibimizle en iyi sonuçları garanti ediyoruz.
          </p>

          {/* Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Kimler İçin Uygun?</h3>
              <p>
                Saç ekimi, erkek ve kadınlarda androgenetik alopesi (genetik saç dökülmesi) veya
                travmatik saç kaybı yaşayanlar için idealdir. 18 yaş üstü, yeterli donör saçı olan
                herkes uygun olabilir.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Operasyon Süreci</h3>
              <p>
                Operasyon genellikle 6-8 saat sürer ve lokal anestezi altında yapılır. Donör bölgeden
                alınan saç kökleri, hedef bölgeye titizlikle ekilir. İyileşme süresi yaklaşık 7-10 gündür.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Sık Sorulan Sorular</h3>
              <ul className="space-y-4">
                <li>
                  <strong>Saç ekimi sonuçları kalıcı mı?</strong>
                  <p>Evet, ekilen saçlar genetik olarak dökülmeye dirençlidir ve kalıcıdır.</p>
                </li>
                <li>
                  <strong>Operasyon ağrılı mı?</strong>
                  <p>Lokal anestezi sayesinde işlem sırasında ağrı hissedilmez.</p>
                </li>
                <li>
                  <strong>Ne zaman sonuç görürüm?</strong>
                  <p>İlk sonuçlar 3-4 ayda başlar, tam sonuç 12-18 ayda ortaya çıkar.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
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

export default SacEkimi;
