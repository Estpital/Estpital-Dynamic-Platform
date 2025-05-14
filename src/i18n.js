import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Çeviri kaynakları
const resources = {
  tr: {
    translation: {
      welcome: "Hoş Geldiniz",
      welcome_desc: "Estpital International Agency ile hayalinizdeki görünüme kavuşun.",
      appointment: "Randevu Al",
      whatsapp: "WhatsApp ile İletişime Geç",
      footer_copyright: "© 2025 Estpital International Agency. Tüm hakları saklıdır.",
      footer_contact: "E-posta: info@estpital.com | Telefon: +90 212 123 45 67",
      service_names: {
        hair_transplant: "Saç Ekimi",
        rhinoplasty: "Burun Estetiği",
        breast_aesthetics: "Meme Estetiği",
        facial_aesthetics: "Yüz Estetiği",
        fillers_botox: "Dolgu ve Botoks",
        dental_treatments: "Diş Tedavileri",
        tummy_tuck: "Karın Germe",
      },
      navbar: {
        home: "Ana Sayfa",
        doctors: "Doktorlarımız",
        hair_transplant: "Saç Ekimi",
        rhinoplasty: "Burun Estetiği",
      },
      hair_transplant: {
        title: "Saç Ekimi ile Doğal ve Kalıcı Sonuçlar",
        desc: "Dr. Gizem Kağıtçı liderliğinde, modern tekniklerle ağrısız ve stressiz saç ekimi deneyimi.",
        what_is: "Saç Ekimi Nedir?",
        what_is_desc: "Saç ekimi, saç dökülmesi yaşayan bireylerin saçlarını geri kazanmasını sağlayan cerrahi bir işlemdir. FUE ve DHI gibi modern tekniklerle, donör bölgeden alınan saç kökleri, seyrek veya kellik olan bölgelere ekilir. Estpital’de sedasyonlu saç ekimiyle bu süreç ağrısız ve konforlu bir şekilde gerçekleştirilir.",
        who_is_eligible: "Kimler Saç Ekimi Yaptırabilir?",
        who_is_eligible_1: "Genetik saç dökülmesi (androgenetik alopesi) yaşayanlar.",
        who_is_eligible_2: "Saç dökülmesi stabilize olmuş, 25 yaş ve üzeri bireyler.",
        who_is_eligible_3: "Yeterli donör saça sahip olanlar (genellikle ense bölgesi).",
        who_is_eligible_4: "Genel sağlık durumu iyi olan ve cerrahi işleme uygun kişiler.",
        who_is_eligible_5: "Saç ekimi için gerçekçi beklentilere sahip olanlar.",
        process_title: "Saç Ekimi Süreci",
        consultation_title: "Danışmanlık ve Planlama",
        consultation_desc: "Uzman doktorumuz Dr. Gizem Kağıtçı ile saç dökülmesi analizi yapılır, ekim alanı ve greft sayısı belirlenir.",
        operation_title: "Operasyon Günü",
        operation_desc: "Sedasyon altında ağrısız bir şekilde saç kökleri alınır ve ekim gerçekleştirilir. İşlem 6-8 saat sürebilir.",
        recovery_title: "İyileşme ve Sonuçlar",
        recovery_desc: "İlk 3 gün dinlenme önerilir. Ekilen saçlar 3-4 ayda çıkmaya başlar, tam sonuçlar 12-18 ayda görülür.",
      },
    },
  },
  en: {
    translation: {
      welcome: "Welcome",
      welcome_desc: "Achieve your dream look with Estpital International Agency.",
      appointment: "Book an Appointment",
      whatsapp: "Contact via WhatsApp",
      footer_copyright: "© 2025 Estpital International Agency. All rights reserved.",
      footer_contact: "Email: info@estpital.com | Phone: +90 212 123 45 67",
      service_names: {
        hair_transplant: "Hair Transplant",
        rhinoplasty: "Rhinoplasty",
        breast_aesthetics: "Breast Aesthetics",
        facial_aesthetics: "Facial Aesthetics",
        fillers_botox: "Fillers & Botox",
        dental_treatments: "Dental Treatments",
        tummy_tuck: "Tummy Tuck",
      },
      navbar: {
        home: "Home",
        doctors: "Our Doctors",
        hair_transplant: "Hair Transplant",
        rhinoplasty: "Rhinoplasty",
      },
      hair_transplant: {
        title: "Natural and Permanent Results with Hair Transplant",
        desc: "Experience a painless and stress-free hair transplant with modern techniques under the leadership of Dr. Gizem Kağıtçı.",
        what_is: "What is Hair Transplant?",
        what_is_desc: "Hair transplant is a surgical procedure that helps individuals with hair loss regain their hair. Using modern techniques like FUE and DHI, hair follicles are taken from the donor area and transplanted to sparse or bald areas. At Estpital, this process is performed painlessly and comfortably with sedation.",
        who_is_eligible: "Who Can Get a Hair Transplant?",
        who_is_eligible_1: "Individuals experiencing genetic hair loss (androgenetic alopecia).",
        who_is_eligible_2: "People over 25 years old with stabilized hair loss.",
        who_is_eligible_3: "Those with sufficient donor hair (usually from the nape area).",
        who_is_eligible_4: "Individuals in good general health and suitable for surgical procedures.",
        who_is_eligible_5: "Those with realistic expectations for hair transplant results.",
        process_title: "Hair Transplant Process",
        consultation_title: "Consultation and Planning",
        consultation_desc: "Our expert doctor, Dr. Gizem Kağıtçı, analyzes your hair loss, determining the transplant area and the number of grafts.",
        operation_title: "Operation Day",
        operation_desc: "Hair follicles are extracted and transplanted painlessly under sedation. The procedure may take 6-8 hours.",
        recovery_title: "Recovery and Results",
        recovery_desc: "Rest is recommended for the first 3 days. Transplanted hair begins to grow in 3-4 months, with full results visible in 12-18 months.",
      },
    },
  },
};

i18n
  .use(initReactI18next) // React ile i18next'i bağla
  .init({
    resources,
    lng: "tr", // Varsayılan dil
    fallbackLng: "en", // Yedek dil
    interpolation: {
      escapeValue: false, // React zaten XSS koruması sağlar
    },
  });

export default i18n;
