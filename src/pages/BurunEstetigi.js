import Navbar from '../components/Navbar';

function BurunEstetigi() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-100 py-12 sm:py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">Burun Estetiği ile Yüzünüzdeki Uyumu Yakalayın</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Estpital’de uzman ekibimizle doğal, estetik ve yüzünüze en uygun burun tasarımını sunuyoruz. Hem estetik hem fonksiyonel çözümler için hemen randevu alın!
          </p>
          <a
            href="/randevu"
            className="inline-block bg-blue-700 text-white px-5 py-2 sm:px-6 sm:py-3 text-base sm:text-lg rounded-lg hover:bg-blue-800"
          >
            Ücretsiz Danışmanlık için Randevu Al
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Genel Bilgi */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Burun Estetiği (Rinoplasti) Nedir?</h3>
            <p className="text-base sm:text-lg max-w-3xl mx-auto">
              Burun estetiği, burunun şeklini, boyutunu veya yapısını değiştirerek estetik bir görünüm kazanmasını sağlayan cerrahi bir işlemdir. Aynı zamanda nefes alma sorunları gibi fonksiyonel problemleri çözmek için de uygulanabilir. Estpital International Agency olarak, hem estetik kaygıları hem de sağlık ihtiyaçlarını dikkate alarak kişiye özel çözümler sunuyoruz.
            </p>
          </div>

          {/* Kimler İçin Uygun? */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Burun Estetiği Kimler İçin Uygundur?</h3>
            <ul className="list-disc list-inside space-y-4 max-w-3xl mx-auto text-base sm:text-lg">
              <li>Burun şeklinden veya boyutundan memnun olmayanlar.</li>
              <li>Nefes alma güçlüğü çekenler (ör. septum deviasyonu olanlar).</li>
              <li>Burun travması geçirmiş ve deformasyon yaşayanlar.</li>
              <li>18 yaşını geçmiş, burun gelişimi tamamlanmış bireyler.</li>
              <li>Genel sağlık durumu iyi olan ve gerçekçi beklentilere sahip kişiler.</li>
            </ul>
          </div>

          {/* Operasyon Süreci */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Burun Estetiği Operasyon Süreci</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl sm:text-2xl font-semibold mb-4">Danışmanlık ve Planlama</h4>
                <p className="text-base sm:text-lg">
                  İlk adımda, uzman doktorumuz Op. Dr. Ummahan Özaslan ile yüz analizi yapılır. Yüz yapınıza en uygun burun şekli belirlenir ve beklentileriniz değerlendirilir. 3D simülasyonlarla operasyon sonrası görünüm hakkında fikir sahibi olabilirsiniz.
                </p>
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-semibold mb-4">Operasyon</h4>
                <p className="text-base sm:text-lg">
                  Operasyon genellikle 2-3 saat sürer ve genel anestezi altında gerçekleştirilir. Açık veya kapalı rinoplasti teknikleri kullanılabilir. Estpital’de piezo (ultrasonik) yöntemiyle daha hassas ve doğal sonuçlar elde ediyoruz.
                </p>
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-semibold mb-4">İyileşme Süreci</h4>
                <p className="text-base sm:text-lg">
                  Operasyon sonrası ilk 1-2 hafta içinde şişlik ve morluklar azalır. Burun ateli 7 gün sonra çıkarılır. Tam sonuçlar 6-12 ay içinde netleşir. İyileşme sürecinde doktor önerilerine uymak çok önemlidir.
                </p>
              </div>
            </div>
          </div>

          {/* Doktor Bilgisi */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Uzman Doktorumuz: Op. Dr. Ummahan Özaslan</h3>
            <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
              <div className="md:w-1/3">
                <div className="bg-gray-200 h-48 sm:h-64 rounded-lg flex items-center justify-center">
                  <p className="text-base sm:text-lg text-gray-600">[Dr. Ummahan Özaslan’ın Fotoğrafı - İleride Eklenecek]</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-base sm:text-lg mb-4">
                  Op. Dr. Ummahan Özaslan, Plastik ve Rekonstrüktif Cerrahi alanında 15 yılı aşkın deneyime sahip bir uzmandır. Denizli’de doğup büyüyen Dr. Özaslan, 1998 yılında Ege Üniversitesi Tıp Fakültesi’nden mezun olmuştur. Plastik Cerrahi ihtisasını Celal Bayar Üniversitesi’nde tamamlamış, 2007 yılında ise ABD’de Cleveland University Hospital’da dünyaca ünlü plastik cerrah Dr. Bahman Guyuron’un yanında yüz ve burun estetiği üzerine fellowship eğitimi almıştır.
                </p>
                <p className="text-base sm:text-lg mb-4">
                  2013 yılından beri Denizli’deki kendi muayenehanesinde hasta kabul eden Dr. Özaslan, ameliyatlarını özel hastanelerde gerçekleştirmektedir. Estetik cerrahide burun estetiği, yüz estetiği, meme estetiği ve karın estetiği üzerine yoğunlaşmıştır. Ulusal ve uluslararası kongreleri yakından takip ederek en güncel teknikleri hastalarına sunar. Türk Tabipler Birliği ve Türk Estetik Cerrahi Derneği üyesidir.
                </p>
                <p className="text-base sm:text-lg mb-4">
                  Dr. Özaslan, hastalarına sakin ve güler yüzlü yaklaşımıyla tanınır. Operasyon sürecinde hastalarını detaylı bir şekilde bilgilendirir ve her zaman destekleyici bir tutum sergiler.
                </p>
                <a
                  href="/doktorlar/ummahan-ozaslan"
                  className="inline-block bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
                >
                  Dr. Özaslan Hakkında Daha Fazla Bilgi Edinin
                </a>
              </div>
            </div>
          </div>

          {/* Teknik Detaylar */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Kullanılan Teknikler</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow">
                <h4 className="text-lg sm:text-xl font-semibold mb-2">Açık Rinoplasti</h4>
                <p className="text-sm sm:text-lg">
                  Burun ucunda küçük bir kesi açılarak gerçekleştirilir. Daha karmaşık durumlarda tercih edilir ve doktorun burun yapısına daha iyi müdahale etmesini sağlar.
                </p>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow">
                <h4 className="text-lg sm:text-xl font-semibold mb-2">Kapalı Rinoplasti</h4>
                <p className="text-sm sm:text-lg">
                  Kesiler burun içinde yapılır, dışarıdan iz kalmaz. Daha az invaziv bir yöntemdir ve iyileşme süreci genellikle daha hızlıdır.
                </p>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow">
                <h4 className="text-lg sm:text-xl font-semibold mb-2">Piezo (Ultrasonik) Rinoplasti</h4>
                <p className="text-sm sm:text-lg">
                  Ultrasonik cihazlarla burun kemikleri şekillendirilir. Daha az travmatik bir yöntemdir, morluk ve şişlik riskini azaltır.
                </p>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow">
                <h4 className="text-lg sm:text-xl font-semibold mb-2">Non-Cerrahi Rinoplasti</h4>
                <p className="text-sm sm:text-lg">
                  Küçük düzeltmeler için dolgu kullanılarak cerrahi olmadan burun şekli değiştirilebilir. Geçici bir yöntemdir ve 6-12 ay etkilidir.
                </p>
              </div>
            </div>
          </div>

          {/* Öncesi/Sonrası */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Burun Estetiği Öncesi ve Sonrası</h3>
            <p className="text-base sm:text-lg text-center mb-6 max-w-3xl mx-auto">
              Hastalarımızın burun estetiği öncesi ve sonrası değişimlerini burada görebilirsiniz. Her hasta için kişiselleştirilmiş çözümler sunuyoruz.
            </p>
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-4 sm:space-x-6 pb-4">
                {/* Örnek 1 */}
                <div className="min-w-[250px] sm:min-w-[300px] bg-gray-50 p-4 sm:p-6 rounded-lg shadow">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <img
                        src="/src/assets/before-after/before1.jpg"
                        alt="Öncesi"
                        className="h-40 sm:h-48 w-full object-cover rounded-lg"
                        onError={(e) => (e.target.src = "/src/assets/before-after/placeholder-before.jpg")} // Yüklenemezse yedek görsel
                      />
                      <p className="text-center mt-2 font-semibold text-sm sm:text-base">Öncesi</p>
                    </div>
                    <div>
                      <img
                        src="/src/assets/before-after/after1.jpg"
                        alt="Sonrası"
                        className="h-40 sm:h-48 w-full object-cover rounded-lg"
                        onError={(e) => (e.target.src = "/src/assets/before-after/placeholder-after.jpg")} // Yüklenemezse yedek görsel
                      />
                      <p className="text-center mt-2 font-semibold text-sm sm:text-base">Sonrası</p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-lg text-center">Hasta 1: Asimetrik burun yapısı düzeltildi, doğal bir görünüm elde edildi.</p>
                </div>
                {/* Örnek 2 */}
                <div className="min-w-[250px] sm:min-w-[300px] bg-gray-50 p-4 sm:p-6 rounded-lg shadow">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <img
                        src="/src/assets/before-after/before2.jpg"
                        alt="Öncesi"
                        className="h-40 sm:h-48 w-full object-cover rounded-lg"
                        onError={(e) => (e.target.src = "/src/assets/before-after/placeholder-before.jpg")} // Yüklenemezse yedek görsel
                      />
                      <p className="text-center mt-2 font-semibold text-sm sm:text-base">Öncesi</p>
                    </div>
                    <div>
                      <img
                        src="/src/assets/before-after/after2.jpg"
                        alt="Sonrası"
                        className="h-40 sm:h-48 w-full object-cover rounded-lg"
                        onError={(e) => (e.target.src = "/src/assets/before-after/placeholder-after.jpg")} // Yüklenemezse yedek görsel
                      />
                      <p className="text-center mt-2 font-semibold text-sm sm:text-base">Sonrası</p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-lg text-center">Hasta 2: Burun ucu kaldırıldı, yüz simetrisi sağlandı.</p>
                </div>
                {/* Örnek 3 */}
                <div className="min-w-[250px] sm:min-w-[300px] bg-gray-50 p-4 sm:p-6 rounded-lg shadow">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <img
                        src="/src/assets/before-after/before3.jpg"
                        alt="Öncesi"
                        className="h-40 sm:h-48 w-full object-cover rounded-lg"
                        onError={(e) => (e.target.src = "/src/assets/before-after/placeholder-before.jpg")} // Yüklenemezse yedek görsel
                      />
                      <p className="text-center mt-2 font-semibold text-sm sm:text-base">Öncesi</p>
                    </div>
                    <div>
                      <img
                        src="/src/assets/before-after/after3.jpg"
                        alt="Sonrası"
                        className="h-40 sm:h-48 w-full object-cover rounded-lg"
                        onError={(e) => (e.target.src = "/src/assets/before-after/placeholder-after.jpg")} // Yüklenemezse yedek görsel
                      />
                      <p className="text-center mt-2 font-semibold text-sm sm:text-base">Sonrası</p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-lg text-center">Hasta 3: Nefes alma sorunu çözüldü, estetik bir burun tasarlandı.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hasta Yorumları */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Hastalarımız Ne Diyor?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow">
                <p className="text-sm sm:text-lg italic mb-4">
                  “Dr. Ummahan Özaslan ve ekibi harika bir iş çıkardı! Yeni burnum yüzümle çok uyumlu ve nefes almam çok rahatladı. Süreç boyunca kendimi çok güvende hissettim.”
                </p>
                <p className="text-sm sm:text-lg font-semibold text-right">— Ayşe K., 32</p>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow">
                <p className="text-sm sm:text-lg italic mb-4">
                  “Estpital’e burun estetiği için geldim ve sonuçtan çok memnunum. Dr. Özaslan’ın sakin ve destekleyici yaklaşımı beni çok rahatlattı. Kesinlikle tavsiye ederim!”
                </p>
                <p className="text-sm sm:text-lg font-semibold text-right">— Mehmet T., 28</p>
              </div>
            </div>
          </div>

          {/* Riskler ve Komplikasyonlar */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Riskler ve Komplikasyonlar</h3>
            <p className="text-base sm:text-lg max-w-3xl mx-auto mb-6">
              Her cerrahi işlemde olduğu gibi, burun estetiğinde de bazı riskler bulunmaktadır. Ancak Estpital’de bu riskleri en aza indirmek için modern teknikler ve deneyimli bir ekip ile çalışıyoruz.
            </p>
            <ul className="list-disc list-inside space-y-4 max-w-3xl mx-auto text-base sm:text-lg">
              <li>Geçici şişlik ve morluk (genellikle 1-2 haftada geçer).</li>
              <li>Nadiren enfeksiyon (antibiyotiklerle kontrol altına alınır).</li>
              <li>Burun şeklinde istenmeyen sonuçlar (revizyon rinoplasti ile düzeltilebilir).</li>
              <li>Geçici nefes alma zorluğu (iyileşme sürecinde normale döner).</li>
            </ul>
          </div>

          {/* Sık Sorulan Sorular */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Sık Sorulan Sorular</h3>
            <ul className="space-y-6 max-w-3xl mx-auto text-base sm:text-lg">
              <li>
                <strong className="text-sm sm:text-lg">Burun estetiği ağrılı mı?</strong>
                <p>Genel anestezi altında yapıldığı için işlem sırasında ağrı hissedilmez. İyileşme sürecinde hafif bir rahatsızlık olabilir, ancak bu ağrı kesicilerle yönetilebilir.</p>
              </li>
              <li>
                <strong className="text-sm sm:text-lg">İyileşme süreci ne kadar sürer?</strong>
                <p>İlk 1-2 haftada şişlik ve morluklar azalır, burun ateli 7 gün sonra çıkarılır. Tam sonuçlar 6-12 ayda netleşir.</p>
              </li>
              <li>
                <strong className="text-sm sm:text-lg">Sonuçlar kalıcı mı?</strong>
                <p>Evet, burun estetiği sonuçları genellikle kalıcıdır. Ancak yaşlanma veya travma gibi faktörler uzun vadede değişikliklere neden olabilir.</p>
              </li>
              <li>
                <strong className="text-sm sm:text-lg">Ameliyat sonrası iz kalır mı?</strong>
                <p>Kapalı rinoplasti tercih edilirse iz kalmaz. Açık rinoplastide burun ucunda küçük bir iz olabilir, ancak bu iz zamanla neredeyse görünmez hale gelir.</p>
              </li>
              <li>
                <strong className="text-sm sm:text-lg">Burun estetiği nefes alma sorunlarını çözer mi?</strong>
                <p>Evet, septum deviasyonu gibi nefes alma sorunları aynı operasyonda düzeltilebilir.</p>
              </li>
            </ul>
          </div>

          {/* Neden Biz? */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Neden Estpital?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow">
                <h4 className="text-lg sm:text-xl font-semibold mb-2">Uzman Kadro</h4>
                <p className="text-sm sm:text-lg">Dr. Ummahan Özaslan liderliğinde deneyimli ekibimizle hizmetinizdeyiz.</p>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow">
                <h4 className="text-lg sm:text-xl font-semibold mb-2">Kişiselleştirilmiş Çözümler</h4>
                <p className="text-sm sm:text-lg">Yüzünüze en uygun burun tasarımını birlikte planlıyoruz.</p>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow">
                <h4 className="text-lg sm:text-xl font-semibold mb-2">Modern Teknikler</h4>
                <p className="text-sm sm:text-lg">Piezo rinoplasti ve kapalı tekniklerle güvenli ve doğal sonuçlar.</p>
              </div>
            </div>
          </div>

          {/* Sosyal Medya Bağlantıları */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Bizi Sosyal Medyada Takip Edin</h3>
            <div className="flex justify-center space-x-4 sm:space-x-6">
              <a
                href="https://www.instagram.com/estpitalagency"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-pink-600 flex items-center"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.982-6.98.058-1.281.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-sm sm:text-base">Instagram’da Bizi Takip Edin</span>
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Hayalinizdeki Görünüme Kavuşun!</h3>
            <a
              href="/randevu"
              className="inline-block bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-800 text-sm sm:text-lg"
            >
              Ücretsiz Danışmanlık için Randevu Al
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-4 sm:p-6">
        <div className="container mx-auto text-center text-sm sm:text-base">
          <p className="mb-2">© 2025 Estpital International Agency. Tüm hakları saklıdır.</p>
          <p>E-posta: info@estpital.com | Telefon: +90 212 123 45 67</p>
        </div>
      </footer>
    </div>
  );
}

export default BurunEstetigi;
