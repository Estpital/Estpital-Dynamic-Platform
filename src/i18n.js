import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Türkçe dil dosyası
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
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "tr", // Varsayılan dil Türkçe
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
