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

      {/* Hero Section */}
      <section className="bg-blue-100 py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Saç Ekimi ile Doğal Görünüm</h2>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Uzman ekibimizle FUE ve DHI teknikleriyle kalıcı sonuçlar sunuyoruz. Sedasyon seçeneğiyle konforlu bir deneyim!
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
            <h3 className="text-3xl font-bold text-center mb-8">Saç Ekimi Hakkında</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-semibold mb-4">Saç Ekimi Nedir?</h4>
                <p className="text-lg">
                  Saç ekimi, saç dökülmesi yaşayan bireylerin saçlarını geri kazanmasını sağlayan cerrahi bir işlemdir.
                  Estpital’de FUE (Follicular Unit Extraction) ve DHI (Direct Hair Implantation) teknikleriyle doğal sonuçlar elde ediyoruz.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-4">Kimler İçin Uygun?</h4>
                <p className="text-lg">
                  Saç ekimi, genetik saç dökülmesi (androgenetik alopesi), travmatik saç kaybı veya seyrek saç yapısına sahip
                  18 yaş üstü bireyler için uygundur. Yeterli donör saçı olan herkes bu işlemi yaptırabilir.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-4">Operasyon Süreci</h4>
                <p className="text-lg">
                  Operasyon 6-8 saat sürer ve lokal anestezi veya sedasyon altında gerçekleştirilir. Donör bölgeden (genellikle ense)
                  alınan saç kökleri, hedef bölgeye titizlikle ekilir. İyileşme süreci 7-10 gün sürer, tam sonuçlar 12-18 ayda görülür.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-4">Sedasyonlu Saç Ekimi</h4>
                <p className="text-lg">
                  Estpital olarak sedasyon seçeneği sunuyoruz. Bu sayede işlem sırasında tamamen rahat olabilir, ağrı veya stres hissetmezsiniz.
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
                Dr. Gizem Kağıtçı, saç ekimi ve medikal estetik alanında 10 yılı aşkın deneyime sahiptir.
                Yüzlerce başarılı operasyonla hastalarına doğal ve kalıcı sonuçlar sunmaktadır.
              </p>
              <p className="text-lg">
                Eğitim: İstanbul Üniversitesi Tıp Fakültesi<br />
                Uzmanlık: Plastik Cerrahi ve Saç Ekimi Teknikleri
              </p>
            </div>
          </div>

          {/* Öncesi/Sonrası */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">Öncesi ve Sonrası</h3>
            <p className="text-lg text-center mb-6 max-w-3xl mx-auto">
              Hastalarımızın saç ekimi öncesi ve sonrası değişimlerini burada görebilirsiniz.
              (Not: Görseller ileride eklenecek. Şu an yer tutucu olarak açıklama kullanılmıştır.)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-200 p-6 rounded-lg text-center">
                <p className="text-lg font-semibold">Öncesi</p>
                <p>Seyrek saç yapısı, belirgin saç dökülmesi.</p>
              </div>
              <div className="bg-gray-200 p-6 rounded-lg text-center">
                <p className="text-lg font-semibold">Sonrası</p>
                <p>Doğal, yoğun ve estetik bir saç görünümü.</p>
              </div>
            </div>
          </div>

          {/* Sık Sorulan Sorular */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">Sık Sorulan Sorular</h3>
            <ul className="space-y-6 max-w-3xl mx-auto">
              <li>
                <strong className="text-lg">Saç ekimi sonuçları kalıcı mı?</strong>
                <p>Evet, ekilen saçlar genetik olarak dökülmeye dirençlidir ve kalıcıdır.</p>
              </li>
              <li>
                <strong className="text-lg">Operasyon ağrılı mı?</strong>
                <p>Lokal anestezi veya sedasyon sayesinde işlem sırasında ağrı hissedilmez.</p>
              </li>
              <li>
                <strong className="text-lg">Ne zaman sonuç görürüm?</strong>
                <p>İlk sonuçlar 3-4 ayda başlar, tam sonuç 12-18 ayda ortaya çıkar.</p>
              </li>
              <li>
                <strong className="text-lg">Saç ekimi için yaş sınırı var mı?</strong>
                <p>18 yaş üstü herkes için uygundur, ancak saç dökülmesi stabilize olmalıdır.</p>
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
                <h4 className="text-xl font-semibold mb-2">Modern Teknikler</h4>
                <p>FUE ve DHI teknikleriyle doğal ve kalıcı sonuçlar.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-2">Konforlu Deneyim</h4>
                <p>Sedasyon seçeneğiyle stressiz bir operasyon süreci.</p>
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

export default SacEkimi;
