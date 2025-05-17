import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          navbar: {
            home: "Home",
            doctors: "Our Doctors",
          },
          service_names: {
            hair_transplant: "Hair Transplant",
            rhinoplasty: "Rhinoplasty",
            breast_aesthetics: "Breast Aesthetics",
            facial_aesthetics: "Facial Aesthetics",
            fillers_botox: "Fillers & Botox",
            dental_treatments: "Dental Treatments",
            tummy_tuck: "Tummy Tuck",
          },
          welcome: "Welcome to Estpital!",
          welcome_desc: "Transform your life with our expert aesthetic solutions.",
          appointment: "Book an Appointment",
          whatsapp: "Contact via WhatsApp",
          footer_copyright: "© 2025 Estpital. All rights reserved.",
          footer_contact: "Contact us: info@estpital.com | +90 544 107 25 70",
          // Saç ekimi için özel çeviriler
          deep_sleep_method: "Painless Hair Transplant with Deep Sleep Method",
          deep_sleep_desc: "Experience a pain-free procedure with sedation! We perform local anesthesia during a 15-20 minute deep sleep, ensuring a comfortable process with the DHI technique under Dr. Gizem Kağıtçı's supervision in a hospital setting.",
          doctor_gizem: "Dr. Gizem Kağıtçı",
          doctor_gizem_desc: "With over 10 years of experience in hair transplantation and aesthetic surgery, Dr. Gizem Kağıtçı personally oversees all procedures in a hospital environment, delivering natural results with international certifications.",
          dhi_advantages_title: "Advantages of the DHI Method",
          dhi_advantages: {
            denser_implantation: "Denser Implantation: Allows 15-20 more grafts per square centimeter.",
            natural_angles: "Natural Angles: Precise angles are achieved using specialized pens.",
            no_channels: "No Channels: Minimal bleeding as no channels are opened, avoiding the use of drugs like adrenaline.",
            fast_recovery: "Fast Recovery: Grafts heal faster as channels match graft size.",
            no_shaving: "No Shaving: Can be applied to hairy areas without shaving.",
            less_edema: "Less Edema: No scalp preparation reduces post-operative swelling.",
          },
          process_title: "Our Hair Transplant Process",
          process_steps: {
            appointment: "Appointment & Preparation: After booking, we send a treatment kit to prepare your scalp and body, enhancing blood circulation.",
            operation_day: "Operation Day: During a 15-20 minute deep sleep with sedation, we apply local anesthesia. After the scalp is numbed, the patient is awakened, and the DHI procedure continues.",
            day_1: "Day 1: Dressing Removal: The dressing is removed the day after the operation.",
            day_2: "Day 2: Washing Training: We train the patient on washing, and the process begins.",
            day_10_12: "Day 10-12: Crust Removal: Crust removal is performed on days 10 and 12.",
            day_20: "Day 20: Temporary Shedding: Temporary shedding phase begins.",
            day_90_100: "Day 90-100: First Growth: Initial hair growth starts.",
            month_6: "Month 6: 60-70% Growth: 60-70% of the transplanted hair has grown.",
            month_12_18: "Month 12-18: Full Results: The full process takes 12-18 months for complete results.",
          },
          cta_title: "Ready for a New Beginning?",
          cta_desc: "Book an appointment now for a pain-free and natural hair transplant experience with Dr. Gizem Kağıtçı!"
        },
      },
      tr: {
        translation: {
          navbar: {
            home: "Ana Sayfa",
            doctors: "Doktorlarımız",
          },
          service_names: {
            hair_transplant: "Saç Ekimi",
            rhinoplasty: "Burun Estetiği",
            breast_aesthetics: "Meme Estetiği",
            facial_aesthetics: "Yüz Estetiği",
            fillers_botox: "Dolgu & Botoks",
            dental_treatments: "Diş Tedavileri",
            tummy_tuck: "Karın Germe",
          },
          welcome: "Estpital’e Hoş Geldiniz!",
          welcome_desc: "Uzman estetik çözümlerimizle hayatınızı dönüştürün.",
          appointment: "Randevu Al",
          whatsapp: "WhatsApp ile İletişim",
          footer_copyright: "© 2025 Estpital. Tüm hakları saklıdır.",
          footer_contact: "İletişim: info@estpital.com | +90 544 107 25 70",
          // Saç ekimi için özel çeviriler
          deep_sleep_method: "Derin Uyku ile Ağrısız Saç Ekimi",
          deep_sleep_desc: "Sedasyon yöntemiyle ağrısız bir deneyim! DHI tekniği ile doğal ve kalıcı sonuçlar. Dr. Gizem Kağıtçı gözetiminde, hastane ortamında.",
          doctor_gizem: "Dr. Gizem Kağıtçı",
          doctor_gizem_desc: "Saç ekimi ve estetik cerrahi alanında 10 yılı aşkın deneyime sahip olan Dr. Gizem Kağıtçı, tüm operasyonları hastane ortamında bizzat yönetiyor. Uluslararası sertifikalı uzmanlığıyla doğal sonuçlar sunuyor.",
          dhi_advantages_title: "DHI Yönteminin Avantajları",
          dhi_advantages: {
            denser_implantation: "Daha Yoğun Ekim: Santimetre kare başına 15-20 greft daha fazla implantasyon sağlar.",
            natural_angles: "Doğal Açılar: Kalemler sayesinde doğal saç açıları daha rahat verilebilir.",
            no_channels: "Kanal Açılmaz: Kanal açılmadığı için kanama minimumdur ve adrenalin gibi ilaçlar kullanılmaz.",
            fast_recovery: "Hızlı İyileşme: Greft büyüklüğünde kanallar sayesinde saç derisi hızlı kavrar, iyileşme süreci hızlanır.",
            no_shaving: "Traşsız Uygulama: Saçlı bölgelerde traş edilmeden işlem gerçekleştirilebilir.",
            less_edema: "Daha Az Ödem: Saç derisi pişirilmediği için ödem gibi şikayetler en aza iner.",
          },
          process_title: "Saç Ekimi Sürecimiz",
          process_steps: {
            appointment: "Randevu ve Hazırlık: Randevu alındıktan sonra hastanın adresine saç derisini ve vücudunu operasyona hazırlayacak, kan dolaşımını artıran bir tedavi kiti gönderiyoruz.",
            operation_day: "Operasyon Günü: Sedasyon (derin uyku) yöntemiyle 15-20 dakikalık bir uyku sırasında lokal anestezi uyguluyoruz. Saç derisi uyuştuktan sonra hastayı uyandırıp DHI yöntemiyle operasyona devam ediyoruz.",
            day_1: "1. Gün: Pansuman Çıkarılması: Operasyondan sonraki gün pansuman çıkarılıyor.",
            day_2: "2. Gün: Yıkama Eğitimi: İkinci gün hastaya saç yıkama eğitimi veriyoruz ve yıkama süreci başlıyor.",
            day_10_12: "10-12. Gün: Kabuk Dökümü: 10. ve 12. günlerde kabuk döküm işlemi gerçekleştiriliyor.",
            day_20: "20. Gün: Geçici Dökülme: 20. günde geçici dökülme evresi başlıyor.",
            day_90_100: "90-100. Gün: İlk Çıkışlar: 90-100 gün sonra ekilen saçların ilk çıkışları başlıyor.",
            month_6: "6. Ay: %60-70 Çıkış: 6. ay sonunda ekilen saçların %60-70’i çıkmış oluyor.",
            month_12_18: "12-18. Ay: Tam Sonuç: Tüm süreç 12-18 ay sürüyor ve ekilen saçlar tam sonuç veriyor.",
          },
          cta_title: "Yeni Bir Başlangıç İçin Hazır mısınız?",
          cta_desc: "Dr. Gizem Kağıtçı ile ağrısız ve doğal saç ekimi deneyimi için hemen randevu alın!"
        },
      },
    },
    lng: 'tr',
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
