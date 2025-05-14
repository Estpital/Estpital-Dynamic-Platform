import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  tr: {
    translation: {
      "welcome": "Estetik ve Sağlıkta Mükemmeliyet",
      "welcome_desc": "Saç ekimi, burun estetiği, meme estetiği ve daha fazlasında uzman ekibimizle yanınızdayız. Hayal ettiğiniz görünüme kavuşmak için hemen randevu alın!",
      "appointment": "Randevu Al",
      "banner_title": "Dr. Gizem Kağıtçı ile Uzman Saç Ekimi",
      "banner_desc": "Dr. Gizem Kağıtçı, 10 yılı aşkın deneyimiyle saç ekimi ve medikal estetik alanında uzman bir doktordur. Sedasyonlu saç ekimi, eksozom tedavisi ve DHI yöntemiyle doğal ve kalıcı sonuçlar sunar. Hayalinizdeki görünüme kavuşmak için hemen randevu alın!",
      "banner_button": "Daha Fazla Bilgi",
      "services": "Hizmetlerimiz",
      "whatsapp": "Bize Ulaşın",
      "footer_copyright": "© 2025 Estpital International Agency. Tüm hakları saklıdır.",
      "footer_contact": "E-posta: info@estpital.com | Telefon: +90 212 123 45 67",
      "navbar": {
        "home": "Ana Sayfa",
        "services": "Hizmetler",
        "about": "Hakkımızda",
        "contact": "İletişim",
        "appointment": "Randevu Al"
      },
      "services": {
        "hair_transplant": "Saç Ekimi",
        "rhinoplasty": "Burun Estetiği",
        "breast_aesthetics": "Meme Estetiği",
        "facial_aesthetics": "Yüz Estetiği",
        "fillers_botox": "Dolgu ve Botoks",
        "dental_treatments": "Diş Tedavileri",
        "tummy_tuck": "Karın Germe"
      },
      // Saç Ekimi Sayfası için metinler
      "hair_transplant": {
        "title": "Saç Ekimi ile Doğal ve Kalıcı Sonuçlar",
        "desc": "Dr. Gizem Kağıtçı liderliğinde, FUE ve DHI teknikleriyle saç ekiminde uzman çözümler sunuyoruz. Sedasyon ve eksozom tedavisiyle konforlu bir deneyim!",
        "what_is": "Saç Ekimi Nedir?",
        "what_is_desc": "Saç ekimi, saç dökülmesi yaşayan bireylerin sağlıklı saç köklerini saçsız veya seyrek bölgelere naklederek doğal bir görünüm elde etmesini sağlayan cerrahi bir işlemdir. Estpital’de, FUE ve DHI gibi modern tekniklerle kalıcı ve estetik sonuçlar sunuyoruz. Dr. Gizem Kağıtçı’nın liderliğinde, sedasyon ve eksozom tedavisiyle desteklenen işlemlerimiz, hem konforlu hem de etkili bir deneyim sağlar.",
        "who_is_eligible": "Saç Ekimi Kimler İçin Uygundur?",
        "who_is_eligible_1": "Genetik saç dökülmesi (androgenetik alopesi) yaşayanlar.",
        "who_is_eligible_2": "Travmatik saç kaybı veya seyrek saç yapısına sahip olanlar.",
        "who_is_eligible_3": "18 yaş üstü, yeterli donör saçı olan bireyler.",
        "who_is_eligible_4": "Sağlık durumu işlem için uygun olanlar.",
        "who_is_eligible_5": "Doğal ve kalıcı bir görünüm isteyenler.",
        "process_title": "Saç Ekimi Operasyon Süreci",
        "consultation_title": "Danışmanlık ve Planlama",
        "consultation_desc": "İlk adımda, Dr. Gizem Kağıtçı ile detaylı bir saç analizi yapılır. Saç dökülmesinin derecesi ve donör bölgenin durumu değerlendirilir. Kişiye özel bir ekim planı oluşturulur ve işlem detayları paylaşılır.",
        "operation_title": "Operasyon",
        "operation_desc": "Operasyon, genellikle 6-8 saat sürer ve sedasyon altında gerçekleştirilir. Donör bölgeden (genellikle ense) saç kökleri FUE veya DHI yöntemiyle alınır ve hedef bölgeye titizlikle ekilir. Sedasyon sayesinde ağrı veya stres hissedilmez.",
        "recovery_title": "İyileşme Süreci",
        "recovery_desc": "İlk 7-10 gün içinde kabuklanma ve kızarıklık azalır. Eksozom tedavisiyle desteklenen iyileşme süreci daha hızlıdır. İlk sonuçlar 3-4 ayda görülür, tam sonuçlar ise 12-18 ayda ortaya çıkar.",
      }
    },
  },
  en: {
    translation: {
      "welcome": "Excellence in Aesthetics and Health",
      "welcome_desc": "We are by your side with our expert team in hair transplantation, rhinoplasty, breast aesthetics, and more. Book an appointment now to achieve the look of your dreams!",
      "appointment": "Book an Appointment",
      "banner_title": "Expert Hair Transplantation with Dr. Gizem Kağıtçı",
      "banner_desc": "Dr. Gizem Kağıtçı, with over 10 years of experience, is a specialist in hair transplantation and medical aesthetics. She offers natural and permanent results with sedation hair transplantation, exosome therapy, and the DHI method. Book an appointment now to achieve the look of your dreams!",
      "banner_button": "Learn More",
      "services": "Our Services",
      "whatsapp": "Contact Us",
      "footer_copyright": "© 2025 Estpital International Agency. All rights reserved.",
      "footer_contact": "Email: info@estpital.com | Phone: +90 212 123 45 67",
      "navbar": {
        "home": "Home",
        "services": "Services",
        "about": "About Us",
        "contact": "Contact",
        "appointment": "Book an Appointment"
      },
      "services": {
        "hair_transplant": "Hair Transplantation",
        "rhinoplasty": "Rhinoplasty",
        "breast_aesthetics": "Breast Aesthetics",
        "facial_aesthetics": "Facial Aesthetics",
        "fillers_botox": "Fillers and Botox",
        "dental_treatments": "Dental Treatments",
        "tummy_tuck": "Tummy Tuck"
      },
      // Saç Ekimi Sayfası için metinler
      "hair_transplant": {
        "title": "Natural and Permanent Results with Hair Transplantation",
        "desc": "Led by Dr. Gizem Kağıtçı, we offer expert solutions in hair transplantation with FUE and DHI techniques. A comfortable experience with sedation and exosome therapy!",
        "what_is": "What is Hair Transplantation?",
        "what_is_desc": "Hair transplantation is a surgical procedure that allows individuals experiencing hair loss to achieve a natural look by transplanting healthy hair follicles to bald or thinning areas. At Estpital, we provide permanent and aesthetic results using modern techniques like FUE and DHI. Led by Dr. Gizem Kağıtçı, our procedures supported by sedation and exosome therapy offer both comfort and effectiveness.",
        "who_is_eligible": "Who is Eligible for Hair Transplantation?",
        "who_is_eligible_1": "Individuals experiencing genetic hair loss (androgenetic alopecia).",
        "who_is_eligible_2": "Those with traumatic hair loss or sparse hair structure.",
        "who_is_eligible_3": "Individuals over 18 with sufficient donor hair.",
        "who_is_eligible_4": "Those in good health suitable for the procedure.",
        "who_is_eligible_5": "People seeking a natural and permanent appearance.",
        "process_title": "Hair Transplantation Process",
        "consultation_title": "Consultation and Planning",
        "consultation_desc": "In the first step, a detailed hair analysis is conducted with Dr. Gizem Kağıtçı. The extent of hair loss and the condition of the donor area are evaluated. A personalized transplant plan is created, and procedure details are shared.",
        "operation_title": "Procedure",
        "operation_desc": "The procedure typically takes 6-8 hours and is performed under sedation. Hair follicles are extracted from the donor area (usually the nape) using FUE or DHI techniques and carefully implanted into the target area. Sedation ensures no pain or stress is felt.",
        "recovery_title": "Recovery Process",
        "recovery_desc": "Crusting and redness subside within the first 7-10 days. The recovery process is accelerated with exosome therapy. Initial results are visible in 3-4 months, with full results appearing in 12-18 months.",
      }
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "tr",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
