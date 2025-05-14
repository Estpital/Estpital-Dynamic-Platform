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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Saç Ekimi ile Doğal ve Kalıcı Sonuçlar</h2>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Dr. Gizem Kağıtçı liderliğinde, FUE ve DHI teknikleriyle saç ekiminde uzman çözümler sunuyoruz. Sedasyon ve eksozom tedavisiyle konforlu bir deneyim!
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
          {/* Genel Bilgi */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">Saç Ekimi Nedir?</h3>
            <p className="text-lg max-w-3xl mx-auto">
              Saç ekimi, saç dökülmesi yaşayan bireylerin sağlıklı saç köklerini saçsız veya seyrek bölgelere naklederek doğal bir görünüm elde etmesini sağlayan cerrahi bir işlemdir. Estpital’de, FUE ve DHI gibi modern tekniklerle kalıcı ve estetik sonuçlar sunuyoruz. Dr. Gizem Kağıtçı’nın liderliğinde, sedasyon ve eksozom tedavisiyle desteklenen işlemlerimiz, hem konforlu hem de etkili bir deneyim sağlar.
            </p>
          </div>

          {/* Kimler İçin Uygun? */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">Saç Ekimi Kimler İçin Uygundur?</h3>
            <ul className="list-disc list-inside space-y-4 max-w-3xl mx-auto text-lg">
              <li>Genetik saç dökülmesi (androgenetik alopesi) yaşayanlar.</li>
              <li>Travmatik saç kaybı veya seyrek saç yapısına sahip olanlar.</li>
              <li>18 yaş üstü, yeterli donör saçı olan bireyler.</li>
              <li>Sağlık durumu işlem için uygun olanlar.</li>
              <li>Doğal ve kalıcı bir görünüm isteyenler.</li>
            </ul>
          </div>

          {/* Operasyon Süreci */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">Saç Ekimi Operasyon Süreci</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-semibold mb-4">Danışmanlık ve Planlama</h4>
                <p className="text-lg">
                  İlk adımda, Dr. Gizem Kağıtçı ile detaylı bir saç analizi yapılır. Saç dökülmesinin derecesi ve donör bölgenin durumu değerlendirilir. Kişiye özel bir ekim planı oluşturulur ve işlem detayları paylaşılır.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-4">Operasyon</h4>
                <p className="text-lg">
                  Operasyon, genellikle 6-8 saat sürer ve sedasyon altında gerçekleştirilir. Donör bölgeden (genellikle ense) saç kökleri FUE veya DHI yöntemiyle alınır ve hedef bölgeye titizlikle ekilir. Sedasyon sayesinde ağrı veya stres hissedilmez.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-4">İyileşme Süreci</h4>
                <p className="text-lg">
                  İlk 7-10 gün içinde kabuklanma ve kızarıklık azalır. Eksozom tedavisiyle desteklenen iyileşme süreci daha hızlıdır. İlk sonuçlar 3-4 ayda görülür, tam sonuçlar ise 12-18 ayda ortaya çıkar.
                </p>
              </div>
            </div>
          </div>

          {/* Doktor Bilgisi */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">Uzman Doktorumuz: Dr. Gizem Kağıtçı</h3>
            <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
              <div className="md:w-1/3">
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <p className="text-lg text-gray-600">[Dr. Gizem Kağıtçı’nın Fotoğrafı - İleride Eklenecek]</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg mb-4">
                  Dr. Gizem Kağıtçı, saç ekimi ve medikal estetik alanında 10 yılı aşkın deneyime sahip bir uzmandır. İstanbul Üniversitesi Tıp Fakültesi’nden mezun olan Dr. Kağıtçı, uzmanlığını plastik cerrahi ve saç ekimi teknikleri üzerine tamamlamıştır. Türk Plastik, Rekonstrüktif ve Estetik Cerrahi Derneği üyesidir ve ulusal/uluslararası kongreleri takip ederek en güncel yöntemleri hastalarına sunar.
                </p>
                <p className="text-lg mb-4">
                  Dr. Kağıtçı, özellikle sedasyonlu saç ekimiyle hastalarına stressiz ve ağrısız bir deneyim sunar. Ayrıca, eksozom tedavisiyle saç ekimi işlemlerini kombine ederek ekilen saçların tutunma oranını artırır ve iyileşme sürecini hızlandırır. DHI yöntemiyle tıraşsız ekim, doğal görünüm ve hızlı iyileşme avantajlarını hastalarına sunmaktadır.
                </p>
                <a
                  href="/doktorlar/gizem-kagitci"
                  className="inline-block bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
                >
                  Dr. Kağıtçı Hakkında Daha Fazla Bilgi Edinin
                </a>
              </div>
            </div>
          </div>

          {/* Sedasyon ile Saç Ekimi Konforu */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">Sedasyon ile Saç Ekimi Konforu</h3>
            <p className="text-lg max-w-3xl mx-auto mb-6">
              Dr. Gizem Kağıtçı, sedasyonlu saç ekimiyle hastalarına ağrısız ve stressiz bir deneyim sunar. Sedasyon, işlem sırasında hastanın hafif bir uyku halinde olmasını sağlar, böylece iğne korkusu veya operasyon stresi yaşanmaz. Bu yöntem, özellikle uzun süren işlemlerde büyük bir konfor sağlar.
            </p>
            <ul className="list-disc list-inside space-y-4 max-w-3xl mx-auto text-lg">
              <li>Hasta işlem sırasında ağrı veya rahatsızlık hissetmez.</li>
              <li>Sedasyon, hastanın sakin ve rahat bir şekilde operasyonu geçirmesini sağlar.</li>
              <li>İyileşme sürecinde de daha az stres yaşanır.</li>
            </ul>
          </div>

          {/* Eksozom Tedavisiyle Kombine Saç Ekimi */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">Eksozom Tedavisiyle Kombine Saç Ekimi</h3>
            <p className="text-lg max-w-3xl mx-auto mb-6">
              Dr. Kağıtçı, saç ekimi işlemlerini eksozom tedavisiyle destekleyerek daha etkili sonuçlar elde eder. Eksozomlar, saç köklerini güçlendiren ve büyüme faktörleriyle destekleyen mikroskobik yapılar içerir. Bu tedavi, ekim sonrası saç köklerinin tutunma oranını artırır ve iyileşme sürecini hızlandırır.
            </p>
            <ul className="list-disc list-inside space-y-4 max-w-3xl mx-auto text-lg">
              <li>Saç köklerinin tutunma oranı artar, daha sağlıklı saçlar çıkar.</li>
              <li>İyileşme süreci hızlanır, kızarıklık ve şişlik azalır.</li>
              <li>Minimal invaziv bir yöntemdir, cerrahi riskler içermez.</li>
            </ul>
          </div>

          {/* DHI Yönteminin Avantajları */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">DHI Yönteminin Avantajları</h3>
            <p className="text-lg max-w-3xl mx-auto mb-6">
              Dr. Kağıtçı, DHI (Direct Hair Implantation) yöntemiyle saç ekiminde doğal ve kalıcı sonuçlar sunar. Bu yöntem, özel bir kalemle saç köklerinin doğrudan ekilmesini sağlar, böylece tıraşsız ekim mümkün olur ve iyileşme süreci hızlanır.
            </p>
            <ul className="list-disc list-inside space-y-4 max-w-3xl mx-auto text-lg">
              <li>Tıraşsız ekim imkanı sunar, saçlarınızı kesmeden işlem yapılabilir.</li>
              <li>Minimal doku hasarı ve hızlı iyileşme sağlar.</li>
              <li>Doğal görünüm ve yoğun saçlar için ideal bir yöntemdir.</li>
            </ul>
          </div>

          {/* Öncesi/Sonrası - Kaydırılabilir */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">Saç Ekimi Öncesi ve Sonrası</h3>
            <p className="text-lg text-center mb-6 max-w-3xl mx-auto">
              Hastalarımızın saç ekimi öncesi ve sonrası değişimlerini burada görebilirsiniz. Daha fazla örnek görmek için kaydırabilirsiniz.
            </p>
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-6 pb-4">
                {/* Örnek 1 */}
                <div className="min-w-[300px] bg-gray-50 p-6 rounded-lg shadow">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                        <p className="text-lg text-gray-600">[Öncesi Fotoğraf - İleride Eklenecek]</p>
                      </div>
                      <p className="text-center mt-2 font-semibold">Öncesi</p>
                    </div>
                    <div>
                      <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                        <p className="text-lg text-gray-600">[Sonrası Fotoğraf - İleride Eklenecek]</p>
                      </div>
                      <p className="text-center mt-2 font-semibold">Sonrası</p>
                    </div>
                  </div>
                  <p className="text-lg text-center">Hasta 1: Seyrek saç yapısı tamamen doğal bir yoğunluğa kavuştu.</p>
                </div>
                {/* Örnek 2 */}
                <div className="min-w-[300px] bg-gray-50 p-6 rounded-lg shadow">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                        <p className="text-lg text-gray-600">[Öncesi Fotoğraf - İleride Eklenecek]</p>
                      </div>
                      <p className="text-center mt-2 font-semibold">Öncesi</p>
                    </div>
                    <div>
                      <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                        <p className="text-lg text-gray-600">[Sonrası Fotoğraf - İleride Eklenecek]</p>
                      </div>
                      <p className="text-center mt-2 font-semibold">Sonrası</p>
                    </div>
                  </div>
                  <p className="text-lg text-center">Hasta 2: Ön saç çizgisi yeniden tasarlandı, doğal görünüm elde edildi.</p>
                </div>
                {/* Örnek 3 */}
                <div className="min-w-[300px] bg-gray-50 p-6 rounded-lg shadow">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                        <p className="text-lg text-gray-600">[Öncesi Fotoğraf - İleride Eklenecek]</p>
                      </div>
                      <p className="text-center mt-2 font-semibold">Öncesi</p>
                    </div>
                    <div>
                      <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                        <p className="text-lg text-gray-600">[Sonrası Fotoğraf - İleride Eklenecek]</p>
                      </div>
                      <p className="text-center mt-2 font-semibold">Sonrası</p>
                    </div>
                  </div>
                  <p className="text-lg text-center">Hasta 3: Yoğun saç dökülmesi sonrası tam kapsamlı ekim yapıldı.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hasta Yorumları */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">Hastalarımız Ne Diyor?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <p className="text-lg italic mb-4">
                  “Dr. Gizem Kağıtçı’nın sedasyonlu saç ekimi sayesinde hiçbir ağrı hissetmedim. Eksozom tedavisiyle saçlarım daha hızlı tutundu ve sonuçlar çok doğal!”
                </p>
                <p className="text-lg font-semibold text-right">— Ahmet Y., 35</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <p className="text-lg italic mb-4">
                  “DHI yöntemiyle saç ekimi yaptırdım ve tıraş olmadan işlem yapıldı. Dr. Kağıtçı ve ekibi çok profesyonel, sonuçlardan çok memnunum!”
                </p>
                <p className="text-lg font-semibold text-right">— Elif S., 29</p>
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
                <p>Sedasyon sayesinde işlem sırasında ağrı hissedilmez, oldukça konforludur.</p>
              </li>
              <li>
                <strong className="text-lg">Ne zaman sonuç görürüm?</strong>
                <p>İlk sonuçlar 3-4 ayda başlar, tam sonuçlar 12-18 ayda ortaya çıkar.</p>
              </li>
              <li>
                <strong className="text-lg">Saç ekimi için yaş sınırı var mı?</strong>
                <p>18 yaş üstü herkes için uygundur, ancak saç dökülmesi stabilize olmalıdır.</p>
              </li>
              <li>
                <strong className="text-lg">Eksozom tedavisi saç ekimine nasıl katkı sağlar?</strong>
                <p>Eksozom tedavisi, saç köklerini güçlendirir, tutunma oranını artırır ve iyileşmeyi hızlandırır.</p>
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
                <p>FUE, DHI ve eksozom tedavisiyle doğal ve kalıcı sonuçlar.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-2">Konforlu Deneyim</h4>
                <p>Sedasyonla stressiz ve ağrısız bir operasyon süreci.</p>
              </div>
            </div>
          </div>

          {/* Sosyal Medya Bağlantıları */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">Bizi Sosyal Medyada Takip Edin</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.instagram.com/estpitalagency"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 flex items-center"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.982-6.98.058-1.281.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram’da Bizi Takip Edin
              </a>
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
