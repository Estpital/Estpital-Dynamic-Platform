import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';

// Görselleri import et
import DrGizemKagitci from '../assets/dr-gizem-kagitci-sac-ekimi.jpg';

function SacEkimi() {
  const { t } = useTranslation();
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
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
    },
    {
      question: "Saç ekimi sonrası saçlarım ne zaman dökülür?",
      answer: "Ekilen saçlar genellikle ilk 2-4 hafta içinde geçici olarak dökülür (şok dökülme). Ardından yeni saçlar büyümeye başlar."
    },
    {
      question: "Saç ekimi için saçlarımı tıraş ettirmem gerekir mi?",
      answer: "DHI yöntemiyle tıraşsız ekim yapılabilir. Ancak FUE yönteminde genellikle donör bölgenin tıraş edilmesi gerekir."
    },
    {
      question: "Sedasyonlu saç ekimi nedir?",
      answer: "Sedasyon, hastanın işlem sırasında hafif bir uyku halinde olmasını sağlar. Bu sayede ağrı veya stres hissedilmez, operasyon konforlu geçer."
    },
    {
      question: "Eksozom tedavisi saç ekimine nasıl katkı sağlar?",
      answer: "Eksozom tedavisi, saç köklerini güçlendirir, tutunma oranını artırır ve iyileşmeyi hızlandırır. Büyüme faktörleriyle saç kalitesini iyileştirir."
    },
    {
      question: "DHI yöntemi nedir ve avantajları nelerdir?",
      answer: "DHI (Direct Hair Implantation), saç köklerinin özel bir kalemle doğrudan ekildiği bir yöntemdir. Tıraşsız ekim, hızlı iyileşme ve doğal görünüm sağlar."
    },
    {
      question: "Saç ekimi sonrası nelere dikkat etmeliyim?",
      answer: "İlk 2 hafta başınızı korumalı, direkt güneş ışığından kaçınmalı ve doktorunuzun önerdiği şekilde saç yıkama yapmalısınız."
    },
    {
      question: "Saç ekimi sonrası kabuklanma olur mu?",
      answer: "Evet, ekim bölgesinde ilk 7-10 gün içinde kabuklanma olması normaldir. Bu kabuklar doktor önerilerine uygun yıkamayla dökülür."
    },
    {
      question: "Saç ekimi sırasında kanama olur mu?",
      answer: "Minimal düzeyde kanama olabilir, ancak modern teknikler sayesinde bu çok azdır ve kontrol altındadır."
    },
    {
      question: "Saç ekimi sonrası enfeksiyon riski var mı?",
      answer: "Steril koşullarda yapılan işlemlerde enfeksiyon riski çok düşüktür. Doktorunuzun önerdiği antibiyotikleri kullanmak riski daha da azaltır."
    },
    {
      question: "Saç ekimi için kaç greft gerekir?",
      answer: "Bu, saç dökülmesinin derecesine bağlıdır. Ortalama bir işlemde 2000-4000 greft ekilir, ancak bu sayı kişiye göre değişir."
    },
    {
      question: "Saç ekimi sonrası ne zaman normal hayata dönerim?",
      answer: "İlk 3-5 gün dinlenmeniz önerilir. İşe dönüş genellikle 7-10 gün içinde mümkündür, ancak ağır aktivitelerden 1 ay kaçınılmalıdır."
    },
    {
      question: "Saç ekimi sonrası saçlarım doğal görünür mü?",
      answer: "Evet, DHI ve FUE teknikleriyle ekilen saçlar, doğru açı ve yoğunlukla ekildiğinde tamamen doğal bir görünüm sağlar."
    },
    {
      question: "Saç ekimi sonrası saçlarımı ne zaman boyatabilirim?",
      answer: "Operasyondan sonra en az 3 ay beklenmesi önerilir. Saç köklerinin tamamen yerleşmesi için bu süre önemlidir."
    },
    {
      question: "Saç ekimi sonrası şapka takabilir miyim?",
      answer: "İlk 2 hafta şapka takılması önerilmez. Daha sonra, doktorunuzun önerdiği şekilde geniş ve yumuşak şapkalar kullanabilirsiniz."
    },
    {
      question: "Saç ekimi sonrası denize veya havuza girebilir miyim?",
      answer: "İlk 1 ay denize veya havuza girmek önerilmez. Enfeksiyon riskini önlemek için bu süre beklenmelidir."
    },
    {
      question: "Saç ekimi sonrası egzersiz yapabilir miyim?",
      answer: "İlk 2 hafta ağır egzersizlerden kaçınılmalıdır. Hafif yürüyüşler 1 hafta sonra yapılabilir, tam egzersize 1 ay sonra dönülebilir."
    },
    {
      question: "Saç ekimi sonrası sigara içebilir miyim?",
      answer: "Sigara, iyileşme sürecini olumsuz etkiler. Operasyondan önce ve sonra en az 2 hafta sigara içmemeniz önerilir."
    },
    {
      question: "Saç ekimi sonrası alkol tüketebilir miyim?",
      answer: "Alkol, kan dolaşımını etkileyerek iyileşmeyi yavaşlatabilir. Operasyondan sonra en az 1 hafta alkol tüketiminden kaçınılmalıdır."
    },
    {
      question: "Saç ekimi sonrası saçlarımı nasıl yıkarım?",
      answer: "Doktorunuzun önerdiği özel bir şampuan ve losyonla, ilk yıkama genellikle 3. günde yapılır. Nazik hareketlerle yıkama yapılmalıdır."
    },
    {
      question: "Saç ekimi sonrası saçlarımı ne zaman kestirebilirim?",
      answer: "Ekilen saçların yerleşmesi için ilk 1 ay makasla kesim önerilir. Tıraş makinesi kullanımı için 3 ay beklenmesi daha güvenlidir."
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-100 py-12 sm:py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">{t('hair_transplant.title')}</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            {t('hair_transplant.desc')}
          </p>
          <a
            href="/randevu"
            className="inline-block bg-blue-700 text-white px-5 py-2 sm:px-6 sm:py-3 text-base sm:text-lg rounded-lg hover:bg-blue-800"
          >
            {t('appointment')}
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Genel Bilgi */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">{t('hair_transplant.what_is')}</h3>
            <p className="text-base sm:text-lg max-w-3xl mx-auto">
              {t('hair_transplant.what_is_desc')}
            </p>
          </div>

          {/* Kimler İçin Uygun? */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">{t('hair_transplant.who_is_eligible')}</h3>
            <ul className="list-disc list-inside space-y-4 max-w-3xl mx-auto text-base sm:text-lg">
              <li>{t('hair_transplant.who_is_eligible_1')}</li>
              <li>{t('hair_transplant.who_is_eligible_2')}</li>
              <li>{t('hair_transplant.who_is_eligible_3')}</li>
              <li>{t('hair_transplant.who_is_eligible_4')}</li>
              <li>{t('hair_transplant.who_is_eligible_5')}</li>
            </ul>
          </div>

          {/* Operasyon Süreci */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">{t('hair_transplant.process_title')}</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl sm:text-2xl font-semibold mb-4">{t('hair_transplant.consultation_title')}</h4>
                <p className="text-base sm:text-lg">
                  {t('hair_transplant.consultation_desc')}
                </p>
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-semibold mb-4">{t('hair_transplant.operation_title')}</h4>
                <p className="text-base sm:text-lg">
                  {t('hair_transplant.operation_desc')}
                </p>
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-semibold mb-4">{t('hair_transplant.recovery_title')}</h4>
                <p className="text-base sm:text-lg">
                  {t('hair_transplant.recovery_desc')}
                </p>
              </div>
            </div>
          </div>

          {/* Doktor Bilgisi */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Uzman Doktorumuz: Dr. Gizem Kağıtçı</h3>
            <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
              <div className="md:w-1/3">
                <img
                  src={DrGizemKagitci}
                  alt="Dr. Gizem Kağıtçı"
                  className="h-48 sm:h-64 w-full object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-base sm:text-lg mb-4">
                  Dr. Gizem Kağıtçı, saç ekimi ve medikal estetik alanında 10 yılı aşkın deneyime sahip bir uzmandır. İstanbul Üniversitesi Tıp Fakültesi’nden mezun olan Dr. Kağıtçı, uzmanlığını plastik cerrahi ve saç ekimi teknikleri üzerine tamamlamıştır. Türk Plastik, Rekonstrüktif ve Estetik Cerrahi Derneği üyesidir ve ulusal/uluslararası kongreleri takip ederek en güncel yöntemleri hastalarına sunar.
                </p>
                <p className="text-base sm:text-lg mb-4">
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
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Sedasyon ile Saç Ekimi Konforu</h3>
            <p className="text-base sm:text-lg max-w-3xl mx-auto mb-6">
              Dr. Gizem Kağıtçı, sedasyonlu saç ekimiyle hastalarına ağrısız ve stressiz bir deneyim sunar. Sedasyon, işlem sırasında hastanın hafif bir uyku halinde olmasını sağlar, böylece iğne korkusu veya operasyon stresi yaşanmaz. Bu yöntem, özellikle uzun süren işlemlerde büyük bir konfor sağlar.
            </p>
            <ul className="list-disc list-inside space-y-4 max-w-3xl mx-auto text-base sm:text-lg">
              <li>Hasta işlem sırasında ağrı veya rahatsızlık hissetmez.</li>
              <li>Sedasyon, hastanın sakin ve rahat bir şekilde operasyonu geçirmesini sağlar.</li>
              <li>İyileşme sürecinde de daha az stres yaşanır.</li>
            </ul>
          </div>

          {/* Eksozom Tedavisiyle Kombine Saç Ekimi */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Eksozom Tedavisiyle Kombine Saç Ekimi</h3>
            <p className="text-base sm:text-lg max-w-3xl mx-auto mb-6">
              Dr. Kağıtçı, saç ekimi işlemlerini eksozom tedavisiyle destekleyerek daha etkili sonuçlar elde eder. Eksozomlar, saç köklerini güçlendiren ve büyüme faktörleriyle destekleyen mikroskobik yapılar içerir. Bu tedavi, ekim sonrası saç köklerinin tutunma oranını artırır ve iyileşme sürecini hızlandırır.
            </p>
            <ul className="list-disc list-inside space-y-4 max-w-3xl mx-auto text-base sm:text-lg">
              <li>Saç köklerinin tutunma oranı artar, daha sağlıklı saçlar çıkar.</li>
              <li>İyileşme süreci hızlanır, kızarıklık ve şişlik azalır.</li>
              <li>Minimal invaziv bir yöntemdir, cerrahi riskler içermez.</li>
            </ul>
          </div>

          {/* DHI Yönteminin Avantajları */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">DHI Yönteminin Avantajları</h3>
            <p className="text-base sm:text-lg max-w-3xl mx-auto mb-6">
              Dr. Kağıtçı, DHI (Direct Hair Implantation) yöntemiyle saç ekiminde doğal ve kalıcı sonuçlar sunar. Bu yöntem, özel bir kalemle saç köklerinin doğrudan ekilmesini sağlar, böylece tıraşsız ekim mümkün olur ve iyileşme süreci hızlanır.
            </p>
            <ul className="list-disc list-inside space-y-4 max-w-3xl mx-auto text-base sm:text-lg">
              <li>Tıraşsız ekim imkanı sunar, saçlarınızı kesmeden işlem yapılabilir.</li>
              <li>Minimal doku hasarı ve hızlı iyileşme sağlar.</li>
              <li>Doğal görünüm ve yoğun saçlar için ideal bir yöntemdir.</li>
            </ul>
          </div>

          {/* Hasta Yorumları */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Hastalarımız Ne Diyor?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow">
                <p className="text-sm sm:text-lg italic mb-4">
                  “Dr. Gizem Kağıtçı’nın sedasyonlu saç ekimi sayesinde hiçbir ağrı hissetmedim. Eksozom tedavisiyle saçlarım daha hızlı tutundu ve sonuçlar çok doğal!”
                </p>
                <p className="text-sm sm:text-lg font-semibold text-right">— Ahmet Y., 35</p>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow">
                <p className="text-sm sm:text-lg italic mb-4">
                  “DHI yöntemiyle saç ekimi yaptırdım ve tıraş olmadan işlem yapıldı. Dr. Kağıtçı ve ekibi çok profesyonel, sonuçlardan çok memnunum!”
                </p>
                <p className="text-sm sm:text-lg font-semibold text-right">— Elif S., 29</p>
              </div>
            </div>
          </div>

          {/* Sık Sorulan Sorular - Accordion Yapısı */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Sık Sorulan Sorular</h3>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full text-left py-4 px-4 sm:px-6 flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition"
                  >
                    <span className="text-sm sm:text-lg font-semibold">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform ${openQuestion === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  {openQuestion === index && (
                    <div className="py-4 px-4 sm:px-6 bg-gray-50">
                      <p className="text-sm sm:text-lg">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Neden Biz? */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Neden Estpital?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow">
                <h4 className="text-lg sm:text-xl font-semibold mb-2">Uzman Kadro</h4>
                <p className="text-sm sm:text-lg">Dr. Gizem Kağıtçı liderliğinde deneyimli ekibimizle hizmetinizdeyiz.</p>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow">
                <h4 className="text-lg sm:text-xl font-semibold mb-2">Modern Teknikler</h4>
                <p className="text-sm sm:text-lg">FUE, DHI ve eksozom tedavisiyle doğal ve kalıcı sonuçlar.</p>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow">
                <h4 className="text-lg sm:text-xl font-semibold mb-2">Konforlu Deneyim</h4>
                <p className="text-sm sm:text-lg">Sedasyonla stressiz ve ağrısız bir operasyon süreci.</p>
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
              {t('appointment')}
            </a>
          </div>
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
